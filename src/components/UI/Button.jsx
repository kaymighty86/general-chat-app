import Styles from "./Button.module.css";

export default function Button({icon, className, children, ...others}){
    const classes = `${Styles.button} ${className != undefined? className : ""}`;

    const Icon = icon;

    return (
        <button className={classes} {...others}>{icon && <Icon style={{width : "1rem"}}/>}<div>{ children }</div></button>
    )
}