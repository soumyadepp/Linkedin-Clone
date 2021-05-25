import React from 'react'
import './Headeroption.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'

function Headeroption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);
    return (
        <div>
            <div className='headerOption' onClick={onClick}>
                {Icon && <Icon className='headerOption__icon' />}
                {avatar && <Avatar className='headerOption__icon' src={user?.photoUrl} />}
                <h3 className='headerOptionTitle'>{title}</h3>
            </div>
        </div>
    )
}

export default Headeroption;