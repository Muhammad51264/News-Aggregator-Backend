import "../assets/index.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "../assets/index.css";
import {useCookies} from "react-cookie"

const SignInAgency = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFlag, setEmailFlag] = useState("");
  const [error,setError] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  
  const navigate = useNavigate()
  
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
  
  const validateUser = async () => {


    let emailIsValid = validateEmail(email);
    // console.log(email, password,);

    if (emailIsValid) {
      setEmailFlag(true);
    } else {
      setEmailFlag(false);
    }
    try {
      console.log(email, password);
      const response = await axios.post(
        "http://localhost:8080/agencies/login",
        {
          email: email,
          password: password,
        }
      );
      //data = return res.json({ token, adminID: foundAgency._id }); 
      // الي موجودة بالباك على نفس ال 
      // endpoint
      
      // const [_, setCookies] = useCookies(["access_token"]);
      const token = await response.data;
      console.log(token);
      setCookies("access_token", token);
      navigate('/')
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section>
      <div className="col col-md-9 col-lg-12  mt-5">
        <div className="row justify-content-center mt-5 mx-0">
          <div
            className=" sign-in-container p-4 col col-md-5"
            id="lodin-reg-card"
          >
            <div className="row text-center mt-md-5 mb-md-5">
              <h4 style={{ color: "#27374D" }}>
                {" "}
                تسجيل الدخول للوكالة الإخبارية
              </h4>
            </div>
            <form className="mb-5">
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
                {<label style={{ color: "red" }}>{error}</label>}
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
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default SignInAgency;