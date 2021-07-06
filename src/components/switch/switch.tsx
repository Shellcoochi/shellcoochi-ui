import * as React from "react";
import classNames from "classnames";

import styles from "./style/index.module.less";
export interface SwitchProps {
  checked?: boolean;
  checkedChildren?: string;
  unCheckedChildren?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface SwitchState {
  checked?: boolean;
}
class Switch extends React.Component<SwitchProps, SwitchState> {
  constructor(props: SwitchProps) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
  }
  handleSwitchChange = () => {
    const { checked } = this.state;
    this.setState({
      checked: !checked,
    });
  };
  render() {
    const { checked } = this.state;
    const { checkedChildren, unCheckedChildren } = this.props;
    const classes = classNames(
      styles[`scc-switch`],
      styles[`scc-switch-${checked ? "checked" : "unchecked"}`]
    );
    return (
      <button onClick={this.handleSwitchChange} className={classes}>
        <span>{checked ? checkedChildren : unCheckedChildren}</span>
      </button>
    );
  }
}

export default Switch;
