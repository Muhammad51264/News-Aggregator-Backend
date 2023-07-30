import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../assets/AgencyDashboard.css";

const CreatePostField = () => {
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can submit the post content and the selected image to your backend or handle the post creation logic.
    console.log("Post Content:", postContent);
    console.log("Selected Image:", selectedImage);

    // Clear form after submission
    setPostContent("");
    setSelectedImage(null);
  };

  return (
    <form className="create-post-Field-form" onSubmit={handleSubmit}>
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
  );
};

export default CreatePostField;
