import React from "react";

import GlobalStyle from "./Styles/global"

import SigIn from "./pages/Signin";
import SigUp from "./pages/SignUp";

import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SigIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
