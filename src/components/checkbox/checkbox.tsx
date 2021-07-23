import * as React from "react";
import classNames from "classnames";

import styles from "./style/index.module.less";

export interface CheckboxProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

class Checkbox extends React.Component<CheckboxProps> {
  render() {
    const { disabled, children } = this.props;
    const labelClasses = classNames(styles["scc-checkbox-wrapper"], {
      [styles["scc-checkbox-wrapper-disabled"]]: disabled,
    });
    const inputClasses = classNames(styles["scc-checkbox"], {
      [styles["scc-checkbox-disabled"]]: disabled,
    });
    return (
      <>
        <label className={labelClasses}>
          <input className={inputClasses} disabled={disabled} type="checkbox" />
          <span>{children}</span>
        </label>
      </>
    );
  }
}

export default Checkbox;
