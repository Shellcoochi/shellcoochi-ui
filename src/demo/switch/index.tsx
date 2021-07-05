import * as React from "react";
import Switch from "../../components/switch";
import Breadcrumb from "../../components/breadcrumb";

const SwitchDemo = () => (
  <div style={{ padding: "50px" }}>
    <h2>switch</h2>
    <Breadcrumb>
      <Breadcrumb.Item separator="/" href="/">
        home
      </Breadcrumb.Item>
      <Breadcrumb.Item separator="/">switch</Breadcrumb.Item>
    </Breadcrumb>
    <Switch/>
  </div>
);

export default SwitchDemo;
