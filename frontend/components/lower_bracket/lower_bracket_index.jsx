import React from 'react';
import LowerBracketIndexItem from './lower_bracket_index_item';
import LowerBracketCreateContainer from "./lower_bracket_create_container";

class LowerBracketIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const lowerBracket = this.props.lowerBracket;
        return(
            <div className="bracket-information">
                <ul className="bracket-information-table">
                    <h2>Lower Boundary Bracket</h2>
                    {lowerBracket.map(lowerBracket => {
                        return(
                            <LowerBracketIndexItem lowerBracket={lowerBracket}
                                                key={lowerBracket}
                                                updateLowerBracket={this.props.updateLowerBracket}
                                                deleteLowerBracket={this.props.deleteLowerBracket}
                                                fetchUser={this.props.fetchUser}
                                                userId={this.props.userId}/>
                        )
                    })}
                </ul>
                <LowerBracketCreateContainer />
            </div>
        )
    }
}

export default LowerBracketIndex;