import React, { useState, useEffect } from "react";
import { useNewsContext } from "../pages/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import NewCard from "../component/NewCard";
import AddsBanner from "../component/AddsBanner";

const AgencyNews = () => {
  const { id } = useParams();
  const [allAgencies, setAllAgencies] = useState([]);
  const { allNews, setAllNews } = useNewsContext();
  const [agencyNews, setAgencyNews] = useState([]);
  const [agencyName, setAgencyName] = useState("");

  useEffect(() => {
    // Fetch all news items from the backend API
    axios
      .get("http://localhost:8080/news/allNews")
      .then((response) => {
        setAllNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching all news:", error);
      });
    // Fetch all agencies from the backend API
    axios
      .get("http://localhost:8080/agencies")
      .then((response) => {
        setAllAgencies(response.data);

        // Find the clicked agency once the agencies data is fetched
        const clickedAgency = response.data.find((e) => e._id === id); // Use find instead of filter
        if (clickedAgency) {
          setAgencyName(clickedAgency.publisher);
        }
      })
      .catch((error) => {
        console.error("Error fetching all agencies:", error);
      });
  }, [id, setAllNews]);

  useEffect(() => {
    // Filter agency news once agencyName is set
    if (agencyName && allNews.length > 0) {
      setAgencyNews(allNews.filter((e) => e.publisher === agencyName));
    }
  }, [agencyName, allNews]);

  // This console.log will show the updated agencyNews
  console.log(agencyNews);

  return (
    <Container>
      <Row>
        <p
          className="category-title mx-auto mt-5 p-2 text-white"
          style={{ backgroundColor: "#ff8d00" }}
        >
          أخبار {agencyName}
        </p>

        <AddsBanner />

        <Row className="d-flex justify-content-center gap-4 my-5">
          {agencyNews
            .slice()
            .reverse()
            .map((obj) => (
              <NewCard data={obj} key={obj.id} />
            ))}
        </Row>
      </Row>

      <Row>
        <Col className=" category-more d-flex align-items-center justify-content-center ">
          <h5 className="category-more my-4 "> المزيد</h5>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center gap-4 my-5">
        {allNews.map((newsItem) => {
          return <NewCard data={newsItem} />;
        })}
      </Row>
    </Container>
  );
};

export default AgencyNews;
