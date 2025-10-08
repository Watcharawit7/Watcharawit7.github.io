import React from "react";
import { Container } from "react-bootstrap";

const skillGroups = [
    {
        title: "Programming Language",
        items: [
            { name: "C language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#00599C" },
            { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777BB4" },
        ],
    },
    {
        title: "Framework",
        items: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
            { name: "Node.js (Express)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#3C873A" },
            { name: "React-Bootstrap", icon: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png", color: "#7952B3" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "#7952B3" },
        ],
    },
    {
        title: "Database",
        items: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
        ],
    },
    {
        title: "Tool",
        items: [
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
            { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", color: "#31A8FF" },
            { name: "Visual Studio Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "#FF6C37" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
        ],
    },
];

const Skill = () => {
    return (
        <Container className="mt-75 mb-5">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h1 style={{ fontWeight: 'bold', letterSpacing: '2px', color: '#7F00FF', marginBottom: 10 }}>
                    Skill Programming
                </h1>
                <p style={{ color: '#bbb', fontSize: '1.1rem', maxWidth: 700, marginBottom: 40 }}>
                    รวมทักษะการเขียนโปรแกรมและเทคโนโลยีที่ถนัด <span style={{ color: '#7F00FF', fontWeight: 'bold' }}>พร้อมเรียนรู้สิ่งใหม่เสมอ</span><br/>
                    <span style={{ color: '#aaa', fontSize: '1rem' }}>เน้นพัฒนาเว็บแอปที่สวยงาม ใช้งานง่าย และมีประสิทธิภาพ</span>
                </p>
                {skillGroups.map((group) => (
                    <div key={group.title} className="mb-5 w-100">
                        <h3 style={{ color: '#7F00FF', fontWeight: 'bold', marginBottom: 24, textAlign: 'left', marginLeft: 10 }}>{group.title}</h3>
                        <div className="row w-100 justify-content-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
                            {group.items.map((skill) => (
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
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Skill;