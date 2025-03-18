import { Link, Outlet } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




import "./App.css";
function App() {
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Hola</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/chatPage">Chats</Nav.Link>
            <Nav.Link  as={Link} to="/infoPage">Info</Nav.Link>
            <Nav.Link  as={Link} to="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

    
      <Outlet />



   </ >
  );
}

export default App;
