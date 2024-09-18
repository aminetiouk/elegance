import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./loginSignup.css";

const LoginSignupForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate(); 

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isLogin) {
                // Login
                await signInWithEmailAndPassword(auth, email, password);
                alert("Logged in successfully!");
                navigate('/');
                
            } else {
                // Sign Up
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Account created successfully!");
                navigate('/');
            }
        } catch (error) {
            console.error("Error:", error.code, error.message);
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="form-container">
            {isLogin ? (
                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button className="button-login" type="submit">Login</button>
                    </form>
                    <p>
                        Don't have an account?{" "}
                        <span className="toggle-link" onClick={toggleForm}>
                            Sign up here
                        </span>
                    </p>
                </div>
            ) : (
                <div className="signup-form">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="sign-bttn">Sign Up</button>
                    </form>
                    <p>
                        Already have an account?{" "}
                        <span className="toggle-link" onClick={toggleForm}>
                            Log in here
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default LoginSignupForm;
