const MyMessage = ({message}) => {
    if(message?.attachments && message?.attachment?.length > 0){
        return (
            <img 
                className="chat-image"
                src={message.attachment[0].file}
                alt="message-attachment"
                style={{float: 'right'}}
            />
        )
    }
    return(
        <div className="message" style={{float: 'right', marginRight: '18px', color: 'white', backgroundColor:'#3B2A50'}}>
            {message.text}
        </div>
    );
}

export default MyMessage;