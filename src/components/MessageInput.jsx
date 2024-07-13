import Styles from "./MessageInput.module.css";

import { useState, useContext } from "react";
import { appSettingsContext } from "./contexts/appSettingsContext";

import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import TextArea from "./UI/TextArea";
import Button from "./UI/Button";

export default function MessageInput({onSend}){

    const [message, updateMessage] = useState("");
    const {appTheme} = useContext(appSettingsContext);

    function onSubmitHandler(){
        if(message != ""){
            onSend(message);
            updateMessage("");//clear the message box by reseting this state
        }
    }

    return (
        <div className={`${Styles.MessageInputSectionWrapper} ${appTheme=="light"? Styles.light : Styles.dark}`}>
            <TextArea className={`${Styles.InputBox} ${appTheme == "light"? Styles.light : Styles.dark}`} placeholder="Type your message here." value={message} onChange={(event)=>{updateMessage(event.target.value)}}/>
            <Button icon={PaperAirplaneIcon} onClick={onSubmitHandler} className={Styles.sendButton}/>
        </div>
    )
}