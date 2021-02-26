import React from 'react';

class CreateClientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            income: 0,
            accountant_id: this.props.accountantId
        }
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createClient(this.state)
    }

    render() {
        return(
            <div>
                <h1>Add New Client</h1>
                <form>
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

                    <input type="submit" value="Add Client"/>
                </form>
            </div>
        )
    }
}

export default CreateClientForm;