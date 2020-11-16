import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    return (
        <div className={s.item}>
            <img className={s.ava} src="./ava.png"/>
            {props.message}
            <div className={s.likes}>
                <div><img className={s.like} src="./like.png"></img></div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;
