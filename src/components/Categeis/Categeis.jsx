import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Categeis.css";
// eslint-disable-next-line react/prop-types
const Categeis = ({ filterdyCat, aillCat }) => {
  const onFilter = (cat) => {
    filterdyCat(cat);
  };

  return (
    <Row>
      <Col className="d-flex justify-content-center" lg={12} xs={12}>
        <div className="Categeis">
          {aillCat.length >= 1 ? (
            aillCat.map((cat) => {
              return (
                <Button
                  key={Math.random()}
                  onClick={() => onFilter(cat)}
                  variant="success"
                >
                  {cat}
                </Button>
              );
            })
          ) : (
            <h1> لا يوجد اقسام </h1>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Categeis;
