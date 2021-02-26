import { connect } from 'react-redux';
import { createBracket, updateBracket, deleteBracket } from '../../actions/bracket_actions';
import { fetchUser } from '../../actions/session_actions';
import BracketIndex from "./bracket_index";

const mapStateToProps = (state) => {
    return({
        brackets: Object.values(state.entities.brackets),
        userId: state.session.id
    });
};

const mapDispatchToProps = dispatch => {
    return({
        createBracket: (bracket) => dispatch(createBracket(bracket)),
        updateBracket: (bracket) => dispatch(updateBracket(bracket)),
        deleteBracket: (bracket) => dispatch(deleteBracket(bracket)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BracketIndex);