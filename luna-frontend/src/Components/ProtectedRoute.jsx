import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie';
function ProtectedRoute(props) {
  const [cookies, setCookie] = useCookies(['user']);
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.LoggedIn!="true") {
      navigate("/");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}

export default ProtectedRoute;
