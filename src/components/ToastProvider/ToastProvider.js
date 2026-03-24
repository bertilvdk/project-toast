import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";
export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => setToasts([]));

  const addToast = (message, variant) => {
    setToasts((prev) => [...prev, { id: Math.random(), message, variant }]);
  };

  const dismissToast = (toastId) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  };

  return (
    <ToastContext value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastContext>
  );
};

export default ToastProvider;
