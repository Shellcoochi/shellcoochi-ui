import * as React from "react";
import classNames from "classnames";
import BreadcrumbItem from "./breadcrumbItem";

import styles from "./style/index.module.less";
import { string } from "prop-types";

export interface BreadcrumbProps {
  children?: BreadcrumbItem;
}
class Breadcrumb extends React.Component<BreadcrumbProps, any> {
  static Item: BreadcrumbItem;

  getItems = (children: BreadcrumbItem): Array<React.ReactNode> => {
    const items: Array<React.ReactNode> = [];
    React.Children.forEach(children, (item,i) => {
      const { props } = item;
      items.push(<BreadcrumbItem key={i} {...props} />);
    });
    return items;
  };
  render() {
    const { children } = this.props;
    return <div>{this.getItems(children)}</div>;
  }
}

export default Breadcrumb;
