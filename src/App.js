import React, {useState, useEffect} from 'react';
import "./App.css";

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

export default () => {

    const[chatlist, setChatList] = useState([
        {chatId: 1, title: 'fulano de tal', image: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg'},
        {chatId: 2, title: 'fulano de tal', image: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg'},
        {chatId: 3, title: 'fulano de tal', image: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg'},
        {chatId: 4, title: 'fulano de tal', image: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg'},]);
    const[activeChat, setActiveChat] = useState({});

    return (
        <div className="app-window">
            <div className="sidebar">
                <header>
                    <img className="header--avatar" src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt=""></img>
                    <div className="header--buttons">
                        <div className="header--btn">
                            <DonutLargeIcon style={{ color: '#919191' }} />
                        </div>
                        <div className="header--btn">
                            <ChatIcon style={{ color: '#919191' }} />
                        </div>
                        <div className="header--btn">
                            <MoreVertIcon style={{ color: '#919191' }} />
                        </div>
                    </div>
                </header>
                <div className="search">
                    <div className="search--input">
                        <SearchIcon fontSize="small" style={{ color: '#919191' }}></SearchIcon>
                        <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
                    </div>
                </div>
                <div className="chatlist">
                    {chatlist.map((item, key) => (
                        <ChatListItem 
                            key={key}
                            data={item}
                            active={item.chatId == activeChat.chatId}
                            onClick={() => setActiveChat(item)}></ChatListItem>
                    ))}
                </div>
            </div>
            <div className="contentarea">
                {activeChat.chatId !== undefined &&                     
                    <ChatWindow/>
                }
                {activeChat.chatId === undefined &&                     
                    <ChatIntro/>
                }
            </div>
        </div>
    );
}