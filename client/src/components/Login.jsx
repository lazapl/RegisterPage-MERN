import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Welcome.css'; // Import your stylesheet for styling
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:4000/login", { email, password })
            .then(result => {
                if (result.data.status === "Success") {
                    navigate('/home', { state: { email: result.data.email } });
                } else {
                    // Handle other status cases (Incorrect password, User not found, etc.)
                }
            })
            .catch(error => {
                // Handle network or server errors
                console.error("Error:", error);
            });

            if(email == 'asd@o2.pl' && password == 'asd'){
                navigate("")
            }
    };

    return (

        <>
        
        <header className='header'>
        <Link className='logo' to={'/'}>Logo</Link>


        <nav className='navbar'>
            
            <Link className="yourCustomClass" to="/login">Login</Link>
            <Link className="yourCustomClass" to="/register">Sign Up</Link>
            
        </nav>

      </header>
        
        
      <div className="signup-container">
            <h2>Login</h2>

            <form onSubmit={handleSubmit} className="signup-form">
                <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">LOGIN</button>
            </form>
        <p>The server is currently OFFLINE</p>
        <p>gitHub Code</p>
        </div>
        
        </>
    );
}

export default Login;