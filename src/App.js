import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "./routes";
import { AuthContext } from "./context/auth";

AOS.init();

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
