import React from 'react'
import { Avatar } from "@material-ui/core"
import "./Sidebar.css"
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1532892939738-86e29515dc9e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNwbGFzaCUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="waves" />
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h3>{user.email}</h3>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>

        </div>
    )
}

export default Sidebar
