import React from "react";

import GlobalStyle from "./Styles/global"

import SigIn from "./pages/Signin";
import SigUp from "./pages/SignUp";

const App: React.FC = () => {
  return ( 
    <>
      <SigUp />
      <GlobalStyle />
    </>
  );
}

export default App;
