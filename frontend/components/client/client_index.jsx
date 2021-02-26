import React from 'react';
import ClientIndexItem from './client_index_item';

class ClientIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const clients = this.props.clients
        return(
            <div>
                <h1>Client Information</h1>
                <ul>
                    {clients.map(client => {
                        return(
                            <ClientIndexItem client={client}
                                            key={client.id}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default ClientIndex;
