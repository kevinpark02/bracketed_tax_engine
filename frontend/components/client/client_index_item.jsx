import React from 'react';

class ClientIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.client;
    }

    render() {
        const client = this.props.client
        return(
            <li>{client.name}</li>
        );
    }
}

export default ClientIndexItem;