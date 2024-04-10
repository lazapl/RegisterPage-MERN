import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Welcome.css'; // Import your stylesheet for styling

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:4000/register", { name, email, password })
            .then(result => {
                console.log(result);
                navigate("/login");
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    return (



        <>
        <header className="header">
      <div className="logo-container">
        <a href="#" className="logo">
          Logo
        </a>
      </div>

      <nav className="navbar">
       
       
            <Link className="yourCustomClass" to="/login">Login</Link>
        
        
            <Link className="yourCustomClass" to="/register">Sign Up</Link>
         
       
      </nav>
    </header>
        <div className="signup-container">
            <h2>Register</h2>

            <form onSubmit={handleSubmit} className="signup-form">
                <input type="text" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Create account</button>
            </form>
        </div>    

        </>
    );
}

export default Signup;