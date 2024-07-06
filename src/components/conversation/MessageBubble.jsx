import Styles from "./MessageBubble.module.css";

export default function MessageBubble({message, className}){


    return (
        <div className={`${className} ${Styles.messageBubble}`}>
            <p>{message}</p>
        </div>
    )
}