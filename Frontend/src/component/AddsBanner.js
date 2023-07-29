import Button from "react-bootstrap/Button";
import "../assets/index.css";

const AddsBanner = () => {
  return (
    <div className="banner">
      <div className="banner-body">
        <p className="text-light">استعرض مهاراتك في كرة القدم</p>
        <Button
          style={{
            backgroundColor: "orange",
            border: "none",
            borderRadius: "0",
          }}
        >
          سجل الآن
        </Button>
      </div>
    </div>
  );
};
export default AddsBanner;
