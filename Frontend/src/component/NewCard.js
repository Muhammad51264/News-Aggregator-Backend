import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NewDetails from "../pages/NewDetails";
import "../assets/index.css";

function NewCard({ data }) {
  return (
    <Card className="" style={{ width: "18rem", border: "none" }}>
      <Card.Img
        style={{ height: "10rem", borderRadius: "0" }}
        variant="top"
        src={data.image}
      />
      <Card.Body>
        <Card.Title>
          <Link
            to={`/Details/${data.id}`}
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            {data.title}
          </Link>
        </Card.Title>

        <div className="d-flex justify-content-between">
          <Card.Text> {data.publisher}</Card.Text>
          <Card.Text>
            {data.commentNumber} <FontAwesomeIcon icon={faComment} />
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewCard;
