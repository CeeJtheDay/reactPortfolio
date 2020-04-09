import React from "react";
import avatar from "../../images/SunsetThailandPic.jpg";
import "./style.css";

const Avatar = () => {
    return (
        <img id="headerImage" alt="profilePic" src={avatar}></img>
    )
}

export default Avatar;