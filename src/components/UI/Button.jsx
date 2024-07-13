import Styles from "./Button.module.css";

import { useContext } from "react";
import { appSettingsContext } from "../contexts/appSettingsContext";

export default function Button({icon, className, children, ...others}){
    const {appTheme} = useContext(appSettingsContext);

    const classes = `${Styles.button} ${className || ""} ${appTheme=="light"? Styles.light : Styles.dark}`;

    const Icon = icon;

    return (
        <button className={classes} {...others}>{icon && <Icon style={{width : "1rem"}}/>}<div>{ children }</div></button>
    )
}