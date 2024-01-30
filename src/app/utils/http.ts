import axios from "axios";
import { getCookies } from "cookies-next";

const cookieStore = getCookies();
console.log("cookie", cookieStore);

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

type configProps = {
  method: string;
  headers: any;
  data?: any;
};

export const http = (url: string, method: string, data?: any): Promise<any> => {
  const FULL_URL = `http://localhost:3002/auth/${url}`;

  const config: configProps = {
    method: method.toUpperCase(),
    headers: headers,
    data: data,
  };

  return axios
    .request({
      url: FULL_URL,
      ...config,
    })
    .then((response) => {
      console.log("auth cookie", response);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};
