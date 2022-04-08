/**
 * 应用程序组件
 */

import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import Products from "../Products";
import Keywords from "../Keywords";
import "./style.css";

let data;

/**
 * 请求数据
 */
const requestData = (callback) => {
  axios
    .get("/data.json")
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

function Application() {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    requestData((_data) => {
      data = _data;
      setProducts(data);
      setKeywordsByData();
    });
  }, []);

  const searchProducts = (keyword) => {
    keyword = keyword.trim();

    if (data) {
      setProductsByKeyword(keyword);
    } else {
      requestData((_data) => {
        data = _data;
        setProductsByKeyword(keyword);
      });
    }
  };

  const setProductsByKeyword = (keyword) => {
    const products = data.filter(({ name, keywords }) => {
      return name.includes(keyword) || keywords.includes(keyword);
    });
    setProducts(products);
  };

  const setKeywordsByData = () => {
    let keywords = data.reduce((arr, { keywords }) => {
      arr.push(...keywords);
      return arr;
    }, []);
    keywords = [...new Set(keywords)];
    setKeywords(keywords);
  };

  return (
    <div className="sh-application">
      <h1>上海团购入口</h1>
      <SearchBar
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        onSearch={searchProducts}
      />
      <Keywords
        value={keywords}
        onClick={(keyword) => {
          setValue(keyword);
          searchProducts(keyword);
        }}
      />
      <Products value={products} />
    </div>
  );
}

export default Application;
