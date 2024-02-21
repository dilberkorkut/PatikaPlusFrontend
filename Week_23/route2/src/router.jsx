
import React, { useCallback, useState, useEffect } from "react";

const Context = React.createContext(undefined);

export const BrowserRouter = ({ children }) => {
  const [route, setRoute] = useState(window.location.pathname);
  const navigate = (route) => {
    history.pushState({}, "", route);
    setRoute(route);
  };

  const popstateHandler = useCallback(() => {
    setRoute(window.location.pathname);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", popstateHandler);
    return () => {
      window.removeEventListener("popstate", popstateHandler);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        navigate,
        route,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const Route = ({
  path,
  element
}) => {

  const {route} = useRouter()
  return route === path ? element : null;
}

export const useRouter = () => {
  const value = React.useContext(Context);
  if (!value)
    throw new Error("useRouter only available under BrowserRouter Component");

  return value;
};
