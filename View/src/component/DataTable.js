import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const agencyID = "64c79b42da934de8cdb4e53d";

        const response = await axios.get(
          `http://localhost:8080/news/${agencyID}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNewsData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.post(`http://localhost:8080/agencies/delete/${id}`);
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting news item:", error);
    }
  };

  const handleEdit = (id) => {
    console.log("Edit item with ID:", id);
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>الرقم</th>
          <th>الخبر</th>
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
            <td>{item.data}</td>
            <td>
              <Button variant="warning" onClick={() => handleEdit(item._id)}>
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
  );
};

export default DataTable;
