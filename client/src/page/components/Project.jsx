
import { Container, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: 'Portfolio Website',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    desc: 'เว็บไซต์แนะนำตัวเอง Responsive ทันสมัย ใช้ React, Bootstrap',
    link: '#',
  },
  {
    title: 'E-Commerce Shop',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    desc: 'เว็บขายสินค้าออนไลน์ มีระบบตะกร้าและหลังบ้าน',
    link: '#',
  },
  {
    title: 'Blog Platform',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    desc: 'เว็บบล็อกส่วนตัว รองรับ Markdown และระบบสมาชิก',
    link: '#',
  },
];

const Projects = () => {
  return (
    <Container className="mt-5 mb-5">
      <div className="d-flex flex-column w-100 mb-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
          <div className="d-flex align-items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="project-icon" width="36" className="me-2" />
            <h1 className="mb-0" style={{ fontWeight: 'bold', color: '#7F00FF', letterSpacing: '1px' }}>My Projects</h1>
          </div>
        </div>
        <p style={{ color: '#bbb', fontSize: '1.1rem', margin: 0, maxWidth: 700 }}>
          ตัวอย่างผลงานที่เคยทำ ทั้งเว็บไซต์และเว็บแอปพลิเคชันที่เน้นความสวยงามและประสบการณ์ผู้ใช้<br/>
          <span style={{ color: '#7F00FF', fontWeight: 'bold' }}>ทุกโปรเจคพัฒนาอย่างตั้งใจ</span> และพร้อมต่อยอดให้ตอบโจทย์ธุรกิจจริง
        </p>
      </div>
      <div className="row w-100 justify-content-center mt-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {projects.map((project, i) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex" key={i}>
            <Card className="shadow-sm h-100 w-100 project-card border-0" style={{ borderRadius: '20px', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer', background: 'linear-gradient(135deg, #23234f 0%, #1E1E1E 100%)' }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.boxShadow = '0 8px 32px #7F00FF55';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <Card.Img variant="top" src={project.img} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', height: '180px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                <Card.Title style={{ fontWeight: 'bold', color: '#7F00FF', fontSize: '1.3rem' }}>{project.title}</Card.Title>
                <Card.Text style={{ color: '#ccc', minHeight: 60 }}>{project.desc}</Card.Text>
                <Button variant="primary" size="sm" style={{ borderRadius: '16px', fontWeight: 'bold', marginTop: 'auto' }} href={project.link} target="_blank">
                  ดูรายละเอียด
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
