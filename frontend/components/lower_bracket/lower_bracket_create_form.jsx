import React from 'react';

class LowerBracketCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lower_boundary: "",
            lower_rate: "",
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
        this.props.createLowerBracket(this.state)
            .then(() => this.setState({
                lower_boundary: "",
                lower_rate: "",
                accountant_id: this.props.accountantId
            }))
    }

    render() {
        return(
            <div className="bracket-create-form-row">
                <h3>Create Lower Boundary Bracket</h3>
                <form className="bracket-create-row-form"
                      onSubmit={this.handleSubmit}>
                    <label>
                        Boundary: &nbsp;
                        <input type="text"
                                value={this.state.lower_boundary}
                                placeholder="Boundary"
                                onChange={this.update('lower_boundary')}/>
                    </label>

                    <label>
                        Rate(%): &nbsp;
                        <input type="text"
                                value={this.state.lower_rate}
                                placeholder="Rate"
                                onChange={this.update('lower_rate')}/>
                    </label>

                    <input className="blue-btn" type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}

export default LowerBracketCreateForm;