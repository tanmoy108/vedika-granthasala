'use client'
import React, { useEffect } from "react";

const Hidden = () => {
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  useEffect(() => {
    const handleCopyMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("copy", handleCopyMenu);
    return () => {
      document.removeEventListener("copy", handleCopyMenu);
    };
  }, []);

  return <div className="hidden"></div>;
};

export default Hidden;
