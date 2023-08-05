import { React, useState, useEffect } from "react";
import AddsBanner from "../component/AddsBanner";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { createContext, useContext } from "react";
const AgenciesContext = createContext();

export const useAgenciesContext = () => {
  return useContext(AgenciesContext);
};

const Agencies = ({ children }) => {
  //   const newsAgencies = [
  //     {
  //       name: "وكالة عمون الإخبارية",
  //       image: process.env.PUBLIC_URL + "/images/al-rai-jordan.jpg",
  //     },

  //     {
  //       name: " جريدة الغد ",
  //       image: process.env.PUBLIC_URL + "/images/alghad.png",
  //     },
  //     {
  //       name: " التلفزيون الأردني  ",
  //       image: process.env.PUBLIC_URL + "/images/alordoni.jpg",
  //     },
  //     {
  //       name: "قناة رؤيا   ",
  //       image: process.env.PUBLIC_URL + "/images/roya.svg",
  //     },
  //     {
  //       name: "  وكالة عمون الإخبارية",
  //       image: process.env.PUBLIC_URL + "/images/ammon.png",
  //     },

  //     {
  //       name: " خبرني ",
  //       image: process.env.PUBLIC_URL + "/images/khaberni.jpg",
  //     },
  //     {
  //       name: " صحيفة الدستور",
  //       image: process.env.PUBLIC_URL + "/images/dostor.jpg",
  //     },
  //     {
  //       name: " بلكي",
  //       image: process.env.PUBLIC_URL + "/images/balki.jpg",
  //     },
  //   ];
  const [allAgencies, setAllAgencies] = useState([]);
  useEffect(() => {
    // Fetch all news items from the backend API
    axios
      .get("http://localhost:8080/agencies")
      .then((response) => {
        setAllAgencies(response.data);
        console.log(allAgencies);
      })
      .catch((error) => {
        console.error("Error fetching all news:", error);
      });
  }, []);
  return (
    <AgenciesContext.Provider value={(allAgencies, setAllAgencies)}>
      <Container className="d-flex flex-column justify-content-center align-items-center ">
        <p
          className="category-title mx-auto mt-5 p-2 text-white w-100"
          style={{ backgroundColor: "#179bd9" }}
        >
          الوكالات الإخبارية
        </p>

        <Row className="d-flex  justify-content-between align-items-center gap-4 mb-3">
          {allAgencies
            .slice()
            .reverse()
            .map((newsAgency) => (
              <Col className="text-center d-flex justify-content-center align-items-center">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/agencies/${newsAgency._id}`}
                >
                  <Card className="mb-5" style={{ width: "15rem" }}>
                    <Card.Img
                      variant="top"
                      src={newsAgency.img}
                      style={{ height: "10rem" }}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {newsAgency.publisher}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </AgenciesContext.Provider>
  );
};
export default Agencies;
