const ajax = (
  url: string,
  {
    method = "GET",
    params = {},
  }: {
    method: "GET" | "POST" | "...";
    params?: Object;
  } = {
    method: "GET",
    params: {},
  }
) => {
  return new Promise((res, rej) => {
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((response) => res(response.json()))
      .catch((err) => rej(err));
  });
};
ajax.get = (url: string): Promise<any> => ajax(url);
ajax.post = (url: string, params: Object): Promise<any> =>
  ajax(url, {
    method: "POST",
    params: { ...params },
  });

export default ajax;
