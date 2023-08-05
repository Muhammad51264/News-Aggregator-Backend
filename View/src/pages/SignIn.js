import "../assets/index.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/index.css";
import { useCookies } from "react-cookie";
import { Container, Row, Col } from "react-bootstrap";

const SignInAgency = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFlag, setEmailFlag] = useState("");
  const [passwordFlag, setPasswordFlag] = useState("");
  const [cookies, setCookies] = useCookies("access_token");
  const [userType, setUserType] = useCookies("user");
  const [publisher, setPublisher] = useCookies("name");
  const [userFlag,setUserFlag] = useState(true);
  // const [change,setChange] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
  };

  const validatePassword = (password) => {
  if(!password){
    return false;
  }else{
    return true;
  }

  };

  const validateUser = async () => {
    let emailIsValid = validateEmail(email);
    let passwordIsValid = validatePassword(password);
    // console.log(email, password,);
    setUserFlag(true);

    if (emailIsValid) {
      setEmailFlag(true);
    } else {
      setEmailFlag(false);
    }

    if (passwordIsValid) {
      setPasswordFlag(true);
    } else {
      setPasswordFlag(false);
    }

  };

  const submitUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        {
          email: email,
          password: password,
        }
      );
      //data = return res.json({ token, adminID: foundAgency._id });
      // الي موجودة بالباك على نفس ال
      // endpoint

      // const [_, setCookies] = useCookies(["access_token"]);
      const result = await response.data;
      console.log(result);
      if (result.status === "error") {
        console.log(result.message);
        setUserFlag(false);
      }
      if (result.status === "success") {
        console.log(result.token);
        setUserFlag(true);
        setUserType("user", "User");
        setCookies("access_token", result.token);
        setPublisher("name", result.name);
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    if (emailFlag && passwordFlag && userFlag) {
      submitUser();
    }
  }, [emailFlag,passwordFlag,userFlag]);

  return (
    <div className="sign-in-user vh-100">
      <h4 className="pt-4">
        <Link to="/" style={{ textDecoration: "none", paddingRight: "2rem" }}>
          <span style={{ color: "#fff" }}>المحطة</span>{" "}
          <span style={{ color: "#EF4747" }}>الإخبارية</span>
        </Link>
      </h4>
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center pt-3 ">
          <Col style={{ maxWidth: "60rem" }}>
            <form
              className="mb-5 p-4"
              style={{ backgroundColor: "#fff", maxWidth: "60rem" }}
            >
              <div className="row text-center mt-md-5 mb-md-5">
                <h4 style={{ color: "#27374D" }}>
                  {" "}
                  تسجيل الدخول                </h4>
              </div>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  placeholder="البريد الإلكتروني"
                  typeName="email"
                  id="email"
                  class="form-control"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailFlag === false && (
                  <label style={{ color: "red" }}>
                    يرجى ادخال صيغة بريد إلكتروني صحيحة مثل name@example.com
                  </label>
                )}
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  placeholder="الرقم السري"
                  type="password"
                  id="pass"
                  class="form-control"
                  value={password}
                  onChange={handlePasswordChange}
                />
                               {passwordFlag === false && (
                  <label style={{ color: "red" }}>
                      يرحى ادخال كلمة المرور
                  </label>
                )}

{userFlag === false && (<>
                  <br/>
                  <label style={{ color: "red" }}>
                    البريد الالكتروني او كلمة المرور غير صحيحة
                  </label></>
                )}
              </div>

              {/* <!-- 2 column grid layout for inline styling --> */}
              <div className="row mb-5">
                <div className="col d-flex justify-content-between">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <label className="form-check-label" for="form2Example31">
                      {" "}
                      تذكرني{" "}
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                    />
                  </div>
                </div>

                <div className="col">
                  {/* <!-- Simple link --> */}
                  <a href="#!" style={{ color: "#27374D" }}>
                    هل تواجه مشكلة؟
                  </a>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <div class="row ps-5 pe-5 ">
                <button
                  to="/"
                  type="button"
                  id="signUp-btn"
                  className="btn btn-block mb-4 login-btn "
                  onClick={validateUser}
                  style={{
                    color: "#fff",
                    backgroundColor: "#27374D",
                    width: "7rem",
                  }}
                >
                  دخول
                </button>
              </div>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>
                  ليس لديك حساب؟{" "}
                  <Link to="/signup" style={{ color: "#27374D" }}>
                    أنشئ حساب
                  </Link>
                  {/* <a href="signup.html" style={{ color: "#27374D" }}>
      انشئ حساب
    </a> */}
                </p>
                <p>أو سجل الدخول بواسطة:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i
                    className="fa-brands fa-facebook fa-2xl"
                    style={{ color: "#27374D" }}
                  ></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i
                    className="fab fa-google fa-2xl"
                    style={{ color: "#27374D" }}
                  ></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i
                    class="fab fa-twitter fa-2xl"
                    style={{ color: "#27374D" }}
                  ></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i
                    class="fab fa-github fa-2xl"
                    style={{ color: "#27374D" }}
                  ></i>
                </button>
              </div>
            </form>
            ;
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignInAgency;
