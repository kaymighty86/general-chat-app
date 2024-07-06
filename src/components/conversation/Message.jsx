import Styles from "./Message.module.css";

import MessageBubble from "./MessageBubble";
import UserPic from "../general/UserPic";

import defaultUserImage from "../../assets/users_pics/default_user_pic.png"

import userTypes from "../../utils/userTypes.json";

export default function Message({message, senderImage, type}){

    const perspectiveStyle = type === userTypes.firstPerson? Styles.firstPerson : Styles.secondPerson;//set the message perpective style to adopt
    const appliedUserImg = senderImage || defaultUserImage;//set the user image to adopt

    return (
        <div className={`${Styles.messageComponent} ${perspectiveStyle}`}>
            <MessageBubble message={message} className={`${Styles.messageBubble} ${perspectiveStyle}`} />
            <UserPic imageFile={appliedUserImg} className={Styles.userPic}/>
        </div>
    )
}