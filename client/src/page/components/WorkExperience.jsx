import { Container, Card, Image } from "react-bootstrap";

const experiences = [
    {
        company: "Bonmek Co.,Ltd.",
        logo: "https://www.bonmek.com/wp-content/uploads/2019/07/bonmekTransparent-1.png",
        position: "Frontend Developer (Internship)",
        period: "มิ.ย. 2024 - ต.ค. 2024",
        details: [
            "ออกแบบ UI ระบบการจัดการโรงเรียนโดยใช้ WordPress",
            "ออกแบบ UX/UI สำหรับ E-Portfolio และโมดูลการเช็คชื่อ โดยใช้ Figma",
            "พัฒนาโมดูล E-Portfolio และโมดูลการเช็คชื่อ โดยใช้ framework Angular"
        ]
    },
    {
        company: "Capsule Creation Co.,Ltd.",
        logo: "https://th.cnyxcaps.com/uploads/202334661/i202305081631176506189.jpg", // capsule icon
        position: "Full Stack Developer (full-time)",
        period: "ม.ค. 2024 - พ.ค. 2025",
        details: [
            "เขียน API โดยใช้ PHP ที่มีการเชื่อมต่อกับฐานข้อมูลที่ใช้ MongoDB",
            "ออกแบบฐานข้อมูลและ UI สำหรับโมดูล blood bank โดยใช้ framework React",
            "ตัดเเบบฟอร์มกรอกข้อมูล ตามที่ได้รับมอบหมาย เป็นขนาด A4"
        ]
    },
    {
        company: "Division of Student Development and Alumni Hatyai Campus Prince of Songkla University",
        logo: "https://scontent.fhdy1-1.fna.fbcdn.net/v/t39.30808-6/508063636_1239703247941337_7124078334144205221_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFgx9OPdg9v09PPTiV4J4DVt6rYIQdDQz63qtghB0NDPkTouw9Sty_IXYHricP4htxsswFXycnjZ0bnd-VItMvo&_nc_ohc=rquMXzwT25YQ7kNvwF5kesq&_nc_oc=AdlLzvvEOldBl9I6CWUHsOLAyqRYy6mDpEgiKWsQXR9A1x3Ti0JQpJymH-Bm8d4XJuo&_nc_zt=23&_nc_ht=scontent.fhdy1-1.fna&_nc_gid=RG2pWtACirh9SyHlhWiVzg&oh=00_Afd76_uCSc3prRl9Lg3AYmntSm17ezgbj2gxz51q3PRAuA&oe=68EC50DC",
        position: "Fullstack Developer(full-time) ",
        period: "มิ.ย. 2025 - ก.ย. 2025",
        details: [
            "ออกเเบบเเละพัฒนาระบบสมรรถนะนักศึกษา ด้วย framework React",
            "ออกเเบบฐานข้อมูลและ API สำหรับระบบสมรรถนะนักศึกษา ด้วย node.js, Express และ MongoDB",
            "พัฒนาระบบ admin สำหรับจัดการข้อมูลนักศึกษา",
            "จัดข้อมูลเเละดาวโหลดเป็น Excel ได้"
        ]
    }
];

const WorkExperience = () => {
    return (
        <Container className="mt-75 mb-5">
            <div className="d-flex flex-column align-items-center text-center mb-4">
                <h1 style={{ fontWeight: 'bold', color: '#7F00FF', letterSpacing: '2px' }}>Work Experience</h1>
                <p style={{ color: '#bbb', fontSize: '1.1rem', maxWidth: 700 }}>
                    ประสบการณ์การทำงานที่เกี่ยวข้องกับสายอาชีพพัฒนาเว็บไซต์และซอฟต์แวร์
                </p>
            </div>
            <div className="timeline position-relative" style={{ maxWidth: 850, margin: '0 auto' }}>
                {experiences.map((exp, idx) => (
                    <div key={exp.company} className="mb-5 d-flex align-items-start position-relative">
                        {/* Timeline dot and line */}
                        <div className="me-3 d-none d-md-flex flex-column align-items-center" style={{ minWidth: 40 }}>
                            <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#fff', border: '4px solid #7F00FF', boxShadow: '0 0 0 4px #7F00FF33', zIndex: 2 }}></div>
                            {idx < experiences.length - 1 && (
                                <div style={{ width: 6, height: 90, background: 'linear-gradient(180deg, #7F00FF55 0%, #fff0 100%)', margin: '0 auto', zIndex: 1 }}></div>
                            )}
                        </div>
                        {/* Card with image */}
                        <Card className="shadow-lg w-100 text-start" style={{ borderRadius: 22, background: 'linear-gradient(120deg, #23234f 0%, #1E1E1E 100%)', border: 'none', minHeight: 180 }}>
                            <Card.Body className="d-flex flex-column flex-md-row align-items-md-center gap-4">
                                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minWidth: 90 }}>
                                    <Image src={exp.logo} alt={exp.company} width={70} height={70} rounded style={{ background: '#fff', padding: 8, boxShadow: '0 2px 16px #7F00FF33' }} />
                                </div>
                                <div className="flex-grow-1">
                                    <Card.Title style={{ color: '#7F00FF', fontWeight: 'bold', fontSize: '1.25rem' }}>{exp.position}</Card.Title>
                                    <div className="d-flex flex-wrap align-items-center mb-2">
                                        <span className="fw-bold me-2" style={{ color: '#fff' }}>{exp.company}</span>
                                        <span className="badge bg-secondary bg-opacity-75 text-light fs-6 fw-normal">{exp.period}</span>
                                    </div>
                                    <ul className="mb-0 ps-3" style={{ color: '#bbb', fontSize: '1.05rem' }}>
                                        {exp.details.map((d, i) => (
                                            <li key={i}>{d}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default WorkExperience;
