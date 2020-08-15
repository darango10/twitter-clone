import React from 'react';
import '../styles/widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import {TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId="858551177860055040"/>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="darango1093"
                    options={{height: 400}}
                />
                <TwitterShareButton
                    url={'https://facebook.com/cleverprogrammer'}
                    options={{text: "#reactjs is awesome", via: "cleverqazi"}}
                />
            </div>
        </div>
    );
};

export default Widgets;
