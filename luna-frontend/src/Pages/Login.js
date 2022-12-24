import './Login.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "student" && password === "student") {
            navigate("/dashboard");
        }
    }
    
    return (
        <div className="bg">
            <div className="row h-100 justify-content-center">
                <div id="loginPageContainer" className="col-lg-3 col-9">
                    <img src="images/logo.png" alt="Could not load logo" className="logo"/>
                    <h1 className="text-white login text-center">Login</h1>
                    <form onSubmit={handleSubmit} className="loginForm">
                        <div className="form-group">
                            <label htmlFor="InputEmail" className="text-white">Username or Rollno:</label>
                            <input type="text" className="form-control"  id="InputEmail" placeholder="Enter username or roll number" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="form-group">
                                <label htmlFor="InputPassword" className="text-white  mt-2">Password:</label>
                            <input type="password" className="form-control" id="InputPassword" placeholder="********" value={password}  onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input mt-2" id="NotRobot"/>
                            <label className="form-check-label text-white mt-1" htmlFor="NotRobot">I'm not a robot</label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary w-50 mt-3">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login