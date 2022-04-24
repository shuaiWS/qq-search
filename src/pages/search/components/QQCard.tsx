import React from "react";

import { IQQInfoRes } from "./../interface";
import Avatar from "@/components/Avatar";
import style from "./QQCard.module.scss";

interface IProps {
  info: IQQInfoRes;
}

const Index = ({ info }: IProps) => {
  const { name = "", qq = "", qlogo = "" } = info;

  return (
    <div className={style.index}>
      <div className="n-flex-sc n-h100">
        <div className="info-qlogo n-flex0">
          <Avatar src={qlogo} />
        </div>
        <div className="n-w8" />
        <div className="n-flex1">
          <div className="n-text-over">{name}</div>
          <div className="n-text-over">{qq}</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
