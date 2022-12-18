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
        <div className="bg">
        <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    )
}

export default Login