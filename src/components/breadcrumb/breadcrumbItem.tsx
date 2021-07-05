import * as React from "react";
import classNames from "classnames";

import styles from "./style/index.module.less";

export interface BreadcrumbItemProps {
  separator?: React.ReactNode;
  children?: React.ReactNode;
}

class BreadcrumbItem extends React.Component<BreadcrumbItemProps, any> {
  render() {
    const { separator = "/", children } = this.props;
    return (
      <span>
        <span>{separator}</span>
        {children}
      </span>
    );
  }
}

export default BreadcrumbItem;
