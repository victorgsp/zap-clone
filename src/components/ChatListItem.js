import React from "react";
import './ChatListItem.css'

export default ({onClick, active, data}) => {
    return (
        <div className={`chatlistItem ${active ? 'active': ''}`} onClick={onClick}>
            <img className="chatListItem--avatar" src={data.image} alt=""></img>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Opa, tudo bem? Consequat occaecat do eu cillum. Lorem id cillum occaecat cillum duis incididunt aliqua ad ut aliqua nisi amet. Esse dolore ipsum incididunt minim in pariatur veniam quis. Consectetur qui labore nostrud magna anim pariatur dolor consequat commodo quis reprehenderit. Commodo mollit dolore voluptate minim eu.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}