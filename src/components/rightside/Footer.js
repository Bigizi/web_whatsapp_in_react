import React from 'react'
import MicIcon from '@mui/icons-material/Mic';
import './footer.css'

function Footer() {
  return (
    <div className='chat'>
        <div className='chat_footer'>
        <form>
            <input type="text" />
            <button>Send</button>
        </form>
        <MicIcon />
        </div>
    </div>    
  )
}

export default Footer