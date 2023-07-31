import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

const DataTable = () => {
  // Sample data for the table (you can replace this with your data)
  const initialData = [
    {
      id: 1,
      name: "وزير الخارجية الأمريكي أنتوني بلينكن يلتقي الرئيس الصيني شي جين بينغ الإثنين",
      publishDate: 25 / 7 / 2023,
    },
    {
      id: 2,
      name: "وزير الخارجية الأمريكي أنتوني بلينكن يلتقي الرئيس الصيني شي جين بينغ الإثنين",
      publishDate: 25 - 7 - 2023,
    },
    // Add more data items here
  ];
  const [data, setData] = useState(initialData);

  const handleEdit = (id) => {
    // Handle the edit functionality here (e.g., open a modal, form, etc.)
    console.log("Edit item with ID:", id);
  };

  const handleDelete = (id) => {
    // Handle the delete functionality here (e.g., remove item from the data array)
    setData((prevData) => prevData.filter((item) => item.id !== id));
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
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.publishDate}</td>
            <td>
              <Button variant="warning" onClick={() => handleEdit(item.id)}>
                تعديل
              </Button>
            </td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>
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
