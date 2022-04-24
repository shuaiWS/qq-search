import ajax from "@/common/ajax";
import { IQQInfoReq, IQQInfoRes } from "./interface";

const QQInfoUrl = "https://api.uomg.com/api/qq.info";

export const fetchQQInfo = ({ qq }: IQQInfoReq): Promise<IQQInfoRes> => {
  return ajax.post(`${QQInfoUrl}?qq=${qq}`, {
    qq,
  });
};
