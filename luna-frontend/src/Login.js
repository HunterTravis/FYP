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
        <div className='bg'>
        <div className="row h-100 justify-content-center align-items-center">
            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    <h1 className='text-white text-center'>Login</h1>
                    <div className="form-group">
                        <label htmlFor="username" className='text-white'>Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='text-white'>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label text-white" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Login