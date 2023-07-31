import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";

const UserTypeSelectionSignIn = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col>
          <Card className="user-type-selection mt-5" style={{ width: "25rem" }}>
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
                  to="/signIn"
                  style={{ color: "#27374D" }}
                >
                  الدخول كوكالة إخبارية{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default UserTypeSelectionSignIn;
