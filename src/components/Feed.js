import React, {useEffect, useState} from 'react';
import '../styles/feed.css'
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../firebase"
import FlipMove from "react-flip-move";

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h1>Home</h1>
            </div>

            <TweetBox/>

            <FlipMove>
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        displayName={post.displayName} username={post.username}
                        verified={post.verified} text={post.text}
                        image={post.image}
                        avatar={post.avatar}
                    />
                ))}
            </FlipMove>


        </div>

    );
};

export default Feed;
