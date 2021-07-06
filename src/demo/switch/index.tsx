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
    <Switch checkedChildren={"switch-on"} unCheckedChildren={"switch-off"} />
    <Switch disabled={true} checkedChildren={"switch-on"} unCheckedChildren={"switch-off"} />
  </div>
);

export default SwitchDemo;
