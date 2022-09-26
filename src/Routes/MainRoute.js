import { useState,useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import LuangPhabang from "../pages/LuangPhabang";
import Part from "../pages/Part";
import Register from "../pages/Register";
import EditName from "../pages/EditName";
import { LoginContext } from '../Context/index'
function MainRoute() {

const {isLogin}= useContext(LoginContext)

if(!isLogin){
    return(
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LuangPhabang" element={<LuangPhabang />} />
        <Route path="/Part" element={<Part />} />
        <Route path="/Register" element={<Register />} />

      </Routes> 
    )

} else {
    return (
        <div>
    
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/LuangPhabang" element={<LuangPhabang />} />
              <Route path="/Part" element={<Part />} />
              <Route path="/EditName" element={<EditName/>}/>
            </Routes>
         
        </div>
      );
}

}

export default MainRoute;
