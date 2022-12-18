import './Login.css';
import {useState} from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({username, password});
    }
    
    return (
        <div className="bg row d-flex justify-content-center">
            <div id="loginPageContainer" className="col-md-2">
                
                <h1 className="text-white">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="InputEmail" className="text-white">Username or Rollno:</label>
                        <input type="text" className="form-control"  id="InputEmail" placeholder="Enter username or roll number" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group">
                            <label htmlFor="InputPassword" className="text-white">Password:</label>
                        <input type="password" className="form-control" id="InputPassword" value={password}  onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="NotRobot"/>
                        <label className="form-check-label text-white" htmlFor="NotRobot">I'm not a robot</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        {/* <form onSubmit={handleSubmit}>
            <h1 className="text-white">Login</h1>
            <div>
            <label className="text-white">
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            </div>
            <div>
            <label className="text-white">
            Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
            </form> */}
        </div>
    )
}

export default Login