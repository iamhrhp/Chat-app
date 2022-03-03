import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm =(props) => {
    const [value, setValue] = useState("");
    const {chatId, creds} = props;

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if(text.length > 0) sendMessage(creds, chatId, { text});

        setValue('');
    }

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId );
    }
    //upload a image 
    const handleUpload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files, text: ''})

    }
    //inputBar Ui
    return(
        <form className="chat-form" onSubmit={handleSubmit}>
            <input 
                className="chat-input"
                placeholder="Send A Message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}

            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload.bind(this)}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="submit-icon" />
            </button>
        </form>
    );
}

export default MessageForm;