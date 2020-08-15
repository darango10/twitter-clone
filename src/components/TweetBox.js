import React, {useState} from 'react';
import '../styles/tweetbox.css'
import {Avatar, Button} from "@material-ui/core";
import db from "../firebase";

const TweetBox = () => {

    const [tweetValues, setTweetValues] = useState({
        message: '',
        image: ''
    })

    const handleChange = (e) => {
        setTweetValues({
            ...tweetValues,
            [e.target.name]: e.target.value
        })
    }

    const sendTweet = e => {
        e.preventDefault()
        db.collection('posts').add({
            displayName: 'Daniel Arango',
            username: 'darango',
            avatar: '',
            image: tweetValues.image,
            text: tweetValues.message,
            verified: true
        });

        setTweetValues({
            message: '',
            image: ''
        })
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={''}/>
                    <input
                        value={tweetValues.message}
                        name={'message'}
                        onChange={handleChange}
                        type="text"
                        autoComplete={'off'}
                        placeholder="What's happening?"/>
                </div>
                <input
                    className="tweetBox__imageInput"
                    type="text" placeholder="Optional: Enter image URL"
                    value={tweetValues.image}
                    name={'image'}
                    autoComplete={'off'}
                    onChange={handleChange}
                />
                <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;
