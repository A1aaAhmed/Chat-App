import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";







const InfoPage = () => {
  const params = useParams();
  const userId = params.id ?? "";

  const users = useAppSelector((state) => state.users.list);
  const user = users.filter((item) => {
    return item.id.toString() === userId.toString();
  })[0];

  //console.log(user);

  return (
    <div>
      InfoPage 
      <section>
        <Container
          fluid
          className="d-flex justify-content-center align-items-center vh-100 bg-light"
        >

          <Row className="w-100 justify-content-center">
            <Col xs={12} md={8} lg={6} xl={4}>
              <Card className="shadow-sm">

                {/* Full-width and full-height image */}
                <Card.Img 
              variant="top" 
              src={user.image} 
              alt={user.username} 
              className="img-fluid" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
                <Card.Body>
                  <Card.Title className="text-center">
                    {user.username}
                  </Card.Title>
                  <Card.Text className="text-center text-muted">
                    {user.message}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="text-center">
                    Email: {user.email}
                  </ListGroup.Item>
                  <ListGroup.Item className="text-center">
                    Phone: +1 202 555 0181
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    Send Message
                  </Button>
                  <Button variant="secondary" size="lg">
                    Share Contact
                  </Button>
                  <Button variant="success" size="lg">
                    Start Secret Chat
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default InfoPage;
