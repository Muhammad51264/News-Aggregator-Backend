import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CreatePostField from "../component/CreatePostField";
import DataTable from "../component/DataTable";
import "../assets/AgencyDashboard.css";
import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};
const AgencyDashboard = () => {
const [data,setData]=useState([]);
  return (
    <DataContext.Provider value={{data,setData}}>
    <Container>
      <Row className="agency-dashboard mt-5">
        <Col className="d-flex flex-column gap-5">
          <p
            className="category-title mx-auto p-2 text-white w-100"
            style={{ backgroundColor: "#EF4747", color: "#fff" }}
          >
            لوحة التحكم{" "}
          </p>
          <CreatePostField />
          <DataTable />
        </Col>
      </Row>
    </Container>
    </DataContext.Provider>
  );
};
export default AgencyDashboard;