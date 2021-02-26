import { connect } from 'react-redux';
import { createClient, updateClient, deleteClient } from '../../actions/client_actions';
import { fetchUser } from "../../actions/session_actions";
import ClientIndex from './client_index';

const mapStateToProps = (state) => {
    return({
        clients: Object.values(state.entities.clients),
        userId: state.session.id
    });
};

const mapDispatchToProps = dispatch => {
    return({
        createClient: (client) => dispatch(createClient(client)),
        updateClient: (client) => dispatch(updateClient(client)),
        deleteClient: (clientId) => dispatch(deleteClient(clientId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientIndex)