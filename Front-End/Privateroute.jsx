import React from "react";
import { Outlet , Navigate} from "react-router-dom";
import { isLoggedIn } from "../Auth";


const Privateroute=()=>{
    
    // if the User Is loginn then Access the DashBoard .................. otherwise not **********************************
    
     return isLoggedIn() ? <Outlet /> : <Navigate to={"/Login"} />

}
export default Privateroute