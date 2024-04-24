import axios from "axios";
import { config } from "@commons/utils/config";

const api = axios.create({
  baseURL: config.apibaseUrl,
});

api.interceptors.request.use((config) => {
  // object yang diharapkan di setiap project
  /*
    contoh nama project
    nama-project-webadmin
    nama-project-andon
    nama-project-hmi
  */
  /*
    nama-project-webadmin:{
      token: "token1234"
    }
  */
  const jsonToken = localStorage.getItem("dharma-web-admin");

  const jsonParse = jsonToken ? JSON.parse(jsonToken) : { token: null };
  // const auth = localStorageData
  //   ? JSON.parse(localStorageData)
  //   : { token: null };
  config.headers["Authorization"] = `Bearer ${jsonParse.token}`;
  return config;
});

export { api };
