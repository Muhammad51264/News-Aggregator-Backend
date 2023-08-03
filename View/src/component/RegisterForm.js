import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../../src/assets/SignUp.css";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [validated, setValidated] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password match

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // Check if passwords match
    const password = form.elements["validationCustom04"].value;
    const confirmPassword = form.elements["validationCustom05"].value;
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      event.preventDefault();
      event.stopPropagation();
    } else {
      setPasswordsMatch(true);
    }

    setValidated(true);
  };

  return (
    <>
      <Form
        className=" my-5 Register-Form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3 d-flex flex-column justify-content-center align-items-center gap-4 ">
          <h5 className="text-center" style={{ color: "#27374D" }}>
            إنشاء حساب كمستخدم عادي
          </h5>

          <Form.Group as={Col} md="6" controlId="validationCustom01">
            {/* <Form.Label>الاسم الأول</Form.Label> */}
            <Form.Control
              style={{ textDirection: "right" }}
              className="userReg-email-field"
              required
              type="text"
              placeholder="الاسم الأول"
            />
            {/* <Form.Control.Feedback>يبدو جيدًا</Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            {/* <Form.Label>Last name</Form.Label> */}
            <Form.Control required type="text" placeholder="اسم العائلة" />
            {/* <Form.Control.Feedback>يبدو جيدًا</Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group
            className=""
            as={Col}
            md="6"
            controlId="validationCustom03"
          >
            {/* <Form.Label>البريد الإلكتروني</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="البريد الإلكتروني"
              required
            />
            <Form.Control.Feedback type="invalid">
              يرجى إدخال بريد إلكتروني صحيح
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom04">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" placeholder="كلمة المرور" required />
            <Form.Control.Feedback type="invalid">
              يرجى إدخال كلمة المرور
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            {/* <Form.Label>Confirm Password</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="تأكيد كلمة المرور"
              required
            />
            {passwordsMatch ? (
              <Form.Control.Feedback type="invalid">
                يرجى تأكيد كلمة المرور
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback type="invalid">
                كلمة المرور غير متوافقة
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            className="mb-3 d-flex justify-content-start "
          >
            <Form.Check
              required
              label="أوافق على الشروط والأحكام"
              feedback="يجب أن توافق على الشروط والأحكام"
              feedbackType="invalid"
            />
          </Form.Group>

          <Button
            type="submit"
            style={{
              maxWidth: "10rem",
              backgroundColor: "#525D6C",
              border: "none",
            }}
          >
            أنشئ حساب
          </Button>
          <div className="mb-3 d-flex justify-content-center gap-2 ">
            <span>هل لديك حساب؟</span>
            <Link
              to="/UserTypeSelectionSignIn"
              style={{
                color: "#525D6C",
                cusrsor: "pointer",
              }}
            >
              {" "}
              تسجيل الدخول
            </Link>
          </div>
        </Row>
      </Form>
    </>
  );
}

export default RegisterForm;
