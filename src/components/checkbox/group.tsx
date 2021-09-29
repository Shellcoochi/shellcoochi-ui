import * as React from "react";
import classNames from "classnames";
import Checkbox from "./checkbox";

import styles from "./style/index.module.less";
import { string } from "prop-types";

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
  onChange?: (e: string[]) => void;
}

export interface GroupState {
  checkedValues: string[];
}

class Group extends React.Component<GroupProps, GroupState> {
  state = {
    checkedValues: new Array<string>(),
  };

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

  handleCheckboxGroupChange = (value: string, e: CheckboxChangeEvent) => {
    const { onChange } = this.props;
    const { checkedValues } = this.state;

    if (e.target.checked) {
      checkedValues.push(value);
    } else {
      checkedValues.splice(
        checkedValues.findIndex((item) => item === value),
        1
      );
    }
    this.setState({ checkedValues });
    onChange(checkedValues);
  };

  render() {
    const {
      disabled,
      name,
      onChange,
      options = [],
      defaultValue,
      value,
    } = this.props;

    const curOptions = this.getOptions(options);
    const labelClasses = classNames(styles["scc-checkbox-wrapper"], {
      [styles["scc-checkbox-wrapper-disabled"]]: disabled,
    });
    const inputClasses = classNames(styles["scc-checkbox"], {
      [styles["scc-checkbox-disabled"]]: disabled,
    });
    return (
      <>
        {curOptions.map(({ label, value, disabled }) => (
          <Checkbox
            key={value}
            disabled={disabled}
            onChange={this.handleCheckboxGroupChange.bind(this, value)}
          >
            {label}
          </Checkbox>
        ))}
      </>
    );
  }
}

export default Group;
