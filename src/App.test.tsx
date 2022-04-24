import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import Input from "./../src/components/Input";

describe("input 单元测试", () => {
  const Warpper = () => {
    const [value, setValue] = useState("9999999999");
    return (
      <Input
        maxLength={9}
        value={value}
        data-testid="test-input"
        onChange={(v) => {
          console.log(333333, v);
          setValue(v);
        }}
      />
    );
  };
  render(<Warpper />);
  const linkElement: HTMLInputElement = screen.getByTestId("test-input");
  it("input 默认值", () => {
    expect(linkElement.value).toBe("9999999999");
  });
});
