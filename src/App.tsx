import React from "react";

import GlobalStyle from "./Styles/global"

import SigIn from "./pages/Signin";

const App: React.FC = () => {
  return ( 
    <>
      <SigIn />
      <GlobalStyle />
    </>
  );
}

export default App;
