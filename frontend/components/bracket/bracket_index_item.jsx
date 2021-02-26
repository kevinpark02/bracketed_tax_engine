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
        this.props.updateBracket(this.state)
            .then(() => this.props.fetchUser(this.props.userId))
    }

    render() {
        const bracket = this.props.bracket;
        const checkbox = bracket.boundary_type === "upper" ?
            <select onChange={this.update('boundary_type')}>
                <option value="upper" selected>Upper</option>
                <option value="lower">Lower</option>
            </select> 
                :
            <select>
                <option value="upper">Upper</option>
                <option value="lower" selected>Lower</option>
            </select>

        return (
            <div className="bracket-information-row">
                <form className="bracket-information-row-update-form"
                      onSubmit={this.handleSubmit}>

                    <label>
                        Boundary Type: &nbsp;
                        {checkbox}
                    </label>

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

                <li className="red-btn"
                    onClick={this.handleDelete}>
                    Delete Bracket
                </li>
            </div>
        );
    }
}

export default BracketIndexItem;