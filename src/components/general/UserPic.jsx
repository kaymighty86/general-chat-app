// import Styles from "./UserPic.module.css";
import Styles from "./UserPic.module.css"

export default function UserPic({imageFile, className}){
    return (
        <img src={imageFile} alt={"user pic"} className={`${Styles.userPic} ${className}`} />
    )
}