import React from 'react';
import BracketIndexItem from './bracket_index_item';
import BracketCreateContainer from './bracket_create_container';

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
                <ul className="bracket-information-table">
                    <h2>Upper Boundary Brackets</h2>
                    {brackets.map(bracket => {
                        return(
                            <BracketIndexItem bracket={bracket}
                                                key={bracket.id}
                                                updateBracket={this.props.updateBracket}
                                                deleteBracket={this.props.deleteBracket}
                                                fetchUser={this.props.fetchUser}
                                                userId={this.props.userId}/>
                        )
                    })}
                </ul>
                <BracketCreateContainer />
            </div>
        )
    }
}

export default BracketIndex;