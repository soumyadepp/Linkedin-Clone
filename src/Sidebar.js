import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'
import { selectUser } from './features/userSlice'
function Sidebar() {
    const user = useSelector(selectUser);
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1620654464797-adc37f13cdd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoUrl} />
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
                    <p className="sidebar__statNumber">4,322</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                <div className="sidebar__recentItems">
                    <p><span className="spanhash">#</span>Reactjs</p>
                </div>
                <div className="sidebar__recentItems">
                    <p><span className="spanhash">#</span>Software</p>
                </div>
                <div className="sidebar__recentItems">
                    <p><span className="spanhash">#</span>Programming</p>
                </div>
                <div className="sidebar__recentItems">
                    <p><span className="spanhash">#</span>Python projects</p>
                </div>
                <div className="sidebar__recentItems">
                    <p><span className="spanhash">#</span>Data analysis</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
