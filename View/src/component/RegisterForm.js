import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../../src/assets/SignUp.css";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

function RegisterForm() {
  const [validated, setValidated] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password match

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState([]);

  const [emailFlag, setEmailFlag] = useState("true");
  const [passwordFlag, setPasswordFlag] = useState("");
  const [resMessage, setResMessage] = useState("");
  const navigate = useNavigate();

  //Generate Username using first and last name
  function generateUsername(firstName, lastName) {
    const firstLetter = firstName.charAt(0).toLowerCase();

    const lowercasedLastName = lastName.toLowerCase();

    const username = firstLetter + lowercasedLastName;

    return username;
  }

  const submitUser = async () => {
    try {
      const username = generateUsername(firstName, lastName);

      const response = await axios.post(
        "http://localhost:8080/users/register",
        {
          username: username,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.data;
      console.log(data);

      navigate("/");
    } catch (err) {
      console.log(err);
      setResMessage(err.response.data.message);
      window.alert(err.response.data.message);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

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
    // console.log(`${firstName} ${lastName} ${password} ${confirmPassword}`);
    saveData();
    if (passwordFlag) {
      submitUser();
    }
  };

  const validatePassword = (password) => {
    const lengthPattern = /^.{8,16}$/;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const specialCharacterPattern = /[!@#$%^&*]/;
    const numberPattern = /[0-9]/;

    const errors = [];

    if (!lengthPattern.test(password)) {
      errors.push("يجب أن يكون طول الرقم السري بين 8 و 16 حرفًا");
      setPasswordFlag(false);
    }

    if (!uppercasePattern.test(password)) {
      errors.push("يجب أن يحتوي الرقم السري على حرف واحد كبير على الأقل");
      setPasswordFlag(false);
    }

    if (!lowercasePattern.test(password)) {
      errors.push("يجب أن يحتوي الرقم السري على حرف واحد صغير على الأقل");
      setPasswordFlag(false);
    }

    if (!specialCharacterPattern.test(password)) {
      errors.push(
        "يجب أن يحتوي الرقم السري على حرف خاص واحد على الأقل (!@#$%^&*)"
      );
      setPasswordFlag(false);
    }

    if (!numberPattern.test(password)) {
      errors.push("يجب أن يحتوي الرقم السري على رقم واحد على الأقل");
      setPasswordFlag(false);
    }
    if (errors.length === 0) {
      setPasswordFlag(true);
    }
    return errors;
  };

  const saveData = async () => {
    if (password !== confirmPassword) {
      setErrors(["الرقم السري وتأكيد الرقم السري لا يتطابقان"]);
      setPasswordFlag(false);
      return;
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setErrors(passwordErrors);
      return;
    }

    setErrors([]);
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
            <Form.Label>الاسم الأول</Form.Label>
            <Form.Control
              style={{ textDirection: "right" }}
              className="userReg-email-field"
              required
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/* <Form.Control.Feedback>يبدو جيدًا</Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>اسم العائلة</Form.Label>
            <Form.Control
              onChange={(e) => setLastName(e.target.value)}
              required
              type="text"
            />
            {/* <Form.Control.Feedback>يبدو جيدًا</Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group
            className=""
            as={Col}
            md="6"
            controlId="validationCustom03"
          >
            <Form.Label>البريد الإلكتروني</Form.Label>
            <Form.Control
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              يرجى إدخال بريد إلكتروني صحيح
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>كلمة المرور</Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              يرجى إدخال كلمة المرور
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>تأكيد كلمة المرور</Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          {errors.length > 0 && (
            <div>
              <p
                className="d-flex flex column justify-content-center"
                style={{ color: "red" }}
              >
                يوجد أخطاء في الرقم السري:
              </p>
              {errors.map((error, index) => (
                <p
                  className="d-flex flex column justify-content-center"
                  style={{ color: "red" }}
                  key={index}
                >
                  {error}
                </p>
              ))}
            </div>
          )}
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
