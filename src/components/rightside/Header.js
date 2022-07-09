import React from 'react';
import './header.css';
import { IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { AttachFile } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';

function Header(props) {
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
        </div>
  )
}

export default Header