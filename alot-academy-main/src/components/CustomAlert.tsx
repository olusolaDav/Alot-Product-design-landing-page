'use client'

import { useState, useEffect } from "react";
import { Alert, AlertIcon, CloseButton } from "@chakra-ui/react";

type AlertProps = {
  status: "error" | "success" | "warning" | "info";
  children: React.ReactNode;
  autoClose?: boolean; // Add a prop to enable auto-close
  onClose?: () => void; // Add a callback for when the alert is closed
  resetFunction?: () => void; // Add a function to reset the state
};

const CustomAlert = ({
  status,
  children,
  autoClose = true,
  onClose,
  resetFunction,
}: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  // Automatically close the alert after 5 seconds (5000 milliseconds)
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) {
          onClose();
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const handleAlertClose = () => {
    setIsVisible(false);
    if (resetFunction) {
      resetFunction();
    }
  };

  return isVisible ? (
    <Alert status={status} display="flex" alignItems="center">
      <AlertIcon flex="0 0 auto" />
      {children}
      <CloseButton
        size="sm"
        ml="auto"
        onClick={handleAlertClose}
        _focus={{ outline: "none" }}
      />
    </Alert>
  ) : null;
};

export default CustomAlert;
