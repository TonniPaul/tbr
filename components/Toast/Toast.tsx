import { useState, useEffect } from "react";
import { ToastContainer } from "./toast.style";

interface ToastProps {
  message: string;
  isVisible: boolean;
  status?: string;
}

const Toast = ({ message, isVisible, status }: ToastProps) => {

   
  return (
    <>
      {isVisible && (
        <ToastContainer>
          <p>{status ? status : "Success"}</p>
          <p>{message}</p>
        </ToastContainer>
      )}
    </>
  );
};

export default Toast;
