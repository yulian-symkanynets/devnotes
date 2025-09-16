import { useState } from "react";
import Button from "../ui/button";
import { InputField } from "../ui/input";
import "./Login.css"
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin() {
        try {
            const result = await fetch(`http://localhost:8080/user/login?username=${username}&password=${password}`);
            console.log(result.ok)

            if (result.ok) {
                navigate("/home");
            }
            else {
                // If backend returns true/false as JSON, parse it
                const isSuccess = await result.json();
                if (isSuccess === true) {
                    navigate("");
                } else {
                    alert("Login failed. Please check your credentials.");
                }
            }            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="login-page">
            <h1 className="login-title">Login</h1>
            <div className="login-form">
                <InputField label="Username" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} />
                <InputField label="Password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                <Button variant="primary" size="sm" onClick={handleLogin}>Login</Button>
            </div>
        </div>

    )
}

export default LoginPage;