import Styles from "./ConversationView.module.css";

import { useContext, useRef, useEffect } from "react";

import Message from "./Message";
import userTypes from "../../utils/userTypes.json";
import { chatSettingsContext } from "../contexts/chatSettingsContext";

export default function ConversationView({chatHistory}){
    const conversationViewDOM = useRef();

    const {user1Image, user2Image} = useContext(chatSettingsContext);

    useEffect(()=>{
        conversationViewDOM.current.scrollTo(0,conversationViewDOM.current.scrollHeight);
    }, [chatHistory]);

    //i'm reversing this array here first because the css script will reverse the content of the container. This is because some styling settings has been done to ensure that messages start showing from the bottom of the container
    const reverseChat = [...chatHistory].reverse();

    return (
        <div ref={conversationViewDOM} className={Styles.conversationView}>
            {reverseChat.map((messageObj, id)=>{
                const messageType = messageObj.sender === "user1"? userTypes.firstPerson : userTypes.secondPerson;//set which perspective should be adopted (in this app we're basing the perspective on the user IDs)
                const key = messageObj.messageId;
                const senderImage = messageObj.sender === "user1"? user1Image : user2Image;//set the sender image.
                return <Message key={key} message={messageObj.message} senderImage={senderImage} type={messageType} />;
            })}
        </div>
    )
}