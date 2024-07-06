import Styles from "./ChatHeader.module.css";
import appInfo from "../utils/appInfo.json";

import Button from "./UI/Button";

import { SunIcon, UserIcon } from "@heroicons/react/20/solid";

export default function ChatHeader(){
    return (
        <section className={Styles.chatHeader}>
            <div><p className={Styles.chatSubject}>{appInfo.appName}</p></div>
            <div>
                <Button icon={UserIcon}><b>{">"}</b></Button>
                <Button icon={SunIcon}/>
            </div>
        </section>
    )
}