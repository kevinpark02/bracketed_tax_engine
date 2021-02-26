import React from 'react';

class CreateClientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            income: "",
            accountant_id: this.props.accountantId
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createClient(this.state)
            .then(() => this.props.history.push("/client_info"));
    }

    render() {
        return(
            <div className="client-form-container">
                <h3>Add New Client</h3>
                <form className="client-form"
                      onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={this.state.fname}
                           placeholder="Client's First Name"
                           onChange={this.update('fname')}
                           className="input-fields"/>

                    <input type="text"
                           value={this.state.lname}
                           placeholder="Client's Last Name"
                           onChange={this.update('lname')}
                           className="input-fields"/>

                    <input type="text"
                           value={this.state.email}
                           placeholder="Client's Email"
                           onChange={this.update('email')}
                           className="input-fields"/>

                    <input type="text"
                           value={this.state.income}
                           placeholder="Client's Income"
                           onChange={this.update('income')}
                           className="input-fields"/>

                    <input type="submit" value="Add Client" className="yellow-btn session-form-btn"/>
                </form>
            </div>
        )
    }
}

export default CreateClientForm;