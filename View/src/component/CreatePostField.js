import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "../assets/AgencyDashboard.css";
import { useCookies } from "react-cookie";
import { useDataContext } from "../pages/AgencyDashboard";

const CreatePostField = () => {
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [category, setCategory] = useState("breaking");
  const [publisher, setPublisher] = useCookies("name");
  const [showPopup, setShowPopup] = useState(false);
  const { data, setData } = useDataContext();
  const [message, setMessage] = useState("");

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form input
    if (!postTitle || !postContent || !selectedImage || !category) {
      alert("Please fill in all required fields.");
      return;
    }

    const postObject = new FormData();
    postObject.append("title", postTitle);
    postObject.append("desc", postContent);
    postObject.append("category", category);
    postObject.append("publisher", decodeURIComponent(publisher.name));
    postObject.append("img", selectedImage);
    postObject.append("date", new Date());
    // const postObject = {
    //   title: postTitle,
    //   desc: postContent,
    //   // img: selectedImage,
    //   category: category,
    //   publisher: decodeURIComponent(publisher.name),
    //   date: new Date(),
    // };

    try {
      // Send the data as JSON to the server using axios
      await axios
        .post("http://localhost:8080/agencies/add", postObject)
        .then((res) => {
          console.log("Server response:", res.data.status);
          // setData(res.data.allNews);
          if (res.data.status === "success") {
            setMessage("News added successfully");
            setData(res.data.allNews);
          } else {
            setMessage("news already added");
          }
          setShowPopup(true);
        });

      // Clear form after successful submission
      setPostTitle("");
      setPostContent("");
      setSelectedImage(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error here (e.g., display an error message to the user)
    }
  };

  return (
    <>
      {" "}
      {showPopup && (
        <div className="popup">
          <h5>{message}</h5>
          <button onClick={() => setShowPopup(false)}>Ok</button>
        </div>
      )}
      <form className="create-post-Field-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            العنوان:
          </label>
          <input
            type="text"
            className="form-control"
            id="postTitle"
            value={postTitle}
            onChange={handlePostTitleChange}
            placeholder="اكتب العنوان هنا"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">
            أنشئ خبرًا جديدًا
          </label>
          <textarea
            className="form-control"
            id="postContent"
            rows="3"
            value={postContent}
            onChange={handlePostContentChange}
            placeholder="اكتب هنا"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            التصنيف:
          </label>
          <select
            className="form-select"
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="breaking">breaking</option>
            <option value="word">word</option>
            <option value="world">world</option>
            <option value="economy">economy</option>
            <option value="health">health</option>
            <option value="sport">sport</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="postImage" className="form-label">
            اختر الصورة:
          </label>
          <input
            type="file"
            className="form-control"
            id="postImage"
            onChange={handleImageChange}
            accept="image/*"
            capture="environment"
          />
        </div>
        <button type="submit" className="publish-btn py-1 px-4">
          نشر
        </button>
      </form>
    </>
  );
};

export default CreatePostField;
