import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import "../assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { AllNews } from "../newsData";

export default function Hero() {
  console.log(AllNews[28]);
  return (
    <div className="hero-container d-flex justify-content-center my-4 ">
      <Card
        className="hero-card-one"
        style={{
          borderRadius: "0",
          border: "none",
          color: "#fff",
        }}
      >
        <span
          className="px-3 py-1 mb-2 hero-headings-news-span "
          style={{ backgroundColor: "#EF4747" }}
        >
          الأخبار المثبتة
        </span>
        <Card.Body className="hero-card-body">
          <span
            className="px-3 py-1 mb-2 "
            style={{ backgroundColor: "#FF8D00" }}
          >
            رياضة
          </span>

          <Link
            to={`/Details/${AllNews[21].id}`}
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Card.Text>
              عامر حسين: الأهلي سيستمر في اللعب بعد نهاية الدوري.. وفيفا استفسر
              عن احفتال أفشة
            </Card.Text>
          </Link>
          <div className="hero-card-tail">
            <div>بواسطة : {AllNews[21].publisher} </div>
            <div>
              764 <FontAwesomeIcon icon={faComment} />
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card
        className="hero-card-two"
        style={{
          borderRadius: "0",
          border: "none",
          color: "#fff",
        }}
      >
        <Card.Body className="hero-card-body">
          <span
            className="px-3 py-1 mb-2 "
            style={{ backgroundColor: "#17C8BD" }}
          >
            إقتصاد
          </span>
          <Link
            to={`/Details/${AllNews[28].id}`}
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            <Card.Text>{AllNews[28].title}</Card.Text>
          </Link>
          <div className="hero-card-tail">
            <div>بواسطة: {AllNews[28].publisher}</div>
            <div>
              366 <FontAwesomeIcon icon={faComment} />
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card
        className="hero-card-three"
        style={{
          borderRadius: "0",
          border: "none",
          color: "#fff",
        }}
      >
        <Card.Body className="hero-card-body">
          <span
            className="px-3 py-1 mb-2 "
            style={{ backgroundColor: "#478AEF" }}
          >
            منوعات
          </span>
          <Link
            to={`/Details/${AllNews[46].id}`}
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            <Card.Text className="">{AllNews[46].title}</Card.Text>
          </Link>
          <div className="hero-card-tail">
            <div>بواسطة: {AllNews[46].publisher}</div>
            <div>
              1254 <FontAwesomeIcon icon={faComment} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
