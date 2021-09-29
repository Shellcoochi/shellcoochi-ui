import * as React from "react";
import classNames from "classnames";
import Checkbox from "./checkbox";

import styles from "./style/index.module.less";

export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface CheckboxChangeEvent {
  target: { checked: boolean };
}

export interface GroupProps {
  disabled?: boolean;
  defaultValue?: string[];
  value?: string[];
  name?: string;
  options?: string[] | Option[];
  onChange?: (e: CheckboxChangeEvent) => void;
}

class Group extends React.Component<GroupProps> {
  getOptions = (options: string[] | Option[]) =>
    options.map((option) => {
      if (typeof option === "string") {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });

  render() {
    const {
      disabled,
      name,
      onChange,
      options = [],
      defaultValue,
      value,
    } = this.props;
    const labelClasses = classNames(styles["scc-checkbox-wrapper"], {
      [styles["scc-checkbox-wrapper-disabled"]]: disabled,
    });
    const inputClasses = classNames(styles["scc-checkbox"], {
      [styles["scc-checkbox-disabled"]]: disabled,
    });
    return (
      <>
        {this.getOptions(options).map(({ label, value, disabled }) => (
          <Checkbox key={value}>{label}</Checkbox>
        ))}
      </>
    );
  }
}

export default Group;
