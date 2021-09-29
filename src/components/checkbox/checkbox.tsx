import * as React from "react";
import classNames from "classnames";
import Group from "./group";

import styles from "./style/index.module.less";

export interface CheckboxProps {
  disabled?: boolean;
  children?: React.ReactNode;
  onChange?: (e: CheckboxChangeEvent) => void;
}

export interface CheckboxChangeEvent {
  target: { checked: boolean };
}

class Checkbox extends React.Component<CheckboxProps> {
  static Group = Group;
  render() {
    const { disabled, children, onChange } = this.props;
    const labelClasses = classNames(styles["scc-checkbox-wrapper"], {
      [styles["scc-checkbox-wrapper-disabled"]]: disabled,
    });
    const inputClasses = classNames(styles["scc-checkbox"], {
      [styles["scc-checkbox-disabled"]]: disabled,
    });
    return (
      <>
        <label className={labelClasses}>
          <input
            className={inputClasses}
            disabled={disabled}
            type="checkbox"
            onChange={onChange}
          />
          <span>{children}</span>
        </label>
      </>
    );
  }
}

export default Checkbox;
