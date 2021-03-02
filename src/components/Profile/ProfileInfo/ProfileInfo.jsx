/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    let jobY = "Я в поисках работы";
    let jobN = "Я работаю";
    if (!props.profile) return <Preloader/>;
if (props.profile.lookingForAJob) {
    jobN = jobY;
}
    return (
        <div className={classes.item}>
            <div>
                <img src="https://drugoy.com.ua/uploads/blog/41e4d-kilimandzharo_vysochayshaja_vershina_afriki_kilimanjaro-2.jpg" className={classes.img}
                     alt="Text"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>{jobN}</div>
                Ava+Description
            </div>
        </div>
    );
}
export default ProfileInfo;