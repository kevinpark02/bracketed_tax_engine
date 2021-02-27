import React from 'react';
import NumberFormat from 'react-number-format';

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

    taxCalc(brackets, lowerBracket, income) {
        let tax = 0;
        let incomeTrack = income;

        if (brackets.length === 0) {
            return tax;
        }
    
        for(let i = 0; i < brackets.length; i++){
            if (i === 0) {
                if (incomeTrack - brackets[i].boundary >= 0) {
                    tax += brackets[i].boundary * (brackets[i].rate / 100)
                    incomeTrack -= brackets[i].boundary
                } else {
                    tax += incomeTrack * (brackets[i].rate / 100)
                    incomeTrack -= incomeTrack
                    return tax
                }
            } else {
                if (incomeTrack >= brackets[i].boundary - brackets[i-1].boundary) {
                    tax += (brackets[i].boundary - brackets[i-1].boundary) * (brackets[i].rate / 100)
                    incomeTrack -= (brackets[i].boundary - brackets[i-1].boundary)
                } else {
                    tax += incomeTrack * (brackets[i].rate / 100)
                    incomeTrack -= incomeTrack
                    return tax
                }
            }
        }

        if (incomeTrack > 0) {
            tax += incomeTrack * (lowerBracket[0].lower_rate / 100)
            incomeTrack -= incomeTrack
            return tax
        } else {
            return tax
        }
    }

    render() {
        const brackets = this.props.brackets;
        const lowerBracket = this.props.lowerBracket;
        const income = this.props.client.income
        const errorMessage = brackets.length === 0 ?
        <p>Please create tax brackets</p> :
        null

        return(
            <div className="client-information-row">
                <form className="client-information-row-update-form"
                      onSubmit={this.handleSubmit}>
                    <div className="client-information-row-update-form-top">
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
                    </div>
                    <div className="client-information-row-update-form-bottom">
                        <li className="tax-amount">
                            {this.state.fname} {this.state.lname}'s Tax: &nbsp;
                            <NumberFormat value={this.taxCalc(brackets, lowerBracket, income)} 
                                        displayType={'text'} 
                                        thousandSeparator={true} 
                                        prefix={'$'}
                                        />
                            {errorMessage}
                        </li>
                        <div className="client-information-btns">
                            <input className="green-btn" type="submit" value="Update"/>

                            <li className="delete-client red-btn"
                                onClick={this.handleDelete}>
                                Delete Client
                            </li>
                        </div>
                    </div>
                </form>


            </div>
        );
    }
}

export default ClientIndexItem;