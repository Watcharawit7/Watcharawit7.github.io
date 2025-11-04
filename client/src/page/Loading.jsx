import Spinner from "react-bootstrap/Spinner";
const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Spinner
        animation="border"
        role="status"
        variant="primary"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
