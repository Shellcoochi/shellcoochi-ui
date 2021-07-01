import * as React from "react";
import classNames from "classnames";
import BreadcrumbItem from "./breadcrumbItem";

import styles from "./style/index.module.less";
import { string } from "prop-types";

export interface BreadcrumbProps {
  children?: React.ReactNode;
}

class Breadcrumb extends React.Component<BreadcrumbProps, any> {
  static Item: typeof BreadcrumbItem;
  getItems = (children: React.ReactNode): Array<React.ReactNode> => {
    const list = Array(children);
    const items: Array<React.ReactNode> = [];
    list.forEach((item) => {
      if (item) {
        items.push(<BreadcrumbItem>asdf</BreadcrumbItem>);
      }
    });
    return items;
  };
  render() {
    const { children } = this.props;
    return <div>{this.getItems(children)}</div>;
  }
}

export default Breadcrumb;
