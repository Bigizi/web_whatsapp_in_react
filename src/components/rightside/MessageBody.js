import React from 'react';
import './messagebody.css';


function MessageBody() {
  

  return  (
    
    <div className='chat'>

        <div className='chat_body'>
            <p className='chat_message'>Hey guys
            <span className='chat_time'>3:00PM</span>
            </p>
            <p className='chat_receiver'>Fine Boss
            <span className='chat_time'>3:10PM</span>
            </p>
        </div>

    </div>
  )
}

export default MessageBody;