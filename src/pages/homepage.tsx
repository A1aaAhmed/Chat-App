
import { Col, Container, InputGroup, ListGroup, Nav, Navbar, Row } from "react-bootstrap";
import { FaCog, FaComments, FaEdit, FaPhone, FaSearch, FaUser } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (

    <>






<div className="d-flex flex-column vh-100">
      {/* Navbar */}
      <Navbar bg="light" className="shadow-sm px-3">
        <Navbar.Text className="fw-bold mx-auto">Chats</Navbar.Text>
        <FaEdit className="text-primary" />
      </Navbar>

      {/* Search Bar */}
      <Container className="mt-2">
        <InputGroup className="mb-3">
          <InputGroup.Text><FaSearch /></InputGroup.Text>
          <Form.Control type="text" placeholder="Search for messages or users" />
        </InputGroup>
      </Container>

      {/* Chat List */}
      <Container fluid className="flex-grow-1 overflow-auto">
        <ListGroup>
          <ListGroup.Item className="d-flex align-items-center">
            <FaUser className="text-primary me-3" size={32} />
            <div>
              <strong>Saved Messages</strong>
              <p className="mb-0 text-muted">image.jpeg</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center">
            <FaUser className="text-dark me-3" size={32} />
            <div>
              <strong>Pixsellz Team</strong>
              <p className="mb-0 text-muted">Hasan Web - GIF</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Container>

      {/* Footer */}
      <footer className="bg-light py-2 position-fixed bottom-0 w-100 border-top shadow-sm">
        <Container>
          <Row className="text-center">
            <Col>
            <Nav.Link  as={Link} to="/chatPage">
              <FaUser size={24} className="text-secondary" />
              <p className="mb-0 text-secondary">Contacts</p>
              </Nav.Link>
            </Col>
            <Col>
            <Nav.Link  as={Link} to="/infoPage">
              <FaPhone size={24} className="text-secondary" />
              <p className="mb-0 text-secondary">Calls</p>
              </Nav.Link>
            </Col>
            <Col>
            <Nav.Link  as={Link} to="/chatPage">
              <div className="position-relative">
                <FaComments size={24} className="text-primary" />
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">2</span>
              </div>
              <p className="mb-0 text-primary">Chats</p>
              </Nav.Link>
            </Col>
            <Col>
            <Nav.Link  as={Link} to="/profile">

              <FaCog size={24} className="text-secondary" />
              <p className="mb-0 text-secondary">Settings</p>
              </Nav.Link>

            </Col>
          </Row>
        </Container>
      </footer>
    </div>    </>
  )
}

export default Homepage
