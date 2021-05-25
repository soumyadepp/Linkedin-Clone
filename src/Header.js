import React from 'react';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import Headeroption from './Headeroption';
import HomeIcon from '@material-ui/icons/Home';
import SuperviserAccountIcon from '@material-ui/icons/SupervisorAccount';
import SearchIcon from '@material-ui/icons/Search';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';

import './Header.css';
function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div>
            <div className="header">
                <div className="header_left">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                    <div className="header_search">
                        <SearchIcon />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="header_right">
                    <Headeroption Icon={HomeIcon} title='Home' />
                    <Headeroption Icon={SuperviserAccountIcon} title='MyNetwork' />
                    <Headeroption Icon={BusinessCenterIcon} title='Jobs' />
                    <Headeroption Icon={ChatIcon} title='Chat' />
                    <Headeroption Icon={NotificationIcon} title='Notifications' />
                    <Headeroption avatar={true} onClick={logoutOfApp} title='me' />
                </div>
            </div>
        </div>
    )
}

export default Header
