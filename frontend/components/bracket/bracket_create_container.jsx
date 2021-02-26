import { connect } from 'react-redux';
import { createBracket, deleteBracket } from '../../actions/bracket_actions';
import BracketCreateForm from "./bracket_create_form";

const mapStateToProps = (state) => {
    return({
        accountantId: state.session.id,
        bracketsObject: state.entities.brackets
    });
};

const mapDispatchToProps = dispatch => {
    return({
        createBracket: (bracket) => dispatch(createBracket(bracket)),
        deleteBracket: (bracket) => dispatch(deleteBracket(bracket))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BracketCreateForm)