import * as React from "react";
import classNames from "classnames";

import styles from "./style/index.module.less";

declare const ButtonTypes: ["default", "dashed", "primary", "ghost"];
declare type ButtonType = typeof ButtonTypes[number];
declare const ButtonSizes: ["small", "default", "large"];
declare type ButtonSize = typeof ButtonSizes[number];
export interface BaseButtonProps {
  children?: React.ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
class Switch extends React.Component<BaseButtonProps, {}> {
  render() {
    const classes = classNames(
      styles[`scc-switch`],
      styles[`scc-switch-unchecked`]
    );
    return <button className={classes}><span>switch</span></button>;
  }
}

export default Switch;
