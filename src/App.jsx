import React, { useState } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [clickedBoxes, setClickedBoxes] = useState(Array(9).fill(false));
  const [giftRevealed, setGiftRevealed] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (index) => {
    if (!clickedBoxes[index]) {
      const newClicked = [...clickedBoxes];
      newClicked[index] = true;
      setClickedBoxes(newClicked);
      const newCount = clickCount + 1;
      setClickCount(newCount);

      if (newCount === 9) {
        setGiftRevealed(true);
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Container className="text-center">
        {!giftRevealed ? (
          <>
            <h1 className="fw-bold display-4" style={{ color: "#FF6F00" }}>
              Srećan rođendan, Rade! 🎉
            </h1>
            <p className="lead" style={{ color: "#5F6368" }}>
              Jedna od ovih kutija krije tvoj rodjendanski poklon... Mozes li je pronaci? 🧩
            </p>

            <Container className="mt-5">
              <Row>
                {Array.from({ length: 9 }).map((_, index) => (
                  <Col
                    xs={4}
                    className="d-flex justify-content-center mb-4"
                    key={index}
                  >
                    <Button
                      className="gift-box"
                      onClick={() => handleClick(index)}
                    >
                      {clickedBoxes[index]
                        ? clickCount === 9 && !giftRevealed && !clickedBoxes.includes(false)
                          ? "🎉"
                          : "❌"
                        : "❔"}
                    </Button>
                  </Col>
                ))}
              </Row>
            </Container>
          </>
        ) : (
          <>
            <h1 className="fw-bold display-3" style={{ color: "#FF6F00", fontSize:"50px", marginBottom:"30px" }}>
            Bravo medo! Vreme je da spakuješ kofere... jer vodi te tvoja žena u Budimpeštu! ❤️
            </h1>
            <h3 className="mb-4">Vreme je za pauzu od koda i tastature. Sledeće linije pišemo u Budimpešti. ✨</h3>

            <Carousel className="carousel-wrapper">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/premium-photo/amazing-hungarian-parliament-evening-night-landmarks-budapest-hungary_117930-1476.jpg"
                  alt="Budapest 1"
                />
                <Carousel.Caption>
                  <h5>Parlament pod zvezdama</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.dailymail.co.uk/1s/2024/10/05/12/90486179-13927223-The_welcome_is_warm_The_famous_Szechenyi_thermal_baths-m-39_1728126110238.jpg"
                  alt="Budapest 2"
                />
                <Carousel.Caption>
                  <h5>Termalne banje 🌊</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://silver-line.hu/wp-content/uploads/2017/06/Sightseeing-budapest.jpg"
                  alt="Budapest 3"
                />
                <Carousel.Caption>
                  <h5>Magija noćnog Dunava</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../src/assets/ivanarade1.jpg"
                  alt="Budapest 3"
                />
                <Carousel.Caption>
                  <h5>Sijamo jace od Parlamenta ✨</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../src/assets/ivanarade2.jpg"
                  alt="Budapest 3"
                />
                <Carousel.Caption>
                  <h5>Zivela ljubav!❤️</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </>
        )}
      </Container>
    </div>
  );
};

export default App;
