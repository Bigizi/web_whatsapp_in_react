import React from 'react'
import MicIcon from '@mui/icons-material/Mic';
import './footer.css'
import { AttachFile } from '@mui/icons-material';

function Footer() {
  return (
    <div className='chat'>
        <div className='chat_footer'>
        <form id='frm'>
          <AttachFile id = 'att'/>
            <input type="text" id='in-put'/>
            <button id='btn'>Send</button>
            <MicIcon id='icon'/>
        </form>
        
        </div>
    </div>    
  )
}

export default Footer
