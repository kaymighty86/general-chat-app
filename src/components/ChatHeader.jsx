import Styles from "./ChatHeader.module.css";
import appInfo from "../utils/appInfo.json";

import Button from "./UI/Button";
import { chatSettingsContext } from "./contexts/chatSettingsContext";
import { appSettingsContext } from "./contexts/appSettingsContext";
import UserPic from "./general/UserPic";

import { useContext } from "react";

import { SunIcon, MoonIcon, UserIcon } from "@heroicons/react/20/solid";

export default function ChatHeader(){
    const {currentSender, switchSender, user1Image, user2Image} = useContext(chatSettingsContext);
    const {appTheme, switchAppTheme} = useContext(appSettingsContext);

    return (
        <section className={Styles.chatHeader}>
            <div>
                <p className={Styles.chatSubject}>{appInfo.appName}</p>
            </div>
            <div className={Styles.settingsContainer}>
                <UserPic imageFile={currentSender === "user1"? user1Image : user2Image} />
                <Button icon={UserIcon} onClick={switchSender}><b>{currentSender === "user1"? ">" : "<"}</b></Button>
                <Button icon={appTheme == "light"? MoonIcon : SunIcon} onClick={switchAppTheme}/>
            </div>
        </section>
    )
}