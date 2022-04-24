import React from "react";
import { ILoading } from "@/components/interface";
import "./Loading.scss";

const Index = (props: ILoading) => {
  const { className = "" } = props;
  return (
    <div className={`c-loading ${className}`}>
      <div className="c-loading-mask" />
      <div className="c-loading-inner n-flex-cc">loading...</div>
    </div>
  );
};
export default Index;
