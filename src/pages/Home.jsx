import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 3000,
    pauseOnHover: true,
  };

  const mainImage = [{ img: "main1.jpg" }, { img: "main2.jpg" }];

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Slider {...settings}>
              {mainImage.map((img, index) => (
                <div key={index}>
                  <img
                    style={{
                      width: "100vw",
                      height: "440px",
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

export default Home;
