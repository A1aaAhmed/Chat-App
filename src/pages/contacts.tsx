import { Badge, Button, Col, Container, ListGroup, Nav, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { Link } from "react-router-dom";
import {
  addToContacts,
  removeFromContacts,
} from "../store/slices/contacts-slice";
import toast from "react-hot-toast";
import { FaCog, FaComments, FaPhone, FaUser } from "react-icons/fa";

const ContactsPage = () => {
  const users = useAppSelector((state) => state.users.list);
  const contacts = useAppSelector((state) => state.contacts.list);

  const contactsInContactsPage = contacts.map((id) => {
    const user = users.find((user) => user.id === id);
    return user;
  });
  //console.log(contactsInContactsPage)
  const chats = useAppSelector((state)=>state.chats.list)


  const dispatch = useAppDispatch();
  return ( <>
    <section>
      {/* Chat List */}
      <Container fluid className="flex-grow-1 overflow-auto">
        <h3>Friends</h3>

        <ListGroup>
          {contactsInContactsPage.map((user) => (
            <ListGroup.Item
              key={user?.id}
              className="d-flex align-items-center justify-content-sm-start"
            >
              <img
                src={user?.image} // Use the user's image URL
                alt={user?.username} // Alt text for accessibility
                id="users-image"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <div className="ms-3 flex-grow-1">
                <Nav.Link as={Link} to={`/chat/${user?.id}`}>
                  <div id="users-name">
                    <strong>{user?.username}</strong>
                    <p className="mb-0 text-muted" id="user-message">
                      {user?.message}
                    </p>
                  </div>
                </Nav.Link>
              </div>

              {/* Buttons */}
              <div className="d-flex gap-2">
                <Button
                  className="btn-add-fav"
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    dispatch(addToContacts(user?.id)); // Correctly dispatch the action
                    toast.success("Friend Added");
                  }}
                >
                  Add Friend
                </Button>
                <Button
                  className="btn-delete"
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    dispatch(removeFromContacts(user?.id)); // Correctly dispatch the action
                    toast.error("Friend Deleted");
                  }}
                >
                  Delete
                </Button>
                <Nav.Link as={Link} to={`/user/${user?.id}`}>
                  <Button className="btn-delete" variant="info" size="sm">
                    Info
                  </Button>
                </Nav.Link>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </section>


       
        <footer className="bg-light py-2 position-fixed bottom-0 w-100 border-top shadow-sm">
          <Container>
            <Row className="text-center">
              <Col>
                <Nav.Link as={Link} to="/contacts">
                  <FaUser size={24} className="text-secondary" />
                  <span>
                    <Badge bg="danger">{contacts?.length}</Badge>
                    <p className="mb-0 text-secondary">Contacts</p>
                  </span>
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/calls">
                  <FaPhone size={24} className="text-secondary" />
                  <p className="mb-0 text-secondary">Calls</p>
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/chat">
                  <div className="position-relative">
                    <FaComments size={24} className="text-primary" />
                    <span>
                      <Badge bg="danger">{chats?.length}</Badge>
                      <p className="mb-0 text-primary">Chats</p>
                    </span>
                  </div>
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/settings">
                  <FaCog size={24} className="text-secondary" />
                  <p className="mb-0 text-secondary">Settings</p>
                </Nav.Link>
              </Col>
            </Row>
          </Container>
        </footer>
        </>
  );
};

export default ContactsPage;
