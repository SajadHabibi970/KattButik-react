import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Kattbutiken
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navigation" />

                <Navbar.Collapse id="main-navigation">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/">
                            Start
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/cats">
                            Katter
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/about">
                            Om Oss
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;