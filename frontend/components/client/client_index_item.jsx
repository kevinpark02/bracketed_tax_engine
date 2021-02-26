import React from 'react';

class ClientIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.client;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteClient(this.props.client.id)
            .then(() => this.props.fetchUser(this.props.userId))
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateClient(this.state)
            .then(() => this.props.fetchUser(this.props.userId))
    }

    render() {
        return(
            <div className="client-information-row">
                <form className="client-information-row-update-form"
                      onSubmit={this.handleSubmit}>
                    <label>
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

                <li className="delete-client red-btn"
                    onClick={this.handleDelete}>
                    Delete Client
                </li>
            </div>
        );
    }
}

export default ClientIndexItem;