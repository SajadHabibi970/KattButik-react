import { Card } from "react-bootstrap";

function CatCard({ cat }) {
  const fallbackImage = "https://placehold.co/400x300?text=Ingen+bild";
  const imageUrl = cat.imageUrl || fallbackImage;

  return (
    <Card className="h-100 shadow-sm cat-card">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={cat.name}
        className="cat-image"
        onError={(event) => {
          event.currentTarget.src = fallbackImage;
        }}
      />

      <Card.Body>
        <Card.Title>{cat.name}</Card.Title>

        <Card.Text>
          <strong>Ursprungsland:</strong> {cat.origin}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CatCard;
