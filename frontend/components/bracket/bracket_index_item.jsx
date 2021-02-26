import React from 'react';

class BracketIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.bracket;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    update(field){
        return e => this.setState({ [field]: e.target.value })
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteBracket(this.state)
            .then(() => this.props.fetchUser(this.props.userId));
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        if (this.props.bracketsObject[this.state.boundary]) {
            this.props.deleteBracket(this.props.bracketsObject[this.state.boundary])
                .then(() => this.props.updateBracket(this.state))
                .then(() => this.props.fetchUser(this.props.userId))
            } else {
                this.props.updateBracket(this.state)
                    .then(() => this.props.fetchUser(this.props.userId))
        }
    }

    render() {
        const bracket = this.props.bracket;

        return (
            <div className="bracket-information-row">
                <form className="bracket-information-row-update-form"
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

export default BracketIndexItem;