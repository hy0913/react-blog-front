import React, { useState, useEffect } from "react";
import { getUrlParam } from "@/utils";
import axios from "axios";
import "./index.less";

const Content = () => {
  let [articleObj, setObject] = useState({});
  const id = getUrlParam('id');
  useEffect(() => {
    axios.post("http://127.0.0.1:7001/article/id",{
        id
    }).then(({ data }) => {
      if (data.code === 200) {
        setObject(data.data);
      }
    });
  }, []);

  const { title,content} = articleObj;
  return (
    <div className="content-article">
      <div className="article-item">
        <div className="article-title">{title}</div>
        <p className="article-content">{content}</p>
      </div>
    </div>
  );
};

export default Content;
