const MemberMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username != message.sender.username;

    return (
        <div className="chat-row">
            {isFirstMessageByUser && (
                <div
                    className="chat-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {message?.attachment?.length > 0
                ? (
                    <img 
                        className="chat-image"
                        src={message.attachment[0].file}
                        alt="message-attachment"
                        style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                    />
                ) : (
                    <div className="message" style={{float: 'left', backgroundColor:'#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )
            }
        </div>
    );
}

export default MemberMessage;