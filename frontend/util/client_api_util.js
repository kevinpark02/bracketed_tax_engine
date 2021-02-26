import { $CombinedState } from "redux"

export const createClient = (client) => {
    return $.ajax({
        url: `/api/clients`,
        method: "POST",
        data: {client}
    });
};

export const updateClient = (client) => {
    return $.ajax({
        url: `/api/clients/${client.id}`,
        method: "PATCH",
        data: { client }
    });
};

export const deleteClient = (clientId) => {
    return $.ajax({
        url: `/api/clients/${clientId}`,
        method: "DELETE"
    })
}