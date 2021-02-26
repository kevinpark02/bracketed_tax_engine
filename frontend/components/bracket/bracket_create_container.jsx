import { connect } from 'react-redux';
import { createBracket } from '../../actions/bracket_actions';
import BracketCreateForm from "./bracket_create_form";

const mapStateToProps = (state) => {
    return({
        accountantId: state.session.id
    });
};

const mapDispatchToProps = dispatch => {
    return({
        createBracket: (bracket) => dispatch(createBracket(bracket))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BracketCreateForm)