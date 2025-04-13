import { useLocation } from "react-router-dom";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchUser } from "../store/services/userThunks";







const InfoPage = () => {
    const location = useLocation();
    const { id } = location.state || {}; // Access passed data
  
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user);
  
    useEffect(() => {
      dispatch(fetchUser(id));
    }, [dispatch, id]);

  


  return (
 
    
          <Row className="w-100 justify-content-center" style={

            { 
    
              height: "80vh",
              justifyContent: "center",
              alignItems: "center",  
            }
          }>
            <Col xs={12} md={8} lg={6} xl={4}>
              <Card className="shadow-sm">

                {/* Full-width and full-height image */}
                <Card.Img 
              variant="top" 
              src={user.userImg} 
              alt={user.name} 
              className="img-fluid" 
              style={{ height: '150px', objectFit: 'cover' }} 
            />
                <Card.Body>
                  <Card.Title className="text-center">
                    {user.name}
                  </Card.Title>
                  <Card.Text className="text-center text-muted">
                    {user.name}
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
              </Card>
            </Col>
          </Row>

  );
};

export default InfoPage;
