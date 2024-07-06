import Styles from "./MessageInput.module.css";

import { useState } from "react";

import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import TextArea from "./UI/TextArea";
import Button from "./UI/Button";

export default function MessageInput({onSend}){

    const [message, updateMessage] = useState("");

    function onSubmitHandler(){
        if(message != ""){
            onSend(message);
            updateMessage("");//clear the message box by reseting this state
        }
    }

    return (
        <div className={Styles.MessageInputSectionWrapper}>
            <TextArea className={Styles.InputBox} placeholder="Type your message here." value={message} onChange={(event)=>{updateMessage(event.target.value)}}/>
            <Button icon={PaperAirplaneIcon} onClick={onSubmitHandler} className={Styles.sendButton}/>
        </div>
    )
}