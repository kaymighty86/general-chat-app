import Styles from "./ConversationView.module.css";

import Message from "./Message";
import userTypes from "../../utils/userTypes.json";

export default function ConversationView({chatHistory}){
    return (
        <div className={Styles.conversationView}>
            <Message message={"Hi how are you today??"} type={userTypes.firstPerson}/>
            <Message message={"Hello I'm fine, and you?"} type={userTypes.secondPerson}/>
        </div>
    )
}