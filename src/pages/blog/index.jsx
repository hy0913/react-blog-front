import React from "react";
import { Button } from "antd";
import "./index.less";

const Blog = () => {
  const location = () => {
    window.location.hash = "/content";
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
        <div className="article-item">
          <div className="article-title">这是标题标题标题</div>
          <p className="article-content">
            这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容
          </p>
          <div className="operate">
            <Button onClick={location}>阅读全文</Button>
          </div>
        </div>
        <div className="article-item">
          <div className="article-title">这是标题标题标题</div>
          <p className="article-content">
            这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容
          </p>
          <div className="operate">
            <Button>阅读全文</Button>
          </div>
        </div>
        <div className="article-item">
          <div className="article-title">这是标题标题标题</div>
          <p className="article-content">
            这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容
          </p>
          <div className="operate">
            <Button>阅读全文</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
