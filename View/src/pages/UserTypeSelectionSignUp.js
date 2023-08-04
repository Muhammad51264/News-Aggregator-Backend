import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../../src/assets/SignUp.css";

const UserTypeSelectionSignUp = () => {
  return (
    <Container fluid className="userType-selection-signUp vh-100">
      <Row>
        <h4 className="mt-5">
          <Link
            to="/"
            className="text-light ml-4"
            style={{ textDecoration: "none", paddingRight: "2rem" }}
          >
            <span style={{ color: "#fff" }}>المحطة</span>{" "}
            <span style={{ color: "#EF4747" }}>الإخبارية</span>
          </Link>
        </h4>{" "}
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center align-items-center">
          <Card className="user-type-selection mt-5" style={{ width: "40rem" }}>
            <Card.Body className="d-flex flex-column gap-2">
              <Card.Title className="text-center">اختر نوع السحاب</Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">
                اقتباس{" "}
              </Card.Subtitle>
              <Card.Text></Card.Text>
              <div className="d-flex flex-column justify-content-center gap-4 text-center align-items-center">
                <Link
                  className="user-select-link "
                  to="/SignUpUser"
                  style={{ color: "#27374D" }}
                >
                  التسجيل كمستخدم عادي{" "}
                </Link>
                <Link
                  className="agency-select-link text-light"
                  to="/signUpAgency"
                  style={{ color: "#27374D" }}
                >
                  التسجيل كوكالة إخبارية{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default UserTypeSelectionSignUp;
