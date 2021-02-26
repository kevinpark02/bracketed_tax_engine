import React from 'react';
import BracketIndexItem from './bracket_index_item';

class BracketIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const brackets = this.props.brackets;
        return(
            <div className="bracket-information">
                <h1>Tax Brackets</h1>
                <ul className="bracket-information-table">
                    <h2>Upper Boundary Brackets</h2>
                    {brackets.map(bracket => {
                        if (bracket.boundary_type === "upper") {
                            return(
                                <BracketIndexItem bracket={bracket}
                                                  key={bracket.id}
                                                  updateBracket={this.props.updateBracket}
                                                  deleteBracket={this.props.deleteBracket}
                                                  fetchUser={this.props.fetchUser}
                                                  userId={this.props.userId}/>
                            )
                        }
                    })}
                </ul>
                <ul className="bracket-information-table">
                    <h2>Lower Boundary Bracket (there should only be one)</h2>
                    {brackets.map(bracket => {
                        if (bracket.boundary_type === "lower") {
                            return(
                                <BracketIndexItem bracket={bracket}
                                                  key={bracket.id}
                                                  updateBracket={this.props.updateBracket}
                                                  deleteBracket={this.props.deleteBracket}
                                                  fetchUser={this.props.fetchUser}
                                                  userId={this.props.userId}/>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default BracketIndex;