import { connect } from 'react-redux';
import { createLowerBracket } from '../../actions/lower_bracket_actions';
import LowerBracketCreateForm from "./lower_bracket_create_form";

const mapStateToProps = (state) => {
    return({
        accountantId: state.session.id
    });
};

const mapDispatchToProps = dispatch => {
    return({
        createLowerBracket: (lowerBracket) => dispatch(createLowerBracket(lowerBracket))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LowerBracketCreateForm)