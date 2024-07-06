import Styles from "./ChatView.module.css";

import { useState, useContext } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import ConversationView from "./conversation/ConversationView";
import { chatSettingsContext } from "./contexts/chatSettingsContext";

export default function ChatView(){
    const [chatHistory, updateChatHistory] = useState([
        {
            sender: "user2",
            message: "Hello. Welcome to my awesome chat engine.\nYou can chat using both first-person and second-person perspectives (check the options button on the header). \n\nTry sending a message now first!",
            messageId: `m0`
        }
    ]);
    
    const {currentSender} = useContext(chatSettingsContext);

    function sendMessage(newMessage){
        //update chat history locally since there is backend server we're sending message to
        updateChatHistory((prevChatHistory)=>{
            //append new message to the message history array
            return ([
                ...prevChatHistory,
                {
                    sender: currentSender || "user1",
                    message: newMessage.trim(),
                    messageId: `m${prevChatHistory.length}`
                }
            ]);
        });
    }

    return (
        <div className={Styles.chatViewWrapper}>
            <ChatHeader />
            <ConversationView chatHistory={chatHistory}/>
            <MessageInput onSend={sendMessage}/>
        </div>
    )
}