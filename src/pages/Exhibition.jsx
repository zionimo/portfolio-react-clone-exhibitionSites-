import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const Exhibition = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
  };

  const exhibitionImage = [{ img: "exhibition1.jpg" }, { img: "exhibition2.jpg" }, { img: "exhibition3.jpg" }, { img: "exhibition4.jpg" }];

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Slider {...settings}>
              {exhibitionImage.map((img, index) => (
                <div key={index}>
                  <img
                    style={{
                      width: "664px",
                      height: "",
                    }}
                    src={require(`../img/${img.img}`)}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Exhibition;
