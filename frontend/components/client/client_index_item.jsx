import React from 'react';

class ClientIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.client;
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    render() {
        return(
            <div className="client-information-row">
                <form className="client-information-row-update-form">
                    <label htmlFor="">
                        First Name: &nbsp;
                        <input type="text"
                            value={this.state.fname}
                            placeholder="First Name"
                            onChange={this.update('fname')}/>
                    </label>

                    <label>
                        Last Name: &nbsp;
                        <input type="text"
                            value={this.state.lname}
                            placeholder="Last Name"
                            onChange={this.update('lname')}/>
                    </label>

                    <label>
                        Email: &nbsp;
                        <input type="text"
                            value={this.state.email}
                            placeholder="Client Email"
                            onChange={this.update('email')}/>
                    </label>

                    <label>
                        Income: &nbsp;
                        <input type="text"
                            value={this.state.income}
                            placeholder="Client Income"
                            onChange={this.update('income')}/>
                    </label>

                    <input className="green-btn" type="submit" value="Update"/>

                </form>
            </div>
        );
    }
}

export default ClientIndexItem;