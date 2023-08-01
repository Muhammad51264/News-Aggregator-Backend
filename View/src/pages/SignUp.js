import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [emailFlag, setEmailFlag] = useState("");
  const [passwordFlag, setPasswordFlag] = useState("");
  function generateUsername(firstName, lastName) {
    // Get the first letter of the first name (converted to lowercase)
    const firstLetter = firstName.charAt(0).toLowerCase();

    // Use the entire last name (converted to lowercase)
    const lowercasedLastName = lastName.toLowerCase();

    // Concatenate the first letter of the first name with the lowercased last name
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
      await console.log(await response.json());
    } catch (err) {
      console.log(err);
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
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

  const saveData = () => {
    let emailIsValid = validateEmail(email);

    if (emailIsValid) {
      setEmailFlag(true);
    } else {
      setEmailFlag(false);
    }

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

    if (emailFlag && passwordFlag) {
      submitUser();
    }
  };

  return (
    <div className="col col-md-9 col-lg-12  mt-5 ">
      <div className="row justify-content-center mt-5 mx-0">
        <div className="sign-up-container p-4 col col-md-5" id="lodin-reg-card">
          <div className="row text-center mt-md-2 mb-md-1">
            <h4 className="" style={{ color: "#27374D" }}>
              إنشاء حساب لمستخدم عادي
            </h4>
          </div>
          <form className="mb-5">
            <div className="form-outline mb-4">
              <label
                className="form-label"
                htmlFor="firstName"
                style={{ color: "#27374D" }}
              >
                الاسم الأول
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>

            <div className="form-outline mb-4">
              <label
                className="form-label"
                htmlFor="lastName"
                style={{ color: "#27374D" }}
              >
                اسم العائلة
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>

            <div className="form-outline mb-4">
              <label
                className="form-label"
                htmlFor="email"
                style={{ color: "#27374D" }}
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
              />
              {emailFlag === false && (
                <label style={{ color: "red" }}>
                  يرجى ادخال صيغة بريد إلكتروني صحيحة مثل name@example.com
                </label>
              )}
            </div>

            <div className="form-outline mb-4">
              <label
                className="form-label"
                htmlFor="pass"
                style={{ color: "#27374D" }}
              >
                الرقم السري
              </label>
              <input
                type="password"
                id="pass"
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="form-outline mb-4">
              <label
                className="form-label"
                htmlFor="conPass"
                style={{ color: "#27374D" }}
              >
                تأكيد الرقم السري
              </label>
              <input
                type="password"
                id="conPass"
                className="form-control"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>

            {errors.length > 0 && (
              <div>
                <p style={{ color: "red" }}>يوجد أخطاء في الرقم السري:</p>
                {errors.map((error, index) => (
                  <p style={{ color: "red" }} key={index}>
                    {error}
                  </p>
                ))}
              </div>
            )}

            <div className="row px-5">
              <Link
                to="/"
                type="button"
                id="signUp-btn"
                className="btn btn-block mb-4 login-btn"
                onClick={saveData}
                style={{
                  color: "#fff",
                  backgroundColor: "#27374D",
                  width: "7rem",
                }}
              >
                أنشئ حساب
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
