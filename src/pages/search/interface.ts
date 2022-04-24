export interface IQQInfoReq {
  qq: string;
}

export interface IQQInfoRes {
  code: number;
  msg?: string;
  qq: string;
  name: string;
  qlogo: string;
}
