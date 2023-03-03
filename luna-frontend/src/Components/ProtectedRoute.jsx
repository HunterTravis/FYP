import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const login = sessionStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}

export default ProtectedRoute;
