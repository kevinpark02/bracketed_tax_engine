import React from 'react';
import ClientIndexItem from './client_index_item';

class ClientIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const clients = this.props.clients
        return(
            <div className="client-information">
                <h1>Client Information</h1>
                <ul className="client-information-table">
                    {clients.map(client => {
                        return(
                            <ClientIndexItem client={client}
                                            key={client.id}
                                            updateClient={this.props.updateClient}
                                            deleteClient={this.props.deleteClient}
                                            fetchUser={this.props.fetchUser}
                                            userId={this.props.userId}
                                            brackets={this.props.brackets}
                                            lowerBracket={this.props.lowerBracket}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default ClientIndex;
