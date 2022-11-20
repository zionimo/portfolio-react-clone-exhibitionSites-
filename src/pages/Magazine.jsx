import React from "react";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../context/DataContext";

const Magazine = () => {
  const { state } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="magazine-cards" style={{ width: "13rem" }}>
      {state.magList.map((magList, index) => (
        <Card key={index}>
          <Card.Img
            onClick={() => {
              navigate("/magazine/" + magList.magId);
            }}
            variant="top"
            src={require(`../img/${magList.magPicture}`)}
          />
          <Card.Body>
            <Card.Title>{magList.magName}</Card.Title>
            <Card.Text>{magList.magDate}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Magazine;
