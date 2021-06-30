import * as React from "react";
import classNames from "classnames";

import styles from "./index.module.less";

declare const ButtonTypes: ["default", "primary", "ghost"];
declare type ButtonType = typeof ButtonTypes[number];
export interface BaseButtonProps {
  children?: React.ReactNode;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
class Button extends React.Component<BaseButtonProps, {}> {
  render() {
    const { disabled, onClick } = this.props;
    const classes = classNames(styles["scc-default-btn"], {
      [styles["disabled"]]: disabled,
    });

    return (
      <button onClick={onClick} className={classes}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
