import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div className="logged-nav">
            <div className="logged-left">
                <div className="white-btn"><Link to="/home">Home</Link></div>
            </div>
            <div className="logged-right">
                <p>Hello, {currentUser.fname} {currentUser.lname}</p>
                <div onClick={logout} className="yellow-btn">Log Out</div>
            </div>
        </div>
    ) : (
        <div className="home-nav">
            <div className="left-nav">
                <Link to="/"><h1 className="title-nav">Bracketed Tax Engine</h1></Link>
            </div>
            <div className="auth-nav">
                <li className="white-btn"><Link to="/signup">Sign Up</Link></li>
                <li className="yellow-btn"><Link to="/login">Log In</Link></li>
            </div>
        </div>
    );

    return(
        <header>
            <div>
                {greeting}
            </div>
        </header>
    )
}

export default Navbar; 
