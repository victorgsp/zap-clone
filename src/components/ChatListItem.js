import React from "react";
import './ChatListItem.css'

export default () => {
    return (
        <div className="chatlistItem">
            <img className="chatListItem--avatar" src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt=""></img>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Victor Guedes</div>
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