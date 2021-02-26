import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout, login } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));