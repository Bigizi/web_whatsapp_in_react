import React from 'react';
import './messagelist.css';
import HeaderLeft from './HeaderLeft';
import MessageCard from '../message-card';
import chats from "../../data/chats.json";

const { contacts } = chats;

const messageStatus = ["NOT_SENT", "SENT", "DELIVERED", "SEEN"];

function MessageList(props) {

    function onMessageClick(data){
        props.giveData(data);
        console.log(data) 
    }
    return (
        
        <aside className='aside-box'>
        <HeaderLeft />
        <div className='body-section'>
                {contacts.map(contact=>{
                    const date = new Date(contact.lastMessageTimeStamp);
                    return <MessageCard 
    
                        messageStatus = {messageStatus[contact.messageStatus]}
                        profile={contact.profilePictureURL} 
                        name={contact.names} 
                        date={date.toDateString()}
                        message={contact.lastMessage}
                        onMessageClick={onMessageClick}
                         />
                })}
            </div>
        </aside>
    )
            
    }

export default MessageList;