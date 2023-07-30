import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import "../assets/index.css";
const stories = [
  { id: 1, name: "خبرني", image: "images/dostor.jpg" },
  { id: 2, name: "خبرني", image: "images/al-rai-jordan.jpg" },
  { id: 3, name: "خبرني", image: "images/alanbaa.png" },
  { id: 4, name: "خبرني", image: "images/roya.jpg" },
  { id: 5, name: "خبرني", image: "images/khaberni.jpg" },
  { id: 6, name: "خبرني", image: "images/ammon.png" },

  { id: 7, name: "خبرني", image: "images/alanbaa.png" },
  { id: 8, name: "خبرني", image: "images/alanbaa.png" },
  { id: 9, name: "خبرني", image: "images/alanbaa.png" },
  { id: 10, name: "خبرني", image: "images/alanbaa.png" },
  { id: 11, name: "خبرني", image: "images/alanbaa.png" },
  { id: 12, name: "خبرني", image: "images/alanbaa.png" },
  { id: 13, name: "خبرني", image: "images/alanbaa.png" },
];

function Story() {
  return (
    <div className="story-row ">
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.image} alt={story.name} />
          <span className="story-name">{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Story;
