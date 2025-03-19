import {
  Badge,
  Button,
  Col,
  Container,
  InputGroup,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import {
  FaCog,
  FaComments,
  FaEdit,
  FaPhone,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { addToContacts } from "../store/slices/contacts-slice";
import toast from "react-hot-toast";

const Homepage = () => {
  const users = useAppSelector((state) => state.users.list);
  const contacts = useAppSelector((state) => state.contacts.list);

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="d-flex flex-column vh-100">
        <section>
          {/* Navbar */}
          <Navbar bg="light" className="shadow-sm px-3">
            <Navbar.Text className="fw-bold mx-auto">Chats</Navbar.Text>
            <FaEdit className="text-primary" />
          </Navbar>

          {/* Search Bar */}
          <Container className="mt-2">
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search for messages or users"
              />
            </InputGroup>
          </Container>
        </section>

        <section>
          {/*-----------maping of  users ----------------
      <div>
  {usersArray.map((user) => (
    <div key={user.id}>
      {user.username}
    </div>
  ))}
</div> */}

          {/* Chat List */}
          <Container fluid className="flex-grow-1 overflow-auto ">
            <h3>Friends</h3>

            <ListGroup>
              {users.map((user) => (
                <ListGroup.Item
                  key={user.id}
                  className="d-flex align-items-center justify-content-sm-start "
                >
                  {/* <FaUser className="text-primary me-3" size={32} /> */}
                  <img
                    src={user.image} // Use the user's image URL
                    alt={user.username} // Alt text for accessibility
                    id="users-image"
                  />
                  <div>
                    <div id="users-name">
                      <strong>{user.username}</strong>
                      <p className="mb-0 text-muted " id="user-message">
                        {user.message}
                      </p>
                    </div>
                    {/* Buttons */}
                    <div className="position-absolute top-50 end-0 translate-middle-y d-flex   gap-2">
                      <Button
                        className="btn-add-fav"
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          dispatch(addToContacts(user.id));
                          toast.success("Friend Added");
                        }}
                      >
                        Add Friend
                      </Button>
                      <Button className="btn-delete" variant="danger" size="sm">
                        Delete
                      </Button>
                      <Button
                        as={Link}
                        to={`/user/${user.id}`}
                        className="btn-delete"
                        variant="info"
                        size="sm"
                      >
                        Info
                      </Button>
                    </div>
                  </div>{" "}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Container>
        </section>

        {/* Footer */}
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
                      <Badge bg="danger">1</Badge>
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
      </div>{" "}
    </>
  );
};

export default Homepage;
