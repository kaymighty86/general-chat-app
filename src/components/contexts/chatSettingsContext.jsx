import { createContext, useState } from "react";

import user1_profileImage from "../../assets/users_pics/user1.png";
import user2_profileImage from "../../assets/users_pics/user2.png";

export let chatSettingsContext = createContext({
    currentSender: "user1",
    switchSender: ()=>{},
    user1Image: undefined,
    user2Image: undefined
});

export function ChatSettings({children}){

    const [sender, updateSender] = useState("user1");

    function switchSender(){
        switch(sender){
            case "user1": updateSender(()=>"user2");
            break;
            case "user2": updateSender(()=>"user1");
            break;
            default: updateSender(()=>"user1");
            break;
        }
    }

    const chatSettings = {
        currentSender: sender,
        switchSender,
        user1Image: user1_profileImage,
        user2Image: user2_profileImage
    }

    return(
        <chatSettingsContext.Provider value={chatSettings}>
            {children}
        </chatSettingsContext.Provider>
    )
}