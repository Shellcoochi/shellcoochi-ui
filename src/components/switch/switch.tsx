import * as React from "react";
import classNames from "classnames";

import styles from "./style/index.module.less";
export interface SwitchProps {
  checked?: boolean;
  checkedChildren?: string;
  unCheckedChildren?: string;
  disabled?: boolean;
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
    const { disabled } = this.props;
    if (disabled) {
      return false;
    }
    this.setState({
      checked: !checked,
    });
  };
  render() {
    const { checked } = this.state;
    const { checkedChildren, unCheckedChildren, disabled } = this.props;
    const classes = classNames(styles[`scc-switch`], {
      [styles[`scc-switch-checked`]]: checked,
      [styles[`scc-switch-unchecked`]]: !checked,
      [styles[`scc-switch-disabled`]]: disabled,
    });
    return (
      <button onClick={this.handleSwitchChange} className={classes}>
        <span>{checked ? checkedChildren : unCheckedChildren}</span>
      </button>
    );
  }
}

export default Switch;
