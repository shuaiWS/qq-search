import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useCallback,
} from "react";
import { IInputProps } from "@/components/interface";
import "./Input.scss";
import { useDebounce } from "@/common/util";

const Index = (props: IInputProps) => {
  const {
    className = "",
    value,
    type = "number",
    onChange,
    onSearch = () => {},
    maxLength = undefined,
    placeholder = "",
  } = props;

  const _onSearch = useDebounce((v: string) => {
    onSearch(v);
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      onChange(e.target.value);
      _onSearch(e.target.value);
    },
    [onChange, _onSearch]
  );

  const handlePress: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === "Enter") {
        _onSearch(e.currentTarget.value);
      }
    },
    [_onSearch]
  );

  const handleInput: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const len = e.currentTarget.value.length;
      if (maxLength && len > maxLength) {
        e.preventDefault();
        e.currentTarget.value = e.currentTarget.value.slice(0, maxLength);
      }
    },
    [maxLength]
  );

  return (
    <div className={`c-input ${className}`}>
      <input
        className="c-input-inner"
        value={value}
        type={type}
        maxLength={maxLength}
        onChange={handleChange}
        onKeyUp={handlePress}
        onInput={handleInput}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Index;
