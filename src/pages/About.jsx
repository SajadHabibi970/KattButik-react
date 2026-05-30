import { Card } from "react-bootstrap";

function About() {
  return (
    <Card className="shadow-sm border-0">
      <Card.Body>
        <h1>Om ägaren</h1>

        <p>
          Kattbutiken drivs av Sajad Habibi. Målet med butiken är att visa olika
          kattraser på ett enkelt och modernt sätt.
        </p>

        <h2>Kontaktinformation</h2>

        <p>
          <strong>Namn:</strong> Sajad Habibi
        </p>

        <p>
          <strong>E-post:</strong> kontakt@kattbutik.se
        </p>

        <p>
          <strong>Adress:</strong> Sverige
        </p>
      </Card.Body>
    </Card>
  );
}

export default About;
