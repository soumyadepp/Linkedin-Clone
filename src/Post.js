import React from 'react'
import InputOptions from './InputOptions';
import { Avatar } from '@material-ui/core';
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import DeleteOutlineRounded from '@material-ui/icons/DeleteOutlineRounded';
function Post({ avatar, name, description, message, photoUrl }) {
    return <div className="post">
        <div className="post__header">
            <Avatar src="https://i.pinimg.com/736x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg" />
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
            <img src={photoUrl} alt="" />
        </div>
        <div className="post__buttons">
            <InputOptions title="Like" Icon={ThumbUpAltOutlinedIcon} color="gray" />
            <InputOptions title="Comment" Icon={ChatOutlinedIcon} color="gray" />
            <InputOptions title="Share" Icon={ShareOutlinedIcon} color="gray" />
            <InputOptions title="Send" Icon={SendOutlinedIcon} color="gray" />
            <InputOptions title="Delete" Icon={DeleteOutlineRounded} color="gray" />
        </div>
    </div>
}

export default Post
