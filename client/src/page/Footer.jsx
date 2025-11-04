
const Footer = () => {
  return (
    <footer
      className="text-center py-3 mt-3 bg-dark"
      style={{ color: "#fff", borderTop: "1px solid #222" }}
    >
      <div className="container">
        <div className="mb-2">
          <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            &copy; {new Date().getFullYear()} Watcharawit Saejung. All rights
            reserved.
          </span>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a href="mailto:yourmail@email.com" style={{ color: "#fff" }}>
            <i
              className="bi bi-envelope-fill"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
