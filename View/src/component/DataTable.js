import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./../assets/popup.css";
import {useDataContext} from "../pages/AgencyDashboard"

const categoryOptions = [
  "breaking",
  "word",
  "world",
  "economy",
  "health",
  "sport",
  "other",
];

const DataTable = () => {
  const {data, setData} =useDataContext();
  // const [data, setData] = useState([]);
  const [cookies] = useCookies("access_token");
  const [publisher,setPublisher] = useCookies("name");
  const [showPopup, setShowPopup] = useState(false);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateCategory, setUpdateCategory] = useState("");
  const [updateDesc, setUpdateDesc] = useState("");
  const [updateImg, setUpdateImg] = useState("");
  const [updateId, setUpdateId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!cookies.access_token) {
          console.log("No token");
          return;
        }

        const token = await axios.post("http://localhost:8080/agencies/token", {
          token: cookies.access_token,
        });
        const res = await token.data;
        // const userName= res.username;
        // console.log(res.username)
        setPublisher("name",res.username);
        const response = await axios.get(
          `http://localhost:8080/news/${res.id}`
        );
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.post(`http://localhost:8080/agencies/delete/${id}`);
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting news item:", error);
    }
  };

  const handleEdit = (item) => {
    console.log("Edit item with ID:", item._id);
    setUpdateId(item._id);
    setUpdateTitle(item.title);
    setUpdateCategory(item.category);
    setUpdateDesc(item.desc);
    setUpdateImg(item.img);
    setShowPopup(true);
  };

  const updateData = async () => {
    try {
      if (!cookies.access_token) {
        console.log("No token");
        return;
      }
      const updatePayload = new FormData();
      updatePayload.append("_id", updateId);
      updatePayload.append("category", updateCategory);
      updatePayload.append("title", updateTitle);
      updatePayload.append("desc", updateDesc);
      updatePayload.append("img" ,selectedImage);
      updatePayload.append("date", new Date().toISOString());
      // const updatePayload = {
      //   _id: updateId,
      //   category: updateCategory,
      //   title: updateTitle,
      //   desc: updateDesc,
      //   img: updateImg,
      //   date: new Date().toISOString(), // Set the 'date' field with the current date
      // };

      let update =await axios.post(
        `http://localhost:8080/agencies/edit/${updateId}`,
        updatePayload
      );
      console.log(await update.data);
      const updatedData = data.map((item) =>
        item._id === updatePayload._id ? { ...item, ...updatePayload } : item
      );
      setData(updatedData);

      setShowPopup(false);
    } catch (error) {
      console.error("Error updating news item:", error);
    }
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    console.log(file);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>الرقم</th>
            <th>العنوان</th>
            <th>محتوى الخبر</th> {/* New column for description */}
            <th>التصنيف</th> {/* New column for category */}
            <th>تاريخ النشر</th>
            <th>تعديل</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.desc}</td> {/* Display description in the new column */}
              <td>{item.category}</td>{" "}
              {/* Display category in the new column */}
              <td>
                {item.date
                  ? new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </td>{" "}
              {/* Format the date if it exists, otherwise display an empty string */}
              <td>
                <Button variant="warning" onClick={() => handleEdit(item)}>
                  تعديل
                </Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                  حذف
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {showPopup && (
        <div className="popup">
          <h3>Update News</h3>
          <label>Title:</label>
          <input
            type="text"
            value={updateTitle}
            onChange={(e) => setUpdateTitle(e.target.value)}
          />
          <label>Category:</label>
          <select
            value={updateCategory}
            onChange={(e) => setUpdateCategory(e.target.value)}
          >
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label>Description:</label>
          <textarea
            value={updateDesc}
            onChange={(e) => setUpdateDesc(e.target.value)}
          />
          <label>Image:</label>
          <input
            required
            type="file"
            className="form-control"
            id="postImage"
            onChange={handleImageChange}
            accept="image/*"
            capture="environment"
          />
          <button onClick={updateData}>Submit</button>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
