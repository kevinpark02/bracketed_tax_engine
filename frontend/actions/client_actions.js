import * as ClientApiUtil from "../util/client_api_util";

export const RECEIVE_CLIENT = "RECEIVE_CLIENT";
export const REMOVE_CLIENT = "REMOVE_CLIENT";
export const RECEIVE_CLIENT_ERRORS = "RECEIVE_CLIENT_ERRORS";
export const REMOVE_CLIENT_ERRORS = "REMOVE_CLIENT_ERRORS";

export const receiveClient = (client) => {
    return({
        type: RECEIVE_CLIENT,
        client
    });
};

export const removeClient = (clientId) => {
    return({
        type: REMOVE_CLIENT,
        clientId
    });
};

export const receiveClientErrors = (errors) => ({
    type: RECEIVE_CLIENT_ERRORS,
    errors,
});

export const removeClientErrors = () => ({
  type: REMOVE_CLIENT_ERRORS,
});

export const createClient = (client) => dispatch => {
    return ClientApiUtil.createClient(client)
        .then(client => dispatch(receiveClient(client)),
              (errors) => dispatch(receiveClientErrors(errors.responseJSON)));
};

export const updateClient = (client) => dispatch => {
    return ClientApiUtil.updateClient(client)
        .then(client => dispatch(receiveClient(client)));
};

export const deleteClient = (clientId) => dispatch => {
    return ClientApiUtil.deleteClient(clientId)
        .then(() => dispatch(removeClient(clientId)));
};