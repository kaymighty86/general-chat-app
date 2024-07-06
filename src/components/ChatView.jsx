import Styles from "./ChatView.module.css";

import { useState, useContext } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { chatSettingsContext } from "./contexts/chatSettingsContext";

export default function ChatView(){
    const [chatHistory, updateChatHistory] = useState([]);
    
    const {currentSender} = useContext(chatSettingsContext);

    function sendMessage(newMessage){
        //update chat history locally since there is backend server we're sending message to
        updateChatHistory((prevChatHistory)=>{
            //append new message to the message history array
            return ([
                ...prevChatHistory,
                {
                    sender: currentSender,
                    message: newMessage
                }
            ]);
        });
    }

    return (
        <div className={Styles.chatViewWrapper}>
            <ChatHeader />
            <MessageInput onSend={sendMessage}/>
        </div>
    )
}