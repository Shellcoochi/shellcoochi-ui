import * as React from "react";
import Checkbox from "../../components/checkbox";
import Breadcrumb from "../../components/breadcrumb";

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];

const CheckboxDemo = () => (
  <div style={{ padding: "50px" }}>
    <h2>checkbox</h2>
    <Breadcrumb>
      <Breadcrumb.Item separator="/" href="/">
        home
      </Breadcrumb.Item>
      <Breadcrumb.Item separator="/">checkbox</Breadcrumb.Item>
    </Breadcrumb>
    <Checkbox
      onChange={(e) => {
        console.log("checked:", e.target.checked);
      }}
    >
      basic
    </Checkbox>
    <Checkbox disabled>disabled</Checkbox>
    <br />
    <Checkbox.Group options={options} />
  </div>
);

export default CheckboxDemo;
