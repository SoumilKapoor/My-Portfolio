import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                A full-stack developer focused on creating clean, responsive, and efficient web applications.
                <br />
                Passionate about modern technologies, scalable solutions, and seamless user experiences.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Tailwind skill level" />
                  <h5>Tailwind CSS/ Bootstrap</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="UI/UX Principles skill level" />
                  <h5>UI/UX Principles</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Node.js / Express.js skill level" />
                  <h5>Node.js / Express.js</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="AI/ML Based Applications skill level" />
                  <h5>AI/ML Based Applications</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="REST API Development skill level" />
                  <h5>REST API Development</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="MVC Architecture skill level" />
                  <h5>MVC Architecture</h5>
                </div>
                
                <div className="item">
                  <img src={meter1} alt="MongoDB skill level" />
                  <h5>MongoDB</h5>
                </div>
              </Carousel>

            </div>
          </div>
        </div>
      </div>

      {/* Decorative background image */}
      <img
        className="background-image-left"
        src={colorSharp}
        alt=""
      />
    </section>
  );
};