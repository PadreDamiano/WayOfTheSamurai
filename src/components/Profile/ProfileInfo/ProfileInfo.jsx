import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg" className={classes.img}/>
            </div>
            <div className={classes.item}>
                Ava + Discription
            </div>
        </div>
    )
}
export default ProfileInfo;
