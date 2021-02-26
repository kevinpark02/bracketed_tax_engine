import { connect } from 'react-redux';
import { createLowerBracket, updateLowerBracket, deleteLowerBracket } from '../../actions/lower_bracket_actions';
import { fetchUser } from '../../actions/session_actions';
import LowerBracketIndex from "./bracket_index";

const mapStateToProps = (state) => {
    return({
        lowerBrackets: Object.values(state.entities.lowerBracket),
        userId: state.session.id
    });
};

const mapDispatchToProps = dispatch => {
    return({
        createLowerBracket: (lowerBracket) => dispatch(createLowerBracket(lowerBracket)),
        updateLowerBracket: (lowerBracket) => dispatch(updateLowerBracket(lowerBracket)),
        deleteLowerBracket: (lowerBracket) => dispatch(deleteLowerBracket(lowerBracket)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LowerBracketIndex);