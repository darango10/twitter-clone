import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SidebarOptions from "./SidebarOptions";
import Button from "@material-ui/core/Button";
import '../styles/sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOptions active title={'Home'} Icon={HomeIcon}/>
            <SidebarOptions title={'Explore'} Icon={SearchRoundedIcon}/>
            <SidebarOptions title={'Notifications'} Icon={NotificationsNoneRoundedIcon}/>
            <SidebarOptions title={'Messages'} Icon={MailOutlineRoundedIcon}/>
            <SidebarOptions title={'Lists'} Icon={ListAltIcon}/>
            <SidebarOptions title={'Bookmarks'} Icon={BookmarkBorderIcon}/>
            <SidebarOptions title={'Profile'} Icon={PersonOutlineRoundedIcon}/>
            <SidebarOptions title={'More'} Icon={MoreHorizIcon}/>

            <Button
                variant='outlined'
                className="sidebar__tweet"
                fullWidth
            >Tweet</Button>
        </div>
    );
};

export default Sidebar;
