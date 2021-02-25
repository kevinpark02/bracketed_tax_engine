import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, removeSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Log in'
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);