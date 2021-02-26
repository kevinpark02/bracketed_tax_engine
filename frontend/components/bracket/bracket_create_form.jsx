import React from 'react';

class BracketCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boundary: "",
            rate: "",
            accountant_id: this.props.accountantId
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.bracketsObject[this.state.boundary]) {
           this.props.deleteBracket(this.props.bracketsObject[this.state.boundary])
            .then(() => this.props.createBracket(this.state))
            .then(() => this.setState({
                boundary: "",
                rate: "",
                accountant_id: this.props.accountantId
            })) 
        } else {
            this.props.createBracket(this.state)
                .then(() => this.setState({
                    boundary: "",
                    rate: "",
                    accountant_id: this.props.accountantId
                }))
        }
    }

    render() {
        return(
            <div className="bracket-create-form-row">
                <h3>Create Upper Boundary Bracket</h3>
                <form className="bracket-create-row-form"
                      onSubmit={this.handleSubmit}>
                    <label>
                        Boundary: &nbsp;
                        <input type="text"
                                value={this.state.boundary}
                                placeholder="Boundary"
                                onChange={this.update('boundary')}/>
                    </label>

                    <label>
                        Rate(%): &nbsp;
                        <input type="text"
                                value={this.state.rate}
                                placeholder="Rate"
                                onChange={this.update('rate')}/>
                    </label>

                    <input className="blue-btn" type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}

export default BracketCreateForm;