import { myAxios } from "./helper";

export const loadAllCategory = () => {
  return myAxios.get("/category/").then(response => response.data);
};
