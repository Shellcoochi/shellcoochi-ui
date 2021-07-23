import * as React from "react";
import Checkbox from "../../components/checkbox";
import Breadcrumb from "../../components/breadcrumb";

const CheckboxDemo = () => (
  <div style={{ padding: "50px" }}>
    <h2>checkbox</h2>
    <Breadcrumb>
      <Breadcrumb.Item separator="/" href="/">
        home
      </Breadcrumb.Item>
      <Breadcrumb.Item separator="/">checkbox</Breadcrumb.Item>
    </Breadcrumb>
    <Checkbox>basic</Checkbox>
    <Checkbox disabled>disabled</Checkbox>
  </div>
);

export default CheckboxDemo;
