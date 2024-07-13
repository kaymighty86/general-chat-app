import { createContext, useState } from "react";

export const appSettingsContext = createContext({
    appTheme: "light",
    switchAppTheme: ()=>{}
});

export function AppSettings({children}){
    
    const [appTheme, updateAppTheme] = useState('light');

    function switchAppTheme(){
        let newTheme = "";
        switch(appTheme){
            case "light": 
                newTheme = "dark";
            break;
            case "dark": 
                newTheme = "light";
            break;
            default: 
                newTheme = "light";
            break
        }

        updateAppTheme(()=>{
            document.documentElement.setAttribute("theme",newTheme);//update the theme on the root element
            return newTheme;
        });

    }

    const appSettings = {
        appTheme,
        switchAppTheme
    }

    return (
        <appSettingsContext.Provider value={appSettings}>
            {children}
        </appSettingsContext.Provider>
    )
}