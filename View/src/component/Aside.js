import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Calendar from "./Calender";
import Weather from "./Weather";
import Container from "react-bootstrap/Container";
import "../assets/index.css";
import { useState, useEffect } from "react";
const newsAgencies = [
  {
    name: "وكالة عمون الإخبارية",
    image: process.env.PUBLIC_URL + "/images/al-rai-jordan.jpg",
  },
  {
    name: "وكالة الأنباء ",
    image: process.env.PUBLIC_URL + "/images/alanbaa.png",
  },
  {
    name: " جريدة الغد ",
    image: process.env.PUBLIC_URL + "/images/alghad.png",
  },
  {
    name: " التلفزيون الأردني  ",
    image: process.env.PUBLIC_URL + "/images/alordoni.jpg",
  },
  {
    name: "قناة رؤيا   ",
    image: process.env.PUBLIC_URL + "/images/roya.svg",
  },
  {
    name: "  وكالة عمون الإخبارية",
    image: process.env.PUBLIC_URL + "/images/ammon.png",
  },

  {
    name: " خبرني ",
    image: process.env.PUBLIC_URL + "/images/khaberni.jpg",
  },
  {
    name: " صحيفة الدستور",
    image: process.env.PUBLIC_URL + "/images/dostor.jpg",
  },
  {
    name: " بلكي",
    image: process.env.PUBLIC_URL + "/images/balki.jpg",
  },
];

const Aside = () => {
  //display block for Aside when the width greater than 992 and disappear when the width less than 992

  const [isViewportWideEnough, setIsViewportWideEnough] = useState(
    window.innerWidth > 992
  );
  useEffect(() => {
    const handleResize = () => {
      setIsViewportWideEnough(window.innerWidth > 992);
    };

    // Add debounced resize event listener
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 200); // Adjust the debounce delay as needed
    };

    window.addEventListener("resize", debouncedResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <>
      {isViewportWideEnough && (
        <Container className="aside-container d-flex flex-column gap-4 mt-3">
          <Row className="text-center d-flex mb-4">
            <Col
              className=" d-flex flex-column  justify-content-center align-items-center p-2"
              style={{ background: "#ff0000" }}
            >
              <i class="fa-brands fa-google" style={{ color: "white" }}></i>
              <span className="text-light">524</span>
            </Col>
            <Col
              className=" d-flex flex-column  justify-content-center align-items-center p-2"
              style={{ background: "#016cfe" }}
            >
              <i
                class="fa-brands fa-facebook-f "
                style={{ color: "white" }}
              ></i>
              <span className="text-light">654</span>
            </Col>
            <Col
              className="d-flex flex-column  justify-content-center align-items-center p-2"
              style={{ background: "#4cd4f2" }}
            >
              <i class="fa-brands fa-twitter " style={{ color: "white" }}></i>
              <span className="text-light">263</span>
            </Col>
            <Col
              className="d-flex flex-column  justify-content-center align-items-center p-2"
              style={{ background: "orange" }}
            >
              <i class="fa-solid fa-rss " style={{ color: "white" }}></i>
              <span className="text-light">345</span>
            </Col>
          </Row>
          <Row className="aside-news-agencies d-flex gap-4">
            {newsAgencies.map((newsAgency) => (
              <img src={newsAgency.image} alt={newsAgency.name} />
            ))}
            <a
              href="#"
              className="text-start text-decoration-none text-dark pointer"
            >
              المزيد
            </a>
          </Row>

          <Row>
            <Weather />
          </Row>

          <Row>
            <Calendar />
          </Row>
        </Container>
      )}
    </>
  );
};

export default Aside;
