let Message = (props) => {
    return (
        <p>{props.message.Sender.UserId}: <span>{props.message.Content}</span></p>
    )
}

export default Message;