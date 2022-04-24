import React from "react";
import { IAvatar } from "@/components/interface";
import "./Avatar.scss";

const Index = (props: IAvatar) => {
  const { src, alt = "头像" } = props;
  return (
    <div className="c-avatar">
      <img src={src} alt={alt} />
    </div>
  );
};
export default Index;
