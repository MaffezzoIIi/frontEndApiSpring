import React from "react";
import {
  RouteProps as ReactDOMRoutesProps,
  Route as ReactDOMRoute,
  Redirect
} from "react-router-dom";

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
  const { usuario } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!usuario ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
};

export default Route;