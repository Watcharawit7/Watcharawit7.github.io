import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: "80vh" }}>
      <h1 style={{ fontSize: "5rem", color: "#7F00FF", fontWeight: "bold" }}>404</h1>
      <h2 style={{ color: "#fff", fontWeight: "bold" }}>Page Not Found</h2>
      <p style={{ color: "#bbb", maxWidth: 400 }}>
        ขออภัย ไม่พบหน้าที่คุณร้องขอ หรืออาจถูกลบไปแล้ว<br/>
        กลับสู่หน้าหลักเพื่อเริ่มต้นใหม่
      </p>
      <Button as={Link} to="/" variant="primary" style={{ borderRadius: 20, marginTop: 20, fontWeight: "bold" }}>
        กลับหน้าหลัก
      </Button>
    </div>
  );
};

export default NotFound;
