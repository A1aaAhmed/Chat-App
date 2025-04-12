import { Container, Row, Col, Nav, Badge } from 'react-bootstrap';
import { FaUser, FaPhone, FaComments,FaUsers  } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hooks';

const Footer = () => {
  // const contacts = useAppSelector((state) => state.contacts.list);
  const chats = useAppSelector((state) => state.chats.list);
  const location = useLocation();
  if (location.pathname === '/profile' || location.pathname.includes('chat')) {
    return null;
  }
  
  return (
    <footer className="bg-light py-2 position-fixed bottom-0 w-100 border-top shadow-sm">
      <Container fluid className="p-0 m-0">
        <Row className="text-center">
          <Col>
            <Nav.Link
              as={Link}
              to="/contacts"
              className={location.pathname === '/contacts' ? 'text-primary' : 'text-secondary'}
            >
              <FaUsers  size={24} />
              <span>
                {/* <Badge bg="danger">{contacts?.length}</Badge> */}
                <p className="mb-0">Contacts</p>
              </span>
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link
              as={Link}
              to="/calls"
              className={location.pathname === '/calls' ? 'text-primary' : 'text-secondary'}
            >
              <FaPhone size={24} />
              <p className="mb-0">Calls</p>
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === '/' ? 'text-primary' : 'text-secondary'}
            >
              <div className="position-relative">
                <FaComments size={24} />
                <span>
                  <Badge bg="danger">{chats?.length}</Badge>
                  <p className="mb-0">Chats</p>
                </span>
              </div>
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link
              as={Link}
              to="/profile"
              className={location.pathname === '/settings' ? 'text-primary' : 'text-secondary'}
            >
              <FaUser size={24} />
              <p className="mb-0">Profile</p>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
