import * as React from "react";
import classNames from "classnames";

import styles from "./index.module.less";

declare const ButtonTypes: ["default", "primary", "ghost"];
declare type ButtonType = typeof ButtonTypes[number];
export interface BaseButtonProps {
  children?: React.ReactNode;
  type?: ButtonType;
}
class Button extends React.Component<BaseButtonProps, {}> {
  render() {
    const classes = classNames(styles["scc-btn"]);

    return <button className={classes}>{this.props.children}</button>;
  }
}

export default Button;
