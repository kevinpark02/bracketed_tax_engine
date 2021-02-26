import React from 'react';

class LowerBracketIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.lowerBracket;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    update(field){
        return e => this.setState({ [field]: e.target.value })
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteLowerBracket(this.state)
            .then(() => this.props.fetchUser(this.props.userId));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateLowerBracket(this.state)
            .then(() => this.props.fetchUser(this.props.userId))
    }

    render() {
        debugger
        const lowerBracket = this.props.lowerBracket;

        return (
            <div className="lower-bracket-information-row">
                <form className="lower-bracket-information-row-update-form"
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

                    <input className="green-btn" type="submit" value="Update"/>

                </form>

                <li className="red-btn delete-bracket"
                    onClick={this.handleDelete}>
                    Delete Bracket
                </li>
            </div>
        );
    }
}

export default LowerBracketIndexItem;