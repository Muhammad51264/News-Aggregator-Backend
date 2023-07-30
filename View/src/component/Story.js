import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import "../assets/index.css";
import { AllNews } from "../newsData";
import { StoriesData } from "../StoriesData";

function Story() {
  return (
    <div className="story-row ">
      {StoriesData.map((e) => (
        <div className="story">
          <img src={e.image} alt="sf" />
          <span
            className="story-name text-dark "
            style={{ fontSize: "10px", fontWeight: "bold" }}
          >
            {e.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Story;
