import Styles from "./TextArea.module.css";

export default function TextArea({className, children, ...others}){
    const classes = `${Styles.textArea} ${className != undefined? className : ""}`

    return (
        <textarea className={classes} {...others}>{children}</textarea>
    )
}