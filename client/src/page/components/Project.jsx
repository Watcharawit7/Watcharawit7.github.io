
import React, { useState } from "react";
import { Container, Card, Button, Row, Col, Image, Modal, Badge, Carousel } from "react-bootstrap";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import reactLogo from "../../assets/react.svg";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    short: "เว็บไซต์แนะนำผลงานของนักเรียน",
    full: `เว็บไซต์แนะนำผลงานการทำกิจกรรมของนักเรียน เช่น ผลงานวาดภาพ ผลงานระบายสี หรือกิจกรรมอื่น ๆ ซึ่ง Framework ที่ใช้ Angular and PrimeNG`,
    tech: ["Angular", "PrimeNG","PrimeFlex"],
    images: ["/img/Pictures/Intern/Portfolio_5.png","/img/Pictures/Intern/Portfolio_6.png","/img/Pictures/Intern/Portfolio_3.png","/img/Pictures/Intern/Portfolio_4.png","/img/Pictures/Intern/Portfolio_1.png","/img/Pictures/Intern/Portfolio_2.png"],
    // repo: "#",
    certificate: "/pdf/certificate_bonmek.pdf",
  },
    {
    id: 2,
    title: "ระบบเช็คชื่อนักเรียน",
    short: "เว็บไซต์เช็คชื่อนักเรียน ",
    full: `เว็บไซต์เช็คชื่อนักเรียน ที่เป็นรูปเเบบ Mobile ใช้สำหรับเช็คการ มา ขาด ลา สาย ของนักเรียน เเละตรวจสอบข้อมูล ซึ่ง Framework ที่ใช้ Angular ,PrimeNG, PrimeFlex`,
    tech: ["Angular", "PrimeNG","PrimeFlex"],
    images: ["/img/Pictures/Intern/CheckName_1.png","/img/Pictures/Intern/CheckName_2.png","/img/Pictures/Intern/CheckName_3.png","/img/Pictures/Intern/CheckName_4.png","/img/Pictures/Intern/CheckName_5.png","/img/Pictures/Intern/CheckName_6.png","/img/Pictures/Intern/CheckName_7.png","/img/Pictures/Intern/CheckName_8.png"],
    // repo: "#",
    certificate: "/pdf/certificate_bonmek.pdf",
  },
  {
    id: 3,
    title: "ระบบประเมินสมรรถนะ",
    short: "ระบบประเมินสมรรถนะ พร้อมหลังบ้านสำหรับผู้ดูแลระบบ",
    full: `เว็บไซต์จัดการแบบประเมินสมรรถนะของนักศึกษา มีระบบสร้างแบบประเมิน รวบรวมผล และแสดงรายงานสรุป ใช้ React + Node.js + MongoDB`,
    tech: ["React", "Node.js", "MongoDB"],
    images: ["/img/Pictures/competency/competency_1.png", "/img/Pictures/competency/competency_2.png","/img/Pictures/competency/competency_3.png","/img/Pictures/competency/competency_4.png", "/img/Pictures/competency/competency_5.png","/img/Pictures/competency/competency_6.png","/img/Pictures/competency/competency_7.png"],
    repo: "https://github.com/Watcharawit7/competency",
    durationMonths: 3,
    certificate: "/pdf/certificate_psu.pdf",
  },
  {
    id: 4,
    title: "ระบบจองสนามแบดมินตัน",
    short: "ระบบจองสนาม และจัดการสมาชิก (React + MUI)",
    full: `ระบบจองสนามที่ช่วยให้ผู้ใช้สามารถดูตารางเวลาว่าง จอง และชำระเงินออนไลน์ มีระบบสมาชิกและหน้าจัดการของผู้ดูแล`,
    tech: ["React", "MUI", "Express"],
    images: ["/img/Pictures/courtCraft.png"],
    repo: "https://github.com/Watcharawit7/courtCraft",
  }
];

const Projects = () => {
    const [selected, setSelected] = useState(null);

    return (
      <Container className="mt-75 mb-5">
        <div className="d-flex flex-column w-100 mb-3" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="project-icon" width={36} className="me-2" />
              <h1 className="mb-0 text-primary" style={{ fontWeight: "bold", letterSpacing: "1px" }}>My Projects</h1>
            </div>
          </div>
          {/* <p style={{ fontSize: "1.05rem", margin: 0, maxWidth: 900 }}>
            งานตัวอย่างที่เลือกมา 3 โปรเจค สามารถกดดูรายละเอียดเพื่อดูรูปภาพเพิ่มเติม โทคโนโลยีที่ใช้ และลิงก์ไปยังรีโปหรือเดโม
          </p> */}

          <Row className="g-4 mt-3">
            {projectsData.map((project) => (
              <Col key={project.id} xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm project-card" style={{ borderRadius: 16, background: 'linear-gradient(120deg, #23234f 0%, #1E1E1E 100%)', border: 'none' }}>
                  <div style={{ overflow: 'hidden', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                    <Card.Img src={project.images?.[0] || reactLogo} alt={project.title} style={{ height: 180, objectFit: 'cover' }} onError={(e)=> (e.currentTarget.src = reactLogo)} />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-primary">{project.title}</Card.Title>
                    <Card.Text style={{ color: '#ccc' }}>{project.short}</Card.Text>
                    <div className="mt-auto d-flex gap-2">
                      <Button variant="outline-primary" size="sm" onClick={() => setSelected(project)}>
                        ดูรายละเอียด
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <ProjectModal project={selected} onHide={() => setSelected(null)} />
      </Container>
    );
}

function ProjectModal({ project, onHide }) {
    const [index, setIndex] = useState(0);
    const [showCert, setShowCert] = useState(false);
    if (!project) return null;
    const images = project.images && project.images.length ? project.images : [reactLogo];

    return (
      <Modal show={!!project} onHide={onHide} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={7} className="mb-3">
              {showCert && project.certificate ? (
                <div style={{ borderRadius: 8, overflow: 'hidden', background: '#fff' }}>
                  <iframe
                    src={project.certificate}
                    title="Certificate PDF"
                    width="100%"
                    height={520}
                    style={{ border: 'none' }}
                  />
                </div>
              ) : (
                <>
                  <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} variant="dark">
                    {images.map((src, i) => (
                      <Carousel.Item key={i}>
                        <img
                          className="d-block w-100"
                          src={src}
                          alt={`${project.title} image ${i + 1}`}
                          style={{ objectFit: "cover", borderRadius: 8 }}
                          onError={(e) => (e.currentTarget.src = reactLogo)}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  <div className="d-flex gap-2 mt-2 flex-wrap">
                    {images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`thumb-${i}`}
                        width={100}
                        height={60}
                        style={{
                          objectFit: "cover",
                          borderRadius: 6,
                          cursor: "pointer",
                          border: index === i ? "2px solid #7F00FF" : "2px solid transparent",
                          boxShadow: index === i ? "0 6px 18px rgba(127,0,255,0.18)" : "none",
                        }}
                        onClick={() => setIndex(i)}
                        onError={(e) => (e.currentTarget.src = reactLogo)}
                      />
                    ))}
                  </div>
                </>
              )}
            </Col>
            <Col md={5}>
              <p style={{ color: "#444" }}>{project.full}</p>
              <div className="mb-2 d-flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge bg="secondary" key={t}>{t}</Badge>
                ))}
              </div>
              <div className="d-flex gap-2 mt-3 flex-wrap">
                {project.certificate && (
                  <Button variant={showCert ? "outline-dark" : "secondary"} size="sm" onClick={() => setShowCert(!showCert)}>
                    {showCert ? 'Back to images' : 'View Certificate'}
                  </Button>
                )}
                {project.repo && (
                  <Button variant="outline-dark" href={project.repo} target="_blank">
                    <BsGithub className="me-1" /> Repo 
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }

  export default Projects;
