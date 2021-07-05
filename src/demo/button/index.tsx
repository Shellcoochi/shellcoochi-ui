import * as React from "react";
import Button from "../../components/button";
import Breadcrumb from "../../components/breadcrumb";

const ButtonDemo = () => (
  <div style={{ padding: "50px" }}>
    <h2>BUTTON</h2>
    <Breadcrumb>
      <Breadcrumb.Item separator="/" href="/">
        home
      </Breadcrumb.Item>
      <Breadcrumb.Item separator="/">button</Breadcrumb.Item>
    </Breadcrumb>
    <Button>default</Button>
    <Button size={"small"}>small</Button>
    <Button size={"large"}>large</Button>
    <Button disabled>disabled</Button>
    <Button type={"dashed"}>dashed</Button>
  </div>
);

export default ButtonDemo;
