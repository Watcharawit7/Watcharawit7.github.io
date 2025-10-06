import { lazy } from "react";
import { Container, Image, Card, Button } from "react-bootstrap";

const Navbar = lazy(() => import("./Navbar"));
const Footer = lazy(() => import("./Footer"));

const Home = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-75">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="profile-card p-4 shadow-lg rounded-4" style={{ background: 'rgba(30,30,30,0.8)', maxWidth: 900, width: '100%' }}>
            <div className="row align-items-center">
              <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
                <Image
                  src="/src/assets/img/boy.png"
                  alt="boy"
                  roundedCircle
                  fluid
                  width={180}
                  style={{ border: '4px solid #7F00FF', boxShadow: '0 0 16px #7F00FF55' }}
                />
              </div>
              <div className="col-12 col-md-8 text-md-start text-center">
                <h1 className="mb-2" style={{ fontWeight: 'bold', color: '#fff' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="32" className="me-2" />
                  Watcharawit Sorn
                </h1>
                <h3 className="mb-2" style={{ color: '#7F00FF', fontWeight: 'bold' }}>Full Stack Developer</h3>
                <p className="mb-3" style={{ color: '#ccc' }}>
                  Passionate about building responsive and user-friendly web applications.<br />
                  Experienced in React, Node.js, Python, and modern web technologies.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-md-start justify-content-center mb-3">
                  <a href="mailto:yourmail@email.com" className="btn btn-outline-light btn-sm rounded-pill">Contact</a>
                  <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm rounded-pill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" width="20" className="me-1" /> GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-sm rounded-pill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin" width="20" className="me-1" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* About Section */}
          <div className="about-card p-4 mt-4 shadow rounded-4" style={{ background: 'rgba(40,40,40,0.85)', maxWidth: 900, width: '100%' }}>
            <h2 className="mb-3" style={{ color: '#7F00FF', fontWeight: 'bold' }}>About Me</h2>
            <p style={{ color: '#eee', fontSize: '1.1rem' }}>
              สวัสดีครับ ผม Watcharawit Sorn เป็นนักพัฒนา Full Stack ที่มีความหลงใหลในการสร้างเว็บไซต์ที่สวยงามและใช้งานง่าย<br />
              มีประสบการณ์ทั้ง Frontend และ Backend รวมถึงการออกแบบ UI/UX และการทำงานร่วมกับทีม<br />
              สนใจเทคโนโลยีใหม่ ๆ และการเรียนรู้สิ่งใหม่เพื่อพัฒนาตัวเองอยู่เสมอ<br />
              <br />
              <span style={{ color: '#7F00FF', fontWeight: 'bold' }}>จุดเด่น:</span> การแก้ปัญหา, การสื่อสาร, การทำงานเป็นทีม, ความรับผิดชอบ
            </p>
          </div>
          {/* Contact Section */}
          <div className="contact-card p-4 mt-4 shadow rounded-4" style={{ background: 'rgba(30,30,30,0.85)', maxWidth: 900, width: '100%' }}>
            <h2 className="mb-3" style={{ color: '#7F00FF', fontWeight: 'bold' }}>Contact</h2>
            <div className="row align-items-center">
              <div className="col-12 col-md-6 mb-3 mb-md-0 text-md-start text-center">
                <p style={{ color: '#eee', fontSize: '1.1rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#fff' }}>Email:</span> yourmail@email.com<br />
                  <span style={{ fontWeight: 'bold', color: '#fff' }}>Phone:</span> 012-345-6789<br />
                  <span style={{ fontWeight: 'bold', color: '#fff' }}>Location:</span> Bangkok, Thailand
                </p>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column gap-3 justify-content-center align-items-md-start align-items-center">
                <a href="mailto:yourmail@email.com" className="btn btn-outline-light btn-lg rounded-pill w-75">Send Email</a>
                <a href="https://line.me/ti/p/~yourlineid" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg rounded-pill w-75">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/line/line-original.svg" alt="line" width="24" className="me-2" /> LINE
                </a>
                <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg rounded-pill w-75">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="facebook" width="24" className="me-2" /> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
          <div className="d-flex justify-content-between align-items-center w-100 mb-2" style={{ maxWidth: '900px' }}>
            <div className="d-flex align-items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="project-icon" width="32" className="me-2" />
              <h1 className="mb-0" style={{ fontWeight: 'bold' }}>Project</h1>
            </div>
            <Button variant="outline-primary" size="sm" style={{ fontWeight: 'bold' }}>View All</Button>
          </div>
          <div className="row w-100 justify-content-center mt-2" style={{ maxWidth: '900px' }}>
            {[1,2,3].map((i) => (
              <div className="col-12 col-md-4 mb-4" key={i}>
                <Card className="shadow-sm h-100 project-card" style={{ borderRadius: '18px', transition: 'transform 0.2s', cursor: 'pointer' }}>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" style={{ borderTopLeftRadius: '18px', borderTopRightRadius: '18px', height: '180px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>Project {i}</Card.Title>
                    <Card.Text>
                      ตัวอย่างโปรเจคที่แสดงรายละเอียดและรูปภาพ สามารถปรับแต่งได้ตามต้องการ
                    </Card.Text>
                    <Button variant="primary" size="sm">ดูรายละเอียด</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {/* Skill Programming Section */}
        <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
          <div className="d-flex justify-content-between align-items-center w-100 mb-2">
            <h1 className="mb-0">Skill Programming</h1>
          </div>
          <div className="row w-100 justify-content-center mt-2">
            <div className="col-6 col-md-2 mb-4">
              <div className="d-flex flex-column align-items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="48" />
                <span className="mt-2">JavaScript</span>
              </div>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <div className="d-flex flex-column align-items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="48" />
                <span className="mt-2">React</span>
              </div>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <div className="d-flex flex-column align-items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="48" />
                <span className="mt-2">Node.js</span>
              </div>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <div className="d-flex flex-column align-items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="48" />
                <span className="mt-2">Python</span>
              </div>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <div className="d-flex flex-column align-items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="48" />
                <span className="mt-2">HTML5</span>
              </div>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <div className="d-flex flex-column align-items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="48" />
                <span className="mt-2">CSS3</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
