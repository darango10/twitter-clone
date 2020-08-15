import React from 'react';
import '../styles/feed.css'
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__header">
                <h1>Home</h1>
            </div>

            <TweetBox/>

            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    );
};

export default Feed;
