import React from 'react';
import st from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={st.friendItem}>
            <img className={st.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={st.name}>{name}</p>
            <p className={st.status}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};

export default FriendListItem;
