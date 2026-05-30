import { useEffect, useState } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";

import CatCard from "../components/CatCard";
import Pagination from "../components/Pagination";

function Cats() {
  const [cats, setCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const catsPerPage = 10;
  const fallbackImage = "https://placehold.co/400x300?text=Ingen+bild";

  useEffect(() => {
    async function fetchCats() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.thecatapi.com/v1/breeds?limit=30",
        );

        if (!response.ok) {
          throw new Error("Kunde inte hämta katter");
        }

        const data = await response.json();

        const catsWithImages = await Promise.all(
          data.map(async (cat) => {
            let imageUrl = cat.image?.url || "";

            if (!imageUrl && cat.reference_image_id) {
              try {
                const imageResponse = await fetch(
                  `https://api.thecatapi.com/v1/images/${cat.reference_image_id}`,
                );

                if (imageResponse.ok) {
                  const imageData = await imageResponse.json();
                  imageUrl = imageData.url || "";
                }
              } catch {
                console.log("Kunde inte hämta bild för:", cat.name);
              }
            }

            if (!imageUrl) {
              imageUrl = fallbackImage;
            }

            return {
              ...cat,
              imageUrl,
            };
          }),
        );

        setCats(catsWithImages);
      } catch {
        setError("Något gick fel när katterna skulle hämtas.");
      } finally {
        setLoading(false);
      }
    }

    fetchCats();
  }, []);

  const startIndex = (currentPage - 1) * catsPerPage;
  const visibleCats = cats.slice(startIndex, startIndex + catsPerPage);
  const totalPages = Math.ceil(cats.length / catsPerPage);

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
        <p className="mt-3">Hämtar katter...</p>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <section>
      <div className="page-header">
        <h1>Katter</h1>
        <p>Här visas katter som hämtas från The Cat API.</p>
      </div>

      <Row className="g-4">
        {visibleCats.map((cat) => (
          <Col key={cat.id} md={6} lg={4}>
            <CatCard cat={cat} />
          </Col>
        ))}
      </Row>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={goToPreviousPage}
        onNext={goToNextPage}
      />
    </section>
  );
}

export default Cats;
