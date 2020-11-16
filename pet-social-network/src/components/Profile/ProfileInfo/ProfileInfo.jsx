import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.ava}>
                <img src="./self.jpg"></img>
            </div>
            <div className={s.descriptionBlock}>
                <h2>Alexandr Michurin</h2>
            </div>
        </div>
    );
};

export default ProfileInfo;