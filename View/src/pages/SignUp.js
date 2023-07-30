import React from "react";

const SignUp = () => {
  return (
    <div className="col col-md-9 col-lg-12  mt-5 ">
      <div className="row justify-content-center mt-5 mx-0">
        <div className="sign-up-container p-4 col col-md-5" id="lodin-reg-card">
          <div className="row text-center mt-md-2 mb-md-1">
            <h4 className="" style={{ color: "#27374D" }}>
              إنشاء حساب
            </h4>
          </div>
          <form className="mb-5">
            {/* {<!-- First Name input -->} */}
            <div className="form-outline mb-4">
              <label
                className="form-label"
                for="firstName"
                style={{ color: "#27374D" }}
              >
                الاسم الأول
              </label>
              <input type="text" id="firstName" class="form-control" />
            </div>
            {/* {<!-- Second Name input -->} */}
            <div className="form-outline mb-4">
              <label
                className="form-label"
                for="secondName"
                style={{ color: "#27374D" }}
              >
                اسم العائلة
              </label>
              <input type="text" id="secondName" class="form-control" />
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <label
                className="form-label"
                for="email"
                style={{ color: "#27374D" }}
              >
                البريد الإلكتروني
              </label>
              <input type="email" id="email" class="form-control" />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <label
                className="form-label"
                for="pass"
                style={{ color: "#27374D" }}
              >
                الرقم السري
              </label>
              <input type="password" id="pass" class="form-control" />
            </div>

            {/* <!-- Confirm Password input --> */}
            <div className="form-outline mb-4">
              <label
                className="form-label"
                for="ConPass"
                style={{ color: "#27374D" }}
              >
                تأكيد الرقم السري
              </label>
              <input type="password" id="conPass" class="form-control" />
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}

            {/* <!-- Submit button --> */}
            <div className="row px-5">
              <button
                type="button"
                id="signUp-btn"
                class="btn btn-block mb-4 login-btn"
                style={{
                  color: "#fff",
                  backgroundColor: "#27374D",
                  width: "7rem",
                }}
              >
                أنشئ حساب
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
