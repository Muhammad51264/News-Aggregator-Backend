import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import {useCookies} from "react-cookie"


const DataTable = () => {
  const [data, setData] = useState([]);
  const [cookies, setCookies] = useCookies("access_token");
  useEffect(() => {
    const fetchToken = async ()=>{
      try{
        const token = await axios.post("http://localhost:8080/agencies/token",{token: cookies.access_token});
        console.log(cookies.access_token);
        let res = await token.data;
        console.log(res.id);

        // const agencyID = id;
        console.log(`http://localhost:8080/news/${res.id}`)
        const response = await axios.get(
        `http://localhost:8080/news/${res.id}`
        );
        setData(response.data);
      }catch(e){
        console.log(e)
    }}
    if (!cookies.access_token){
        console.log("not token");
    }else{
      fetchToken();
    }

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