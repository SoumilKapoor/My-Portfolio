import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // ✅ Memoized so it doesn't change every render
  const toRotate = useMemo(
    () => ["Full-stack Developer", "Web Designer", "AI Enthusiast"],
    []
  );

  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(500);
    }
  }, [text, isDeleting, loopNum, toRotate, period]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <span className="tagline">
                    Welcome to my Portfolio
                  </span>

                  <h1>Soumil Kapoor</h1>

                  <h2 className="FSW">
                    <span className="wrap">{text}</span>
                  </h2>

                  <p>
                    I’m a Full-Stack Developer who transforms ideas into
                    powerful web applications. From intuitive user interfaces
                    to robust backend systems, I build complete solutions that
                    are clean, efficient, and built to scale.
                  </p>

                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Let’s Connect{" "}
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Developer Illustration"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};