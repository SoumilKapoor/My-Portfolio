import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Alumnet from "../assets/img/Alumnet.png";
import Alista from "../assets/img/Alista.png";
import Sonair from "../assets/img/Sonair.png";
import Velora from "../assets/img/Velora.png";
import colorSharp2 from "../assets/img/banner-bg1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Alumnet : School's Private Network",
      description: "Django|Python|Tailwind|Next.js",
      imgUrl: Alumnet,
    },
    {
      title: "Velora : Shopping District",
      description: "React|Stripe|ASP.NET|PostgreSQL",
      imgUrl: Velora,
    },
    {
      title: "Sonair : Hands-free Listening",
      description: "Numpy|Tensorflow|MediaPipe|OS APIs|Python",
      imgUrl: Sonair,
    },
    {
      title: "Alista : Personal Assistant",
      description: "Next.js|Node.js|LLM APIs|Prisma ORM|NextAuth|Docker",
      imgUrl: Alista,
    },
    {/*{
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    }*/},
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    A selection of projects that showcase my skills in building modern, responsive, and scalable applications. Each project reflects my approach to clean code, thoughtful design, and real-world problem solving.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <p>
                          More projects are on the way. If you have an opportunity or an idea we can build together, feel free to get in touch.
                        </p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>
                          Innovation loading… ⏳
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Decorative background image */}
      <img
        className="background-image-right"
        src={colorSharp2}
        alt=""
      />
    </section>
  );
};