import React from "react";

import GlobalStyle from "./Styles/global"

import SigIn from "./pages/Signin";
import ToastContainer from "./components/ToastContainer";

import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SigIn />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
