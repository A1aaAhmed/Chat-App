// import {
//   Badge,
//   Button,
//   Col,
//   Container,
//   InputGroup,
//   ListGroup,
//   Nav,
//   Navbar,
//   Row,
// } from "react-bootstrap";
// import {
//   FaCog,
//   FaComments,
//   FaEdit,
//   FaPhone,
//   FaSearch,
//   FaUser,
// } from "react-icons/fa";
import {
  
  // Button,
  Container,
  InputGroup,
  ListGroup,
  Nav,
  Navbar,
  
} from "react-bootstrap";
import {FaEdit,FaSearch} from "react-icons/fa";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllMessages } from "../store/services/messagesThunks";
import { AppDispatch, RootState } from "../store/store";
// import {
//   addToContacts,
//   removeFromContacts,
// } from "../store/slices/contacts-slice";
// import toast from "react-hot-toast";

const Homepage = () => {
  const allUsers = useSelector((state: RootState) => state.allMessages.list); 
  const dispatch = useDispatch<AppDispatch>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    dispatch(fetchAllMessages()); 
  }, [dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); 
  };

  const users = allUsers.filter((user) => {
    const messageText = user.text.toLowerCase();
    const contactName = user.name.toLowerCase(); 
    const search = searchTerm.toLowerCase(); 

    return messageText.includes(search) || contactName.includes(search); 
  });

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
          <Container fluid  className="mt-3 px-2">
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search for messages or users"
                value={searchTerm}
                onChange={handleSearchChange} 
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
          <Container fluid className="flex-grow-1 overflow-auto px-2 ">
            {/* <h4>Requested Friends</h4> */}

            <ListGroup>
              {users.map((user) => (
                <ListGroup.Item
                  key={user.id}
                  className="d-flex align-items-center justify-content-sm-start "
                >
                  {/* <FaUser className="text-primary me-3" size={32} /> */}
                  <Nav.Link as={Link} to={`/user`} state={{  id: user.id }} >
                  <img
                    src={user.img} // Use the user's image URL
                    alt={user.name} // Alt text for accessibility
                    id="users-image"
                  />
                  </Nav.Link>

                  <div>
                  <Nav.Link  as={Link} to={`/chat`}  state={{ name: user.name, img: user.img, id: user.id }} >
                    <div id="users-name">
                      <strong>{user.name}</strong>
                      <p className="mb-0 text-muted " id="user-message">
                        {user.text}
                      </p>
                    </div>
                    </Nav.Link>
                    {/* Buttons
                    <div className="position-absolute top-50 end-0 translate-middle-y d-flex   gap-2 px-2">
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
                      <Button
                        className="btn-delete"
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          dispatch(removeFromContacts(user.id));
                          toast.error("Friend Deleted");
                        }}
                      >
                        Delete
                      </Button>
                      <Nav.Link as={Link} to={`/user/${user.id}`}>
                        <Button className="btn-delete" variant="info" size="sm">
                          Info
                        </Button>
                      </Nav.Link>
                    </div> */}
                  </div>{" "}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Container>
        </section>

        {/* Footer */}

        {/* <footer className="bg-light py-2 position-fixed bottom-0 w-100 border-top shadow-sm">
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
        </footer> */}

      </div>{" "}
    </>
  );
};

export default Homepage;


