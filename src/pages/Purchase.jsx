import React from "react";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../context/DataContext";

const Purchase = () => {
  const { state } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="purchase-cards" style={{ width: "13rem" }}>
      {state.productList.map((productList, index) => (
        <Card key={index}>
          <Card.Img
            onClick={() => {
              navigate("/purchase/" + productList.productId);
            }}
            variant="top"
            src={require(`../img/${productList.productPicture}`)}
          />
          <Card.Body>
            <Card.Title>
              <strong>{productList.productName}</strong>
            </Card.Title>
            <Card.Text>{productList.productDitail}</Card.Text>
            <Card.Text>₩{productList.productPrice}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Purchase;
