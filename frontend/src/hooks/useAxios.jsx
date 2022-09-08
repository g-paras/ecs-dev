import axios from "axios";

import { baseURL } from "../utils/routes";

const useAxios = () => {
  const instance = axios.create({
    baseURL: baseURL,
  });

  return instance;
};

export default useAxios;
