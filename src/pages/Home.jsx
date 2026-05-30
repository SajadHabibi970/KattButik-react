import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroCat from "../assets/katt-bild.jpg";

function Home() {
  return (
    <section>
      <Card className="shadow-sm border-0 mb-4">
        <Card.Body className="p-4 p-md-5">
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-5 fw-bold mb-3">
                Välkommen till Katt Butik
              </h1>

              <p className="lead">
                Hos oss kan du upptäcka olika kattraser från hela världen.
              </p>

              <p>
                Katt Butik är en enkel React-applikation där du kan läsa om
                olika kattraser, se var de kommer ifrån och bläddra mellan
                katterna på ett tydligt sätt.
              </p>

              <Button as={Link} to="/cats" variant="primary" size="lg">
                Utforska katter
              </Button>
            </Col>

            <Col md={5} className="text-center mt-4 mt-md-0">
              <img
                src={heroCat}
                alt="Katt"
                className="img-fluid rounded shadow-sm home-image"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="shadow-sm border-0 mb-4">
        <Card.Body>
          <h2>Om vår kattbutik</h2>
          <p className="mb-0">
            Målet med Katt Butik är att göra det enkelt för besökare att
            upptäcka olika kattraser och få en snabb överblick över deras namn,
            ursprungsland och bild.
          </p>
        </Card.Body>
      </Card>

      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h2 className="h5">Olika kattraser</h2>
              <p>
                Se katter från olika delar av världen och lär dig mer om deras
                ursprung.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h2 className="h5">Tydlig kattlista</h2>
              <p>
                Katterna visas med namn, ursprungsland och bild i separata kort.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h2 className="h5">Bläddra mellan sidor</h2>
              <p>
                Listan är uppdelad i flera sidor så att du enkelt kan gå fram
                och tillbaka mellan katterna.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Home;
