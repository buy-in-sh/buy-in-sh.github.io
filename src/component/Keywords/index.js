import Button from "../Button";
import "./style.css";

/**
 * 搜索关键词
 */
function Keywords({ value, onClick }) {
  return (
    <div className="sh-keywords">
      {value.map((keyword, index) => (
        <Button
          key={index}
          type="small"
          onClick={() => {
            onClick(keyword);
          }}
        >
          {keyword}
        </Button>
      ))}
    </div>
  );
}

export default Keywords;
