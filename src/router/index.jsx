import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from 'antd';
import Blog from "@/pages/blog";
import Content from "@/pages/content";
import Header from "@/components/header";
import './index.less';

export default () => (
  <HashRouter>
    <Switch>
      <Layout className='wrapper'>
        <Header></Header>
        <Layout>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/index-page"></Redirect>}
          ></Route>
          <Route exact path="/index-page" component={Blog}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/content" component={Content}></Route>
        </Layout> 
      </Layout> 
    </Switch>
  </HashRouter>
);
