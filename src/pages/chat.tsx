/*
const ChatPage = () => {
  return <div>ChatPage</div>;
};

export default ChatPage;
*/

import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { useEffect } from 'react';
import { fetchMessages } from '../store/services/messagesThunks';
import { useLocation } from 'react-router-dom';








const ChatPage = () => {
  const location = useLocation();
  const { name, img, id } = location.state || {}; // Access passed data
  const userId = id;

  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector((state: RootState) => state.messages.list);

  useEffect(() => {
    dispatch(fetchMessages(userId));
  }, [dispatch, userId]);

  // // Example messages (replace with actual data from Redux or API)
  // const messages: IMessage[] = [
  //   {
  //     id: 1,
  //     text: 'Hello Mahmoud!',
  //     timestamp: '10:15',
  //     sender: user!,
  //     status: '✔',
  //   },
  //   {
  //     id: 2,
  //     image: 'https://via.placeholder.com/200x150', // Replace with actual image URL
  //     text: 'Japan looks amazing!',

  //     timestamp: '10:15',
  //     sender: user!,
  //     fileSize: '2.4 MB',
  //     status: '✔',
  //   },
  //   {
  //     id: 3,
  //     text: 'Good morning! Do you know what time it is?',
  //     timestamp: '11:40',
  //     sender: user!,
  //   },
  //   {
  //     id: 4,
  //     text: "It’s morning in Tokyo",
  //     timestamp: '11:43',
  //     sender: user!,
  //     status: '✔',
  //   },
  // ];
  // const sendMessage = async () => {
  //   try {
  //     const response = await fetch("https://your-server-url.com/api/messages", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         text: message,
  //         sender_id: "123",
  //         receiver_id: "456",
  //       }),
  //     });

  //     const data = await response.json();
  //     console.log("Message sent!", data);
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //   }
  // };
  if (!userId) {
    return <div>User not found</div>;
  }

  return (
    <Container fluid className="p-0 vh-100 d-flex flex-column">
      {/* Chat Header */}
      <Card className="border-bottom rounded-0">
        <Card.Body className="d-flex align-items-center">
          <Image src={img} roundedCircle style={{ width: '40px', height: '40px' }} />
          <div className="ms-3">
            <h5 className="mb-0">{name}</h5>
            <small className="text-muted">Last seen just now</small>
          </div>
        </Card.Body>
      </Card>

      {/* Chat Messages */}
      <div className="flex-grow-1 overflow-auto p-3">
        {messages.map((message) => (

          <div key={message.id} className={`mb-3 px-2 ${message.sender == id ? 'text-end' : 'text-start'}`}>
            {message.image ? (
              <Card className="d-inline-block p-3 text-start">
                <Card.Img variant="top" src={message.image} style={{ maxWidth: '200px' }} />
                <Card.Body className="p-2">
                  <small className="text-muted">{message.fileSize}</small>
                  {message.status && <small className="ms-2">{message.status}</small>}
                </Card.Body>
              </Card>
            ) : (
              <Card className="d-inline-block p-1">
                  <p className="mb-0"><strong>{name}</strong></p>
                <Card.Body className="p-2">
                  <p className="mb-0">{message.text}</p>
                  {/* <p className="mb-0">{user.message}</p> */}
                  <small className="text-muted">{message.timestamp}</small>
                  {message.status && <small className="ms-2">{message.status}</small>}
                </Card.Body>
              </Card>
            )}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <Card className="border-top rounded-0">
        <Card.Body>
          <Form>
            <Row className="g-2">
              <Col>
                <Form.Control as="textarea" rows={1} placeholder="Type a message" />
              </Col>
              <Col xs="auto">
                <Button type="submit">Send</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ChatPage;

