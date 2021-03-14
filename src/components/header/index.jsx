import React from "react";
import { Link } from 'react-router-dom';
import "./index.less";

const Header = () => {
  return <header className="header">
      <ul className='header-list'>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/content'>github</Link></li>
          <li>作品</li>
          <li>总结反思</li>
      </ul>
  </header>;
};

export default Header;
