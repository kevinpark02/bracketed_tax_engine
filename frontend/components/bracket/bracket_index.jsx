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
            </div>
        )
    }
}

export default BracketIndex;