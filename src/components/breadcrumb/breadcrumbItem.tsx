import * as React from "react";
import classNames from "classnames";

import styles from "./style/index.module.less";

export interface BreadcrumbItemProps {
  separator?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
}

class BreadcrumbItem extends React.Component<BreadcrumbItemProps, any> {
  render() {
    const { separator = "/", children, href } = this.props;
    return (
      <span>
        <span>{separator}</span>
        {href ? <a href={href}>{children}</a> : children}
      </span>
    );
  }
}

export default BreadcrumbItem;
