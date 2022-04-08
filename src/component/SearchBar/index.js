import Button from "../Button";
import "./style.css";

/**
 * 搜索框
 */
function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="sh-search-bar">
      <input
        className="sh-input"
        value={value}
        placeholder="请输入关键字"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          onSearch(value);
        }}
      >
        搜索
      </Button>
    </div>
  );
}

export default SearchBar;
