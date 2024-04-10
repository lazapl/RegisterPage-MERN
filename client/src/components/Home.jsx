import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Welcome.css";
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import image from '../images/pic.png';

function Header() {
    return (
        <header className='header'>
            <a href="#" className='logo'>Logo</a>
            <nav className='navbar'>
                <Link className="yourCustomClass" to="/login">Log Out</Link>
            </nav>
        </header>
    );
}

function HeroSection({ userEmail }) {
    return (
        <div className="hero">
            <div className="content">
                <h1 className='anim'>Hello<br/>{userEmail}</h1>
                
            </div>
            <img src={image} alt="Feature" className='feature-img anim' />
        </div>
    );
}

function Home() {
    const location = useLocation();
    const userEmail = location.state?.email;
    const navigate = useNavigate();

    if (!userEmail) {
        navigate('/login');
        return null;
    }

    return (
        <>
            <Header />
            <HeroSection userEmail={userEmail} />
        </>
    );
}

export default Home;