// Welcome.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import "./Welcome.css"

function Welcome() {
  return (
    <>


<header className='header'>
        <a href="/" className='logo'>Logo</a>


        <nav className='navbar'>
            
            <Link className="yourCustomClass" to="/login">Login</Link>
            <Link className="yourCustomClass" to="/register">Sign Up</Link>

        </nav>

        

      </header>


<div className="containerEZ">
  <h1><span className='diffrentColor text'>HELLO</span>, IN HOME PAGE</h1>
</div>

    </>
    
      
      
        
      
      
    
  );
}

export default Welcome;