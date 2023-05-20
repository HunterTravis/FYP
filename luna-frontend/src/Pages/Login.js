import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
    setPassword(localStorage.getItem('password'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    


    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          //set cookie
          setCookie("username", username, { path: "/" });
          setCookie("LoggedIn", "true", { path: "/" });
          setCookie("role", data.role, { path: "/" });
          console.log(data.navigation);
          if (rememberMe) {
            // Store the user's credentials in local storage or any other secure storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
          }
          console.log(rememberMe);
          console.log(localStorage.getItem('username'));
          console.log(localStorage.getItem('password'));
          navigate(data.navigation);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        alert("Something went wrong");
        console.log(error);
      });
  };

  return (
    <div className="bg">
      <div className="row h-100 justify-content-center">
        <div id="loginPageContainer" className="col-lg-3 col-9">
          <img
            src="images/logo.png"
            alt="Could not load logo"
            className="logo"
          />
          <h1 className="text-white login text-center">Login</h1>
          <form onSubmit={handleSubmit} className="loginForm">
            <div className="form-group">
              <TextField inputProps={{ style: { fontSize: '120%' } }} onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Enter username or roll number" className="form-control" type="text" id="filled-basic InputEmail" label="Username or Rollno" variant="filled" />
            </div>
            <div className="form-group">
            <TextField inputProps={{ style: { fontSize: '120%' } }} style={{marginTop: '4%'}} className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="filled-basic InputPassword" label="Password" variant="filled" />

            </div>
            <div className="form-check">
              
              <input
                type="checkbox"
                className="form-check-input mt-2"
                id="RememberMe"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                className="form-check-label text-white mt-1"
                htmlFor="RememberMe"
              >
                Remember Me
              </label>
            </div>
            <div className="form-check">
              <a href="/forgot" id="forgot" 
                style={{fontWeight:'bold'}}>
                Forgot Password
                
              </a>
            </div>
            <div className="text-center">
            <Button  type="submit" color="primary"  style={{ backgroundColor: 'rgb(0, 133, 249)' }} size="large" variant="contained">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
