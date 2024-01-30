import { myAxios } from "./helper";


export const signUp = async (user) => {
  return await myAxios.post("/api/v1/auth/register",user).
  then((response) => response.data)

   
};



export  const loginUser= async (loginDetail)=>{
return await myAxios.post("/api/v1/auth/login",loginDetail)
.then((response)=>response.data)

}