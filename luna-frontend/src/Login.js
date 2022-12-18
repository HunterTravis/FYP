import {useState} from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({username, password});
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </div>
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login