
import React from 'react'
import './messageview.css'
import Chat from '../../Chatcomponent/Chat'


function MessageView(props) {
    
  return (
    <section className="section-box">
        <Chat contactData={props.contactData} />
    </section>

  )

}

export default MessageView