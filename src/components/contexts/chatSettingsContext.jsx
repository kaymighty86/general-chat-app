import { createContext, useState } from "react";

export let chatSettingsContext = createContext({
    currentSender: "user1",
    swtichSender: ()=>{}
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
        switchSender
    }

    return(
        <chatSettingsContext.Provider value={chatSettings}>
            {children}
        </chatSettingsContext.Provider>
    )
}