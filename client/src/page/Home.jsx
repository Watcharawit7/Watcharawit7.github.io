import { Link } from "react-router-dom";
import { Container, Image, Card, Button } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
const Home = () => {
  return (
    <>
      <Container className="mt-75">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          {/* Profile Section */}
          <div className="p-4">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
                <Image
                  src="/img/profile.jpg"
                  alt="boy"
                  roundedCircle
                  fluid
                  width={250}
                  height={250}
                  style={{ border: "4px solid #ffffffff" }}
                />
              </div>
              <div className="col-12 col-md-8 text-md-start text-center">
                <h2 className="mb-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="html5"
                    width="32"
                    className="me-2"
                  />
                  Watcharawit Saejung
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="css3"
                    width="32"
                    className="ms-2"
                  />
                </h2>
                <h3 className="mb-2 text-primary">Full Stack Developer</h3>
                <p className="mb-3" style={{ color: "#ccc" }}>
                  ผมมีประสบการณ์พัฒนาเว็บแอปด้วย React/React-Bootstrap, ออกแบบ
                  UI, เชื่อมต่อ Node.js/Express และฐานข้อมูล MongoDB
                  ซึ่งเชื่อว่าจะเป็นประโยชน์ต่อองค์กร
                  พร้อมทั้งมีความตั้งใจที่จะเรียนรู้และพัฒนาทักษะเพิ่มเติมเพื่อเติบโตไปพร้อมกับบริษัท{" "}
                  <br />
                </p>
                <div className="mb-3">
                  <div className="mb- text-primary">
                    <h5>Soft Skills</h5>
                  </div>
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item badge bg-primary bg-opacity-75 text-light fs-6 fw-normal p-2 m-1">
                      Teamwork
                    </li>
                    <li className="list-inline-item badge bg-primary bg-opacity-75 text-light fs-6 fw-normal p-2 m-1">
                      Leadership
                    </li>
                    <li className="list-inline-item badge bg-primary bg-opacity-75 text-light fs-6 fw-normal p-2 m-1">
                      Creativity
                    </li>
                  </ul>
                </div>
                <div className="d-flex flex-wrap gap-3 justify-content-md-start justify-content-center mb-3">
                  <a
                    href="https://github.com/Watcharawit7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm rounded-pill"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="github"
                      width="20"
                      className="me-1"
                    />
                    GitHub
                  </a>
                  <a
                    href="/pdf/Watcharawit_Resume.pdf"
                    download
                    className="btn btn-outline-success btn-sm rounded-pill ms-2 d-flex align-items-center"
                  >
                    <BsDownload className="me-1" size={18} />
                    Download Resume
                  </a>
                      <a
                    href="/pdf/Watcharawit_Bachelor.pdf"
                    download
                    className="btn btn-outline-warning btn-sm rounded-pill ms-1 d-flex align-items-center"
                  >
                    <GrCertificate className="me-1" size={18} />
                    Bachelor's degree certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="d-flex flex-column justify-content-center align-items-center text-center ">
          <div className="d-flex flex-column w-100 mb-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              <h1 className="mb-0">Education</h1>
            </div>
          </div>
          <div className="timeline position-relative w-75">
            {/* <div
              className="d-none d-md-block"
              style={{
                position: "absolute",
                left: 400,
                top: 0,
                bottom: 0,
                width: 6,
                height: 250,
                background: "linear-gradient(180deg, #c7c7c7ff",
                zIndex: 0,
              }}
            ></div> */}
            {[
              {
                school: "Sadao Khanchai Kampalanon Anusorn School",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyeyLU0oZjIL1fvO58O_plkJPFyHiMudG_w&s",
                degree: "High School Science-Math Program",
                period: "2014 - 2019",
                details: ["GPAX 3.03"],
              },
              {
                school: "Prince of Songkhla University, Hatyai Campus",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4wNlhMgtYOOQ5YeB8D_GsHpj9qiquabiSQ&s",
                degree: "Bachelor of Engineering (Computer Engineering)",
                period: "2020 - 2024",
                details: ["GPAX 2.67"],
              },
            ].map((edu) => (
              <div
                key={edu.school}
                className="mb-5 d-flex align-items-start position-relative"
              >
                <div
                  className="shadow-lg w-100 text-start"
                  style={{
                    borderRadius: 22,
                    background:
                      "linear-gradient(120deg, #23234f 0%, #1E1E1E 100%)",
                    minHeight: 140,
                    border: "none",
                    padding: 0,
                  }}
                >
                  <div className="d-flex flex-column flex-md-row align-items-md-center gap-4 p-4">
                    <div
                      className="d-flex flex-column align-items-center justify-content-center"
                      style={{ minWidth: 90 }}
                    >
                      <img
                        src={edu.logo}
                        alt={edu.school}
                        width={70}
                        height={70}
                        style={{
                          background: "#fff",
                          padding: 8,
                          borderRadius: 16,
                          boxShadow: "0 2px 16px #7F00FF33",
                        }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary">{edu.school}</h5>
                      <div className="d-flex flex-wrap align-items-center mb-2">
                        <span
                          className="fw-bold me-2"
                          style={{ color: "#fff" }}
                        >
                          {edu.degree}
                        </span>
                        <span className="badge bg-secondary bg-opacity-75 text-light fs-6 fw-normal">
                          {edu.period}
                        </span>
                      </div>
                      <ul
                        className="mb-0 ps-3"
                        style={{ color: "#bbb", fontSize: "1.05rem" }}
                      >
                        {edu.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Programming  */}
        <div className="d-flex flex-column justify-content-center align-items-center text-center mt-3">
          <div className="d-flex flex-column w-100 mb-3">
            <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
              <div className="d-flex align-items-center gap-2">
                <h1 className="mb-0">Skills Programming</h1>
              </div>
              <Link to="/skills">
                <Button
                  variant="outline-primary"
                  size="sm"
                  style={{
                    fontWeight: "bold",
                    borderRadius: "20px",
                    padding: "6px 22px",
                  }}
                >
                  View All Skills
                </Button>
              </Link>
            </div>
          </div>

          <div
            className="row w-100 justify-content-center"
            style={{ maxWidth: "1000px" }}
          >
            {[
              {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                color: "#61DAFB",
              },
              {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                color: "#3C873A",
              },
              {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                color: "#F7DF1E",
              },
              {
                name: "HTML5",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                color: "#E34F26",
              },
              {
                name: "CSS3",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                color: "#1572B6",
              },
              {
                name: "PHP",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                color: "#777BB4",
              },
              {
                name: "Bootstrap",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                color: "#7952B3",
              },
              {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                color: "#47A248",
              },
            ].map((skill) => (
              <div
                className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={skill.name}
              >
                <div
                  className="shadow skill-card d-flex flex-column align-items-center justify-content-center p-3 h-100"
                  style={{
                    background: "rgba(40,40,60,0.97)",
                    borderRadius: "18px",
                    border: `2.5px solid ${skill.color}`,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: `0 2px 16px ${skill.color}55`,
                    minHeight: 120,
                    minWidth: 40,
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.boxShadow = `0 8px 32px ${skill.color}`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = `0 2px 16px ${skill.color}55`;
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width="54"
                    style={{
                      filter: "drop-shadow(0 0 8px " + skill.color + ")",
                    }}
                  />
                  <span
                    className="mt-2 mb-1"
                    style={{
                      color: skill.color,
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      letterSpacing: "1px",
                    }}
                  >
                    {skill.name}
                  </span>
                  <span style={{ color: "#bbb", fontSize: "0.95rem" }}>
                    {skill.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Section */}
        <div className="d-flex flex-column justify-content-center align-items-center text-center mt-4">
          <div className="d-flex flex-column w-100 mb-3">
            <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
              <div className="d-flex align-items-center gap-2">
                <h1 className="mb-0">My Projects</h1>
              </div>
              <Link to="/project">
                <Button
                  variant="outline-primary"
                  size="sm"
                  style={{
                    fontWeight: "bold",
                    borderRadius: "20px",
                    padding: "6px 22px",
                  }}
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
          <div
            className="row w-100 justify-content-center mt-3"
            style={{ maxWidth: "1000px" }}
          >
            {[
                {
                title: "ระบบเช็คชื่อ เเละ E-Portfolio",
                img: "/img/Pictures/intern_1.png",
                desc: "ออกเเเบบ UX/UI เเละพัฒนาระบบเช็คชื่อ เเละ E-Portfolio โดยใช้ Angular, primeNG, primeFlex",
                link: "#",
              },
              {
                title: "ระบบประเมินสมรรถนะ",
                img: "/img/Pictures/competency.png",
                desc: "เว็บประเมินสมรรถนะ มีระบบจัดการหลังบ้าน พัฒนาโดยใช้ React, Node.js, Express, MongoDB",
                link: "#",
              },
              {
                title: "ระบบจองสนามเเบดมินตัน",
                img: "/img/Pictures/courtCraft.png",
                desc: "เว็บจองสนามเเบดมินตัน และระบบสมาชิก ใช้ React,  Node.js, Express, Mui , MongoDB",
                link: "#",
              },
            ].map((project, i) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex" key={i}>
                <Card
                  className="shadow-sm h-100 w-100 project-card border-0"
                  style={{
                    borderRadius: "20px",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "pointer",
                    background:
                      "linear-gradient(135deg, #23234f 0%, #1E1E1E 100%)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.04)";
                    e.currentTarget.style.boxShadow = "0 8px 32px #7F00FF55";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={project.img}
                    style={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                    <Card.Title
                      className="text-primary"
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                      }}
                    >
                      {project.title}
                    </Card.Title>
                    <Card.Text style={{ color: "#ccc", minHeight: 60 }}>
                      {project.desc}
                    </Card.Text>
                    {/* <Button
                      variant="primary"
                      size="sm"
                      style={{
                        borderRadius: "16px",
                        fontWeight: "bold",
                        marginTop: "auto",
                      }}
                      href={project.link}
                      target="_blank"
                    >
                      ดูรายละเอียด
                    </Button> */}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <h1 className="mb-3">Contact</h1>
        <div
          className="contact-card p-4 mt-4 shadow rounded-4 d-flex flex-column align-items-center justify-content-center text-center"
          style={{
            background: "rgba(30,30,30,0.85)",
            maxWidth: 600,
            margin: "40px auto 0 auto",
            width: "100%",
          }}
        >
          <p style={{ color: "#eee", fontSize: "1.1rem" }}>
            <span style={{ fontWeight: "bold", color: "#fff" }}>Email:</span>{" "}
            watcharawit.saejung@gmail.com
            <br />
            <span style={{ fontWeight: "bold", color: "#fff" }}>
              Phone:
            </span>{" "}
            094-318-1548
            <br />
            <span style={{ fontWeight: "bold", color: "#fff" }}>
              Location:
            </span>{" "}
            Songkhla, Thailand
          </p>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center w-100 mt-2">
            <a
              href="watcharawit.saejung@email.com"
              className="btn btn-outline-light btn-lg rounded-pill px-4"
            >
              Send Email
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
