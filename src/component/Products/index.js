import ExpandImage from "../ExpandImage";
import "./style.css";

function Product({ name, detail, price, unit, delivery, image, contacts }) {
  return (
    <li className="sh-product">
      <ExpandImage src={image} />
      <div className="sh-product__content">
        <h3 className="sh-product__name">{name}</h3>
        {detail && <p className="sh-product__detail">{detail}</p>}
        {!!price && (
          <div className="sh-product__price">
            <span className="sh-product__number">{price}</span>元/{unit}
          </div>
        )}
        {!!delivery && (
          <div className="sh-product__delivery">
            <span className="sh-product__number">{delivery}</span>
            {unit}起送
          </div>
        )}

        {Array.isArray(contacts) && contacts.length > 0 && (
          <>
            <div className="sh-hr"></div>
            <ul className="sh-product__contacts">
              {contacts.map(({ name, phone }, index) => (
                <li key={index} className="sh-product__contact">
                  <div>{name}</div>
                  <a href={`tel:${phone}`}>{phone}</a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </li>
  );
}

function Products({ value }) {
  return (
    <ul className="sh-products">
      {value.map((product, index) => (
        <Product key={index} {...product}></Product>
      ))}
    </ul>
  );
}

export default Products;
