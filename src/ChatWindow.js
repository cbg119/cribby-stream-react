import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

import "./ChatWindow.css";

import { Auth, API } from "aws-amplify";

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);

        this.messageList = React.createRef();
        this.connection = null;

        this.handleReceive = this.handleReceive.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.start = this.start.bind(this);
    }

    async start() {
        const username = (await Auth.currentUserInfo()).username;

        const tokenRequest = {
            body: {
                "arn": "arn:aws:ivschat:us-east-1:026188476034:room/Swbcpi3e1PN0",
                "userId": username,
                "capabilities": ["SEND_MESSAGE"]
            }
        }

        const tokenResponse = await API.post("tokenapi", "/api/token", tokenRequest);
        const token = tokenResponse.token;

        this.connection  = new WebSocket("wss://edge.ivschat.us-east-1.amazonaws.com", token);

        this.connection.addEventListener("open", _ => console.log("WebSocket connection established"));
        this.connection.addEventListener("message", event => this.handleReceive(event.data));

        setTimeout(_ => {
            this.connection.close();
            this.connection = null;
            this.start();
        }, 60 * 1000);
    }

    handleReceive(message) {
        if (this.connection != null) {
            this.messageList.current.addMessage(JSON.parse(message));
        }
    }

    handleSend(message) {
        const payload = {
            "Action": "SEND_MESSAGE",
            "Content": message
        }
        
        this.connection.send(JSON.stringify(payload));
    }

    async componentDidMount() {
        this.start()
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