import Button from "react-bootstrap/Button";
import "../assets/index.css";

const AddsBanner = () => {
  return (
    <div className="banner container">
      <div className="banner-body p-4">
        <p className="text-light">
          لكل محبّي التكنولوجيا.. لشبابنا وشاباتنا المبتكرين، فرصتكم للمشاركة في
          5G الهاكاثون من Orange Innovation Hub لعرض ابتكاراتكم وإبداعاتكم!
        </p>
        <Button
          style={{
            backgroundColor: "#f07c00",
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
