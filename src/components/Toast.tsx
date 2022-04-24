import React from "react";
import ReactDOM from "react-dom/client";
import "./Toast.scss";

const Index = ({ message }: any) => {
  return <div className="c-toast">{message}</div>;
};

Index.cerate = ({ message, className = "", type = "error" }: any) => {
  const wrapper = document.createElement("div");
  wrapper.className = `c-toast-wrapper c-toast-${type} ${className}`;
  wrapper.onanimationend = () => {
    document.body.removeChild(wrapper);
  };
  document.body.appendChild(wrapper);
  const root = ReactDOM.createRoot(wrapper as HTMLElement);
  root.render(<Index message={message} />);
};

Index.error = (message: string, { className = "" } = {}) => {
  return Index.cerate({ message, type: "error", className });
};

export default Index;
