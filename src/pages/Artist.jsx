import React from "react";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../context/DataContext";

const Artist = () => {
  const { state } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="artist-box">
      <h3>
        현대미술의 다양한 분야에서 독창적인 작품을 선보여온 작가들의 예술세계에 대한 이해를 돕는 인터뷰 모음집 입니다. 작가의 이야기를 통해 작품에
        한발자국 더 가까워지는 기회를 제공합니다.
      </h3>

      <div className="artist-list">
        {state.artistList.map((artistList, index) => (
          <Card key={index}>
            <Card.Img
              onClick={() => {
                navigate("/artist/" + artistList.artistId);
              }}
              variant="top"
              src={require(`../img/${artistList.artistPicture}`)}
            ></Card.Img>
            <Card.Body>
              <Card.Link href="#">{artistList.artistName}</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Artist;
