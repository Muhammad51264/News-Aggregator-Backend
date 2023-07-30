import React from "react";
import "../assets/Category.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewCard from "../component/NewCard";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AllNews } from "../newsData";
import "../assets/index.css";

const Category = () => {
  const params = useParams();
  const props = params.type;
  const filteredObjectsSport = AllNews.filter((obj) => obj.type === "sport");
  const filteredObjectsEconomy = AllNews.filter(
    (obj) => obj.type === "economy"
  );
  const filteredObjectsBreaking = AllNews.filter(
    (obj) => obj.type === "breaking"
  );
  const filteredObjectsWorld = AllNews.filter((obj) => obj.type === "world");
  const filteredObjectsHealth = AllNews.filter((obj) => obj.type === "health");

  return (
    <Container>
      <Row>
        {props === "sport" && (
          <>
            <p
              className="category-title mx-auto mt-5 p-2 text-white"
              style={{ backgroundColor: "#ff8d00" }}
            >
              أخبار الرياضة
            </p>
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsSport.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}

        {props === "economy" && (
          <>
            <p
              className="category-title mx-auto mt-5 p-2 text-light"
              style={{ backgroundColor: "#17c8bd" }}
            >
              أخبار الاقتصاد
            </p>
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsEconomy.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}
        {props === "breaking" && (
          <>
            <p
              className="category-title mx-auto mt-5 p-2 text-white"
              style={{ backgroundColor: "#FF0000" }}
            >
              عاجل
            </p>
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsBreaking.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}

        {props === "world" && (
          <>
            <p
              className="category-title mx-auto mt-5 p-2 text-white"
              style={{ backgroundColor: "#9933CC" }}
            >
              أخبار العالم
            </p>
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsWorld.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}

        {props === "health" && (
          <>
            <p
              className="category-title mx-auto mt-5 p-2 text-white"
              style={{ backgroundColor: "#3366CC" }}
            >
              أخبار الصحة
            </p>
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsHealth.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}
      </Row>

      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <h5 className="category-more my-4 ">المزيد</h5>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center gap-4 my-5">
        {AllNews.map((newsItem) => {
          return <NewCard data={newsItem} />;
        })}
      </Row>
    </Container>
  );
};

export default Category;
