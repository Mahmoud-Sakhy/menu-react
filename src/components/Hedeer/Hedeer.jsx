import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./hedeer.css";

const Hedeer = () => {
  return (
    <div className="hedeer">
      <Container>
        <Row>
          <Col lg={12} xs={6}>
            <h2 className="text-center mt-5 men">قائمة الطعام</h2>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Hedeer;
