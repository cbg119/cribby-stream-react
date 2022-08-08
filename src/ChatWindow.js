import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

import "./ChatWindow.css";

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);

        this.messageList = React.createRef();
        this.connection = null;

        this.handleReceive = this.handleReceive.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.start = this.start.bind(this);
    }

    start() {
        const token = "";
        const channelArn = "";

        this.connection  = new WebSocket("wss://edge.ivschat.us-east-1.amazonaws.com", token);

        this.connection.addEventListener("open", _ => console.log("WebSocket connection established"));
        this.connection.addEventListener("message", event => this.handleReceive(event.data));
    }

    handleReceive(message) {
        console.log(message);
        this.messageList.current.addMessage(JSON.parse(message));
    }

    handleSend(message) {
        const payload = {
            "Action": "SEND_MESSAGE",
            "Content": message
        }

        this.connection.send(JSON.stringify(payload));
        //construct message json object
        //send message
        //addMessage to MessageList state
    }

    render() {
        return (
            <div id="chat-window">
                <div id="message-window">
                <MessageList ref={this.messageList} />
                </div>
                <MessageInput callback={this.handleSend}/>
            </div>
        )
    }
}

export default ChatWindow;