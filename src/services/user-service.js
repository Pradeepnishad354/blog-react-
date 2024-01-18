import { myAxios } from "./helper";


export const SignUp = async (user) => {
  return await myAxios.post("/api/users/",user).
  then((response) => response.json());
};
