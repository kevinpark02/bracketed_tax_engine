import React from 'react';

const HomePage = () => {
    return(
        <div className="homepage">
            <div className="home-description">
                <h1>[ Bracketed ] Tax Engine</h1>
                <h2>To simplify </h2>
                <h2>the taxing</h2>
                <h2>process</h2>
                <p>Sign up now to efficiently manage your clients' tax information and ever-so-changing tax rules</p>
            </div>
            <div className="home-image">
                <img src={window.homepage_splash} alt="homepage_splash"/>
            </div>
        </div>
    )
}

export default HomePage