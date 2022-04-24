import React, { useCallback, useEffect, useState } from "react";
import Input from "@/components/Input";
import { getParseQuery, useDebounce } from "@/common/util";
import QQCard from "./components/QQCard";
import { fetchQQInfo } from "./Api";
import { IQQInfoRes } from "./interface";
import Toast from "@/components/Toast";
import Loading from "@/components/Loading";
import style from "./Index.module.scss";

const initVal = getParseQuery().q;

const Index = () => {
  const [searchVal, setSearchVal] = useState(initVal);
  const [loading, setLoading] = useState(false);
  const [qqInfo, setQQInfo] = useState<IQQInfoRes | null>(null);
  const handleChange = (v: string) => {
    setSearchVal(v);
  };

  const handleSearch = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchQQInfo({ qq: searchVal });
      if (data.code !== 1) {
        Toast.error(data.msg ?? "");
        setQQInfo(null);
      } else {
        setQQInfo(data);
      }
    } catch (error) {
      Toast.error("网络异常，请重试");
    }
    setLoading(false);
  }, [searchVal]);

  /**
   * 兼容 React.StrictMode
   */
  const initPage = useDebounce(async () => {
    handleSearch();
  }, 10);

  useEffect(() => {
    if (initVal) {
      initPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.searchPage}>
      <h1>QQ号查询</h1>
      <div className="n-flex-sc n-mgt-16">
        <div>QQ</div>
        <div className="n-w8" />
        <Input
          maxLength={10}
          value={searchVal}
          onChange={handleChange}
          onSearch={handleSearch}
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="n-mgt-16">
          {qqInfo ? (
            <QQCard info={qqInfo} />
          ) : (
            <div className="empty">暂无数据</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
