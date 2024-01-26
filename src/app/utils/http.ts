import cookie from "js-cookie";

const token = cookie.get("access_token") || "";

const headers: Object = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  Authorization: `Bearer ${token}`,
};

type configProps = {
  method: string;
  headers: any;
  body?: any;
};

export const http = (url: string, method: string, data?: any): any => {
  //   const FULL_URL: string = `${process.env.BASE_URL}${url}` ;

  const FULL_URL: string = `http://127.0.0.1:3002/auth/${url}`;

  let config = <configProps>{};
  config.method = method.toUpperCase();
  config.headers = headers;
  if (data) config.body = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fetch(FULL_URL, config)
      .then((response: any) => response.json())
      .then((data: any) => resolve(data))
      .catch((error: any) => reject(error));
  });
};
