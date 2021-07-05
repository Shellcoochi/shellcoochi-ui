import * as React from "react";
import Breadcrumb from "../../components/breadcrumb";
const BreadcrumbDemo = () => (
  <div style={{ padding: "50px" }}>
    <h2>breadcrumb</h2>
    <Breadcrumb>
      <Breadcrumb.Item separator="/" href="/">
        home
      </Breadcrumb.Item>
      <Breadcrumb.Item separator="/">breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

export default BreadcrumbDemo;
