import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ler & Aprender",
      subtitle: "(Read & Learn)",
      description: "YouTube",
      imgUrl: projImg1,
    },
    {
      title: "Desenvolva a sua Mente",
      subtitle:"(Develop Your Mind)",
      description: "YouTube",
      imgUrl: projImg2,
    },
    {
      title: "10 mil Horas de Dedicação",
      subtitle: "(10k Hours of Dedication)",
      description: "YouTube",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "YouTube",
      imgUrl: projImg4,
    },
    {
      title: "O GESTOR",
      subtitle: "(The Manager)",
      description: "YouTube",
      imgUrl: projImg5,
    },
    {
      title: "Começa Hoje",
      subtitle: "(Start Today)",
      description: "YouTube",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                  <p>
                    I hold a Bachelor’s in Management, a Master’s in Tax Management, and I completed a Postgraduate 
                    in Data Science at Nova IMS in 2023.
                  </p>
                  <p>
                    In 2021, I took Harvard’s CS50x (Computer Science), where I gained programming skills in 
                    C++, SQL, Python, and JS.
                  </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Hobby</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">1st Highlight</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">2nd Highlight</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        Since January 2024, I have worked as a Senior Data Analyst & Developer at BNP Paribas Cardif, 
                        overseeing data pipelines, building BI dashboards, automating processes (Python, Office Scripts, VBA, Power Automate), 
                        and enhancing daily/monthly financial reporting (FPF).
                      </p>
                      <p>
                        Between 2021 and 2023, I served as a Senior Technician – Financial Data Analyst at Banco de Cabo Verde, 
                        focusing on Insurance Supervision and the Automobile Guarantee Fund. I built Python scripts for monthly reports, 
                        led compliance checks, created Power BI dashboards, and helped implement Microsoft Dynamics Navision ERP.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        From 2019 to 2021, I supported the Risk Management Department at Banco Interatlântico (Group Caixa Geral de Depósitos). 
                        I developed RAS dashboards, managed liquidity risk (LCR, NSFR), and handled market and credit risk. 
                        I also served on the Assets and Liabilities Committee (ALCO).
                      </p>
                      <p>
                        In 2014, while working in the Finance Department of Crédito Agrícola Mútuo–Algarve, I enhanced my 
                        management skills by contributing to the institution’s computerization project (credit workflow), 
                        digitizing financial processes, and supporting risk modeling.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Shape"></img>
    </section>
  )
}
