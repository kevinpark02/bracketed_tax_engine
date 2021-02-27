import { connect } from 'react-redux';
import { createClient } from '../../actions/client_actions';
import { removeClientErrors } from "../../actions/client_actions";
import CreateClientForm from "./create_client_form";

const mapStateToProps = (state) => {
    return({
        accountantId: state.session.id,
        errors: state.errors.client
    });
};

const mapDispatchToProps = dispatch => {
    return({
        createClient: (client) => dispatch(createClient(client)),
        removeClientErrors: () => dispatch(removeClientErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateClientForm);