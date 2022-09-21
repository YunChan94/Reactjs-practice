import React, { useState, useEffect } from "react";
import { useCallback } from "react/cjs/react.production.min";

//set tg kể từ lúc login
let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  // tg hiện tại
  const currentTime = new Date().getTime();

  // tg cũ
  const adjExprationTime = new Date(expirationTime).getTime();

  // tg còn lại
  const remainDuration = adjExprationTime - currentTime;
  return remainDuration;
};

// lấy dữ liệu token và exprirationTime từ localStorage
const retriveStoreToken = () => {
  //Nếu có dữ liệu trong localStorage
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  // Nếu expirationTime nhỏ hơn 1s thì xóa hết dữ liệu
  if (remainingTime <= 6000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoreToken();
  let initialToken;

  if (tokenData) {
    initialToken = tokenData.token;
  }

  // tự động load token từ localStrorage
  const [token, setToken] = useState(initialToken);

  // !! -> chuyển 1 truthy/falsy value thành 1 boolean value
  const userIsLoggedIn = !!token;
  // quản lý login - logout bằng cách quản lý token

  // Sử dụng logoutHandler trong useEffect nên để prevent React rewrite function => useCallback
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
