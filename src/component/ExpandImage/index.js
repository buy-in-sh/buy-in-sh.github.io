/**
 * 支持展开的图片
 */

import { useState } from "react";
import Button from "../Button";
import "./style.css";

function ExpandImage({ src }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="sh-expand-image">
      <Button type="reverse" onClick={handleClick}>
        {expanded ? " 收起" : "详情"}
      </Button>
      <div
        className="sh-expand-image-wrapper"
        style={{ height: expanded ? "auto" : 160 }}
      >
        <img src={src} alt="包含该产品的图片" />
      </div>
    </div>
  );
}

export default ExpandImage;
