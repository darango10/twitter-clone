import React from 'react';
import '../styles/tweetbox.css'
import {Avatar, Button} from "@material-ui/core";

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={''}/>
                    <input type="text" placeholder="What's happening?"/>
                </div>
                <input className="tweetBox__imageInput" type="text" placeholder="Enter image URL"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;
