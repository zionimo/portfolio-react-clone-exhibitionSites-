import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const PurchaseDisplay = (props) => {
  const { product } = props;
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <img src={require(`../img/${product.productPicture[index]}`)} alt="" />
          </div>
        </Col>
      </Row>
      <Row>
        <div>
          <h3>{product.productName}</h3>
          <p>{product.productDitail}</p>
          <span>₩</span>
          <span>{product.productPrice}</span>
        </div>
      </Row>
    </Container>
  );
};

export default PurchaseDisplay;
