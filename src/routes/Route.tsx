import React from "react";
import { RouteProps as ReactDOMRoutesProps } from "react-router-dom";

import { useAuth } from "../hooks/auth";

interface RouteProps extends ReactDOMRoutesProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { } = useAuth();

  return <h1>teste</h1>
};

export default Route;