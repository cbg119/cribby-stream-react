import React from "react";

import Message from "./Message";

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messageList: []};
    }

    addMessage(message) {
        this.setState({messageList: [...this.state.messageList, message]});
    }

    render() {
        return(
            this.state.messageList.map(message => <Message key={message.RequestId} message={message} />)
        );
    }
}

export default MessageList;