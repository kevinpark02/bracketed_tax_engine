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

    componentDidMount() {
      this.props.removeClientErrors();
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

    renderErrors(){
        const errors = this.props.errors;

        return(
            <ul className="session-errors">
                {errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return(
            <div className="client-form-container">
                <h3>Add New Client</h3>
                {this.renderErrors()}
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