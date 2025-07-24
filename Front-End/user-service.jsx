import { myAxios } from "./helper";


export const signUp = (user) =>{

    return myAxios.post("/auth/register",user).then((Response)=>Response.data);

};


export const login = (loginDetail) => {
  return myAxios
    .post("/auth/login",loginDetail)  // ✅ send as object
    .then(response => response.data);
};
