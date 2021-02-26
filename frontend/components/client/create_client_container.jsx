import { connect } from 'react-redux';
import { createClient } from '../../actions/client_actions';
import CreateClientForm from "./create_client_form";

const mapStateToProps = (state) => {
    return({
        accountantId: state.session.id
    });
};

const mapDispatchToProps = dispatch => {
    return({
        createClient: (client) => dispatch(createClient(client))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateClientForm);