import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./card.css";
const Caed = ({ filteredProducts }) => {
  return (
    <Container className="mt-5">
      <Row>
        {filteredProducts.length >= 1 ? (
          filteredProducts.map((item) => {
            return (
              <Col key={item.id} lg={6} xs={12}>
                <div className="special-offers-wrapper">
                  <div className="offer">
                    <div className="offer-image-wrapper">
                      <img
                        src={item.img}
                        alt={"name"}
                        className="offer-image"
                      />
                    </div>
                    <div className="offer-info">
                      <h5 className="offer-title">{item.title}</h5>
                    </div>
                    <div className="offer-discount"> جنيه {item.price}</div>
                  </div>
                </div>
              </Col>
            );
          })
        ) : (
          <h1>لا توجد بيانات</h1>
        )}
      </Row>
    </Container>
  );
};

export default Caed;
