import React, { useState, useEffect } from "react";
import { Button } from "antd";
import axios from "axios";
import "./index.less";

const Blog = () => {
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:7001/article/list/get").then(({ data }) => {
      if (data.code === 200) {
        setArticleList(data.data);
      }
    });
  }, []);
  const location = (id) => {
    window.location.hash = `/content?id=${id}`;
  };
  return (
    <div className="blog-wrapper">
      <div className="image-item">
        <div className="nav-title">
          <div className="image"></div>
          <p className="nav-text">hy的博客</p>
          <p>行稳致远，行稳致远，行稳致远，行稳致远</p>
        </div>
      </div>
      <div className="article">
        {articleList &&
          articleList.map((art) => {
            return (
              <div className="article-item" key={art.id}>
                <div className="article-title">{art.title}</div>
                <p className="article-content">{art.content}</p>
                <div className="operate">
                  <Button
                    onClick={() => {
                      location(art.id);
                    }}
                  >
                    阅读全文
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
