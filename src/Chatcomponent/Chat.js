
import React from 'react';
import { IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import './chat.css';
import { SearchOutlined } from '@mui/icons-material';
import { AttachFile } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';

function Chat(props) {
const {contactData} = props;

  return contactData == null ? <h1>No data</h1> : (
    
    <div className='chat'>

        <div className='chat_header'>
            <img src={contactData.profile} alt="" id='picGetFreeCourses.Co-Udemy-Node.js API Masterclass With Express & MongoDB'/>
            <div className='chat_headerinfo'>
                <h2>{contactData.name}</h2>
                <p>{contactData.date}</p>
            </div>
            <div id = 'right' className='chat_headerright'>
                <IconButton>
                <SearchOutlined />
                </IconButton>
                <IconButton>
                <AttachFile />
                </IconButton>
                <IconButton>
                <MoreVert />
                </IconButton>
            </div>
        </div>

        <div className='chat_body'>
            <p className='chat_message'>Hey guys
            <span className='chat_time'>3:00PM</span>
            </p>
            <p className='chat_receiver'>Fine Boss
            <span className='chat_time'>3:10PM</span>
            </p>
        </div>

        <div className='chat_footer'>
        {/* <InsertEmoticonIcon /> */}
        <form>
            <input type="text" />
            <button>Send</button>
        </form>
        <MicIcon />
        </div>

    </div>
  )
}

export default Chat