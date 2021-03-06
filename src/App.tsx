import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./Styles/global"

import AuthProvider from "./hooks";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
