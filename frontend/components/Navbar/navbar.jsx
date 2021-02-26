import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div className="logged-nav">
            <div className="logged-left">
                <Link to="/dashboard"><div className="white-btn">Dashboard</div></Link>
                <Link to="/new_client"><div className="white-btn">New Client</div></Link>
                <Link to="/client_info"><div className="white-btn">Client Information</div></Link>
                <Link to="/tax_bracket"><div className="white-btn">Tax Bracket</div></Link>
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
                <Link to="/signup"><li className="white-btn">Sign Up</li></Link>
                <Link to="/login"><li className="yellow-btn">Log In</li></Link>
            </div>
        </div>
    );

    return(
            <div>
                {greeting}
            </div>
    )
}

export default Navbar; 
