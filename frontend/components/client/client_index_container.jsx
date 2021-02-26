import { connect } from 'react-redux';
import { updateClient, deleteClient } from '../../actions/client_actions';
import { fetchUser } from "../../actions/session_actions";
import ClientIndex from './client_index';

const mapStateToProps = (state) => {
    return({
        clients: Object.values(state.entities.clients),
        userId: state.session.id,
        brackets: Object.values(state.entities.brackets),
        lowerBracket: Object.values(state.entities.lowerBracket)
    });
};

const mapDispatchToProps = dispatch => {
    return({
        updateClient: (client) => dispatch(updateClient(client)),
        deleteClient: (clientId) => dispatch(deleteClient(clientId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientIndex)