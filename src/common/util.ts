import { useEffect, useRef } from "react";

export function debounce<T extends Function>(fn: T, delay: number = 300): T {
  let timer: number;
  const result: any = function (this: any, ...p: any[]) {
    const _this = this;
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn.call(_this, ...p);
    }, delay);
  };
  return result;
}

export function useDebounce<T extends Function>(fn: T, delay: number = 300): T {
  const fnRef = useRef(fn);
  const ref = useRef<T>(
    debounce((...res: any[]) => {
      fnRef.current(...res);
    }, delay) as any
  );

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  return ref.current;
}

export const getParseQuery = (): {
  [key: string]: string;
} => {
  const search = window.location.search.replace(/^\?/, "");
  const list = search.split("&");
  return list.reduce((res, item) => {
    const [key, val] = item.split("=");
    return { ...res, [key]: val };
  }, {});
};
