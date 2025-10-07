import { Container, Image, Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="mt-75">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="profile-card p-4 shadow-lg rounded-4" style={{ background: 'rgba(30,30,30,0.8)', maxWidth: 900, width: '100%' }}>
            <div className="row align-items-center">
              <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
                <Image
                  src="img/profile.jpg"
                  alt="boy"
                  roundedCircle
                  fluid
                  width={180}
                  height={180}
                  style={{ border: '4px solid #7F00FF', boxShadow: '0 0 16px #7F00FF55' }}
                />
              </div>
              <div className="col-12 col-md-8 text-md-start text-center">
                <h1 className="mb-2" style={{ fontWeight: 'bold', color: '#fff' }}>
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html5" width="32" className="me-2" />
                  Watcharawit Sae-jung
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css3" width="32" className="ms-2" />
                </h1>
                <h3 className="mb-2" style={{ color: '#7F00FF', fontWeight: 'bold' }}>Full Stack Developer</h3>
                <p className="mb-3" style={{ color: '#ccc' }}>
                 ผมมีประสบการณ์พัฒนาเว็บแอปด้วย React/React-Bootstrap, ออกแบบ UI, เชื่อมต่อ Node.js/Express และฐานข้อมูล MongoDB ซึ่งเชื่อว่าจะเป็นประโยชน์ต่อองค์กร พร้อมทั้งมีความตั้งใจที่จะเรียนรู้และพัฒนาทักษะเพิ่มเติมเพื่อเติบโตไปพร้อมกับบริษัท <br />
                </p> 
                <div className="d-flex flex-wrap gap-3 justify-content-md-start justify-content-center mb-3">
                  <a href="https://github.com/Watcharawit7" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm rounded-pill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" width="20" className="me-1" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Section */}
          {/* <div className="about-card p-4 mt-4 shadow rounded-4" style={{ background: 'rgba(40,40,40,0.85)', maxWidth: 900, width: '100%' }}>
            <h2 className="mb-3" style={{ color: '#7F00FF', fontWeight: 'bold' }}>About Me</h2>
            <p style={{ color: '#eee', fontSize: '1.1rem' }}>
              สวัสดีครับ ผม Watcharawit Sorn เป็นนักพัฒนา Full Stack ที่มีความหลงใหลในการสร้างเว็บไซต์ที่สวยงามและใช้งานง่าย<br />
              มีประสบการณ์ทั้ง Frontend และ Backend รวมถึงการออกแบบ UI/UX และการทำงานร่วมกับทีม<br />
              สนใจเทคโนโลยีใหม่ ๆ และการเรียนรู้สิ่งใหม่เพื่อพัฒนาตัวเองอยู่เสมอ<br />
              <br />
              <span style={{ color: '#7F00FF', fontWeight: 'bold' }}>จุดเด่น:</span> การแก้ปัญหา, การสื่อสาร, การทำงานเป็นทีม, ความรับผิดชอบ
            </p>
          </div> */}
          {/* Contact Section */}
          {/* <div className="contact-card p-4 mt-4 shadow rounded-4" style={{ background: 'rgba(30,30,30,0.85)', maxWidth: 900, width: '100%' }}>
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
          </div> */}
        </div>

            {/* Skill Programming  */}
        <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
          <div className="d-flex justify-content-center align-items-center w-100 mb-4" style={{ maxWidth: '900px' }}>
            <h1 className="mb-0" style={{ fontWeight: 'bold', letterSpacing: '2px', color: '#7F00FF' }}>
              Skill Programming
            </h1>
          </div>
          <div className="row w-100 justify-content-center" style={{ maxWidth: '900px' }}>
            {[
              { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB',  },
              { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#3C873A',  },
              { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E', },
              { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26', },
              { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6', },
              { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '#777BB4', },
              { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: '#7952B3', },
              { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', },
            ].map((skill) => (
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4" key={skill.name}>
                <div
                  className="shadow skill-card d-flex flex-column align-items-center justify-content-center p-3 h-100"
                  style={{
                    background: 'rgba(40,40,60,0.97)',
                    borderRadius: '18px',
                    border: `2.5px solid ${skill.color}`,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: `0 2px 16px ${skill.color}55`,
                    minHeight: 120,
                    minWidth: 40,
                    cursor: 'pointer',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    e.currentTarget.style.boxShadow = `0 8px 32px ${skill.color}`;
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = `0 2px 16px ${skill.color}55`;
                  }}
                >
                  <img src={skill.icon} alt={skill.name} width="54" style={{ filter: 'drop-shadow(0 0 8px ' + skill.color + ')' }} />
                  <span className="mt-2 mb-1" style={{ color: skill.color, fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '1px' }}>{skill.name}</span>
                  <span style={{ color: '#bbb', fontSize: '0.95rem', }}>{skill.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Section */}
        <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
          <div className="d-flex flex-column w-100 mb-3" style={{ maxWidth: '1000px' }}>
            <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
              <div className="d-flex align-items-center gap-2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="project-icon" width="36" className="me-2" />
                <h1 className="mb-0" style={{ fontWeight: 'bold', color: '#7F00FF', letterSpacing: '1px' }}>My Projects</h1>
              </div>
              <Button variant="outline-primary" size="sm" style={{ fontWeight: 'bold', borderRadius: '20px', padding: '6px 22px' }}>View All</Button>
            </div>
            <p style={{ color: '#bbb', fontSize: '1.1rem', margin: 0, maxWidth: 700 }}>
              ตัวอย่างผลงานที่เคยทำ ทั้งเว็บไซต์และเว็บแอปพลิเคชันที่เน้นความสวยงามและประสบการณ์ผู้ใช้<br/>
              <span style={{ color: '#7F00FF', fontWeight: 'bold' }}>ทุกโปรเจคพัฒนาอย่างตั้งใจ</span> และพร้อมต่อยอดให้ตอบโจทย์ธุรกิจจริง
            </p>
          </div>
          <div className="row w-100 justify-content-center mt-3" style={{ maxWidth: '1000px' }}>
            {[
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
            ].map((project, i) => (
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
        </div>
    
      </Container>

    </>
  );
};

export default Home;
