import { useState, useEffect } from "react";

// Quản lý data bên ngoài hook => component sử dụng hook này để có thể truy cập cùng data
let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
  const setState = useState(globalState)[1];
  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);
};
