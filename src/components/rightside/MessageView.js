
import React from 'react'
import './messageview.css'
import Header from './Header'
import MessageBody from './MessageBody'
import Footer from './Footer'


function MessageView(props) {
    
  return (
    <section className="section-box">
        <Header contactData={props.contactData}/>
        <MessageBody />
        <Footer />
    </section>

  )

}

export default MessageView