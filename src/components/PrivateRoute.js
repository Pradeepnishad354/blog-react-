import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth";
const PrivateRoute=()=>{

    

    // if(isLoggedIn){
    //     return <Outlet></Outlet>
    // }else{

    //     return <Navigate to={'/login'}></Navigate>
    // }

    return isLoggedIn() ? <Outlet/>:<Navigate to={'/login'}></Navigate>
}
export default PrivateRoute;