import React from 'react';
import '../styles/SidebarOptions.css'

const SidebarOptions = ({active, title, Icon}) => {
    return (
        <div className={`sidebarOptions ${active && 'sidebarOptionsActive'}`}>
            <Icon/>
            <h2>{title}</h2>
        </div>
    );
};

export default SidebarOptions;
