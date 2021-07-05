import * as React from "react";
import classNames from "classnames";
import BreadcrumbItem from "./breadcrumbItem";

import styles from "./style/index.module.less";
import { string } from "prop-types";

declare type BreadcrumbItemType = typeof BreadcrumbItem;
export interface BreadcrumbProps {
  children?: React.ReactNode;
}
class Breadcrumb extends React.Component<BreadcrumbProps, any> {
  static Item = BreadcrumbItem;

  // getItems = (children: React.ReactNode): Array<React.ReactNode> => {
  //   const items: Array<React.ReactNode> = [];
  //   React.Children.forEach(children, (item, i) => {
  //     items.push(item);
  //   });
  //   return items;
  // };
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default Breadcrumb;
