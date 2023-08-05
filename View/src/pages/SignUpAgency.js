import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "../assets/SignUp.css";
import { Container, Row, Col } from "react-bootstrap";

const SignUpAgency = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [emailFlag, setEmailFlag] = useState("");
  const [passwordFlag, setPasswordFlag] = useState("");
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [cookies, setCookies] = useCookies("access_token");
  const [userType, setUserType] = useCookies("user");
  const [publisher, setPublisher] = useCookies("name");

  const navigate = useNavigate();

  const submitAgency = async () => {
    try {
      const AgencyInfo = new FormData();
      AgencyInfo.append("publisher", firstName);
      AgencyInfo.append("email", email);
      AgencyInfo.append("password", password);
      AgencyInfo.append("img", selectedImage);
      // {
      //   publisher: firstName,
      //   email: email,
      //   password: password,
      //   img: selectedImage
      // }
      const res = await axios.post(
        "http://localhost:8080/agencies/register",
        AgencyInfo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = await res.data;
      if (data.status === "Success") {
        setCookies("access_token", data.token);
        setUserType("user", "Agency");
        navigate("/admindashboard");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (emailFlag && passwordFlag) {
      try {
        submitAgency();
      } catch (err) {
        console.log(err);
      }
    }
  }, [emailFlag, passwordFlag]);

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    console.log(file);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Here you can submit the post content and the selected image to your backend or handle the post creation logic.
  //   console.log("Post Content:", postContent);
  //   console.log("Selected Image:", selectedImage);

  //   // Clear form after submission
  //   setPostContent("");
  //   setSelectedImage(null);
  // };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  // const handleLastNameChange = (event) => {
  //   setLastName(event.target.value);
  // };

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

  const saveData = async () => {
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

    // const pushData = async () => {
    //   // Check if the email already exists
    //   const existingUser = await axios.get(
    //     `http://localhost:3000/users?email=${email}`
    //   );

    //   if (existingUser.data.length > 0) {
    //     alert("This email already exists.");
    //     return;
    //   }

    //   // Create the new user object
    //   const newUser = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password,
    //   };

    //   try {
    //     // Save the new user to the JSON server
    //     await axios.post("http://localhost:3000/users", newUser);
    //     window.location.href = "/signin";
    //     alert("User created successfully!");
    //   } catch (error) {
    //     console.error("Error creating user:", error);
    //   }
    // };
    // if (emailFlag && passwordFlag) {
    //   try {
    //     await submitAgency();
    //     navigate("/");
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  };

  return (
    <div className="sign-up-user">
      <h4 className="p-4">
        <Link to="/" style={{ textDecoration: "none", paddingRight: "2rem" }}>
          <span style={{ color: "#fff" }}>المحطة</span>{" "}
          <span style={{ color: "#EF4747" }}>الإخبارية</span>
        </Link>
      </h4>
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center mt-3">
          <Col style={{ maxWidth: "60rem" }}>
            <form
              style={{ backgroundColor: "#fff", maxWidth: "60rem" }}
              className="mb-5 p-5"
              onSubmit={(e) => {
                e.preventDefault();
                saveData();
              }}
            >
              <div className="row text-center mt-md-2 mb-md-1">
                <h4 className="" style={{ color: "#27374D" }}>
                  إنشاء حساب لوكالة إخبارية
                </h4>
              </div>
              <div className="form-outline mb-4">
                <label
                  className="form-label"
                  htmlFor="firstName"
                  style={{ color: "#27374D" }}
                >
                  اسم الوكالةالإخبارية
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
                <div className="mb-3">
                  <label htmlFor="postImage" className="form-label">
                    اختر شعار الوكالة
                  </label>
                  <input
                    required
                    type="file"
                    className="form-control"
                    id="postImage"
                    onChange={handleImageChange}
                    accept="image/*"
                    capture="environment"
                  />
                </div>
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
                {/* <button
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
              </button> */}
                <button
                  className="create-account-btn w-25 p-2 text-center text-decoration-none text-light"
                  // to="/AgencyDashboard"
                  type="submit"
                  style={{ backgroundColor: "rgb(39, 55, 77)" }}
                  // onClick={saveData}
                >
                  أنشئ حساب
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

export default SignUpAgency;
