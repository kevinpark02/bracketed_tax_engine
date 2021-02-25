import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const addClient =
        <Link to="/new_client">
            <div className="dashboard-item">
                <h1>Add New Client</h1>
            </div>
        </Link>;

    const clientInfo = 
        <Link to="/client_info">
            <div className="dashboard-item">
                <h1>Client Information</h1>
            </div>
        </Link>;

    const taxBracket = 
        <Link to="/tax_bracket">
            <div className="dashboard-item">
                <h1>Tax Bracket</h1>
            </div>
        </Link>;

    return(
        <div className="dashboard-items">
            {addClient}
            {clientInfo}
            {taxBracket}
        </div>
    );
}

export default Dashboard;