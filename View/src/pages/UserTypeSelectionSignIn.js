import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";

const UserTypeSelectionSignIn = () => {
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
        </h4>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center align-items-center">
          <Card className="user-type-selection mt-5" style={{ width: "30rem" }}>
            <Card.Body className="d-flex flex-column gap-2">
              <Card.Title className="text-center">اختر نوع الدخول</Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">
                اقتباس{" "}
              </Card.Subtitle>
              <Card.Text></Card.Text>
              <div className="d-flex flex-column justify-content-center gap-4 text-center align-items-center">
                <Link
                  className="user-select-link "
                  to="/signIn"
                  style={{ color: "#27374D" }}
                >
                  الدخول كمستخدم عادي{" "}
                </Link>
                <Link
                  className="agency-select-link text-light"
                  to="/signInAgency"
                  style={{ color: "#27374D" }}
                >
                  الدخول كوكالة إخبارية{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>
          ;
        </Col>
      </Row>
    </Container>
  );
};
export default UserTypeSelectionSignIn;
