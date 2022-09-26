import React, { useState, useEffect } from "react";
import { LoginContext } from "./Context/index";
import MainRoute from "./Routes/MainRoute";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [email,setEmail] = useState("");

  const checkLogin = () => {
    let token = localStorage.getItem("token");
    if (token == null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    checkLogin();
    setFirstname(localStorage.getItem("firstname"));
    setEmail(localStorage.getItem("email"));
  }, [firstname]);
  

  return (
    <>
      <LoginContext.Provider
        value={{ isLogin, firstname,email, setIsLogin, setFirstname, setEmail }}
        
      >
        <MainRoute />
      </LoginContext.Provider>
    </>
  );
}

export default App;
