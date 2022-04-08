import "./style.css";

/**
 * 按钮组件
 */
function Button({ children, type = "primary", onClick }) {
  return (
    <button className={`sh-button sh-button_${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
