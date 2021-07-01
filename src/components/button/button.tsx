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
class Button extends React.Component<BaseButtonProps, {}> {
  render() {
    const {
      size = "default",
      type = "default",
      disabled,
      onClick,
    } = this.props;
    const classes = classNames(styles["scc-btn"], styles[`scc-${type}-btn`], {
      [styles[`scc-btn-${size}`]]: size !== "default",
      [styles["scc-btn-disabled"]]: disabled,
    });

    return (
      <button onClick={onClick} className={classes}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
