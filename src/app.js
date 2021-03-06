import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ButtonDemo from "./demo/button";
import BreadcrumbDemo from "./demo/breadcrumb";
import SwitchDemo from "./demo/switch";
import CheckboxDemo from "./demo/checkbox";

import styles from "./app.module.less";

const Main = (props) => (
  <div>
    <h1>App</h1>
    <ul>
      <li>
        <Link to="/about">About Jenkins</Link>
      </li>
      <li>
        <Link to="/inbox">Inbox</Link>
      </li>
      <li>
        <Link to="/button">button</Link>
      </li>
      <li>
        <Link to="/breadcrumb">breadcrumb</Link>
      </li>
      <li>
        <Link to="/switch">switch</Link>
      </li>
      <li>
        <Link to="/checkbox">checkbox</Link>
      </li>
    </ul>
    {props.children}
  </div>
);

const About = () => <h3 className={styles.about}>About</h3>;

const Inbox = (props) => (
  <div>
    <h2>Inbox</h2>
    {props.children || "Welcome to your Inbox"}
  </div>
);

const ErrorPage = () => (
  <div>
    <h2>页面找不到啦!!</h2>
  </div>
);

const Message = (props) => <h3>Message {props.params.id}</h3>;

const App = () => {
  console.log("console.log");
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/button" component={ButtonDemo} />
        <Route exact path="/breadcrumb" component={BreadcrumbDemo} />
        <Route exact path="/switch" component={SwitchDemo} />
        <Route exact path="/checkbox" component={CheckboxDemo} />
        <Route exact path="/about" component={About} />
        <Route exact path="/inbox" component={Inbox} />
        <Route component={ErrorPage}></Route>
      </Switch>
    </Router>
  );
};

export default App;
