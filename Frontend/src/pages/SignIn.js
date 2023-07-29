import React from "react";
import "../assets/index.css";

const SignIn = () => {
  return (
    <section>
      <div className="col col-md-9 col-lg-12  mt-5">
        <div className="row justify-content-center mt-5 mx-0">
          <div
            className=" sign-in-container p-4 col col-md-5"
            id="lodin-reg-card"
          >
            <div className="row text-center mt-md-5 mb-md-5">
              <h4 style={{ color: "#27374D" }}>تسجيل الدخول</h4>
            </div>
            <form className="mb-5">
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  placeholder="البريد الإلكتروني"
                  typeName="email"
                  id="email"
                  class="form-control"
                />
                <label
                  id="email-error"
                  className="form-label"
                  for="email"
                ></label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  placeholder="الرقم السري"
                  typeName="password"
                  id="pass"
                  class="form-control"
                />
                <label
                  id="pass-error"
                  className="form-label"
                  for="pass"
                ></label>
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
                  type="button"
                  id="signUp-btn"
                  className="btn btn-block mb-4 login-btn "
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
                  <a href="signup.html" style={{ color: "#27374D" }}>
                    انشئ حساب
                  </a>
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

export default SignIn;
