// import React, {useState} from 'react';
// import './header.css';
// import { IconButton } from '@mui/material';
// import { SearchOutlined } from '@mui/icons-material';

// // import { AttachFile } from '@mui/icons-material';
// // import { MoreVert } from '@mui/icons-material';
// // import chats from "../../data/chats.json";

// // const sentences = [
// // 	"Hey,,how ya doin!",
// // 	"I am Good, how are you?.",
// // 	"What's you been up to?",

	
// // ];


// function Header(props) {
//     // const getRandomSentences = () => {
//     //     const randomIndex = Math.floor(Math.random() * sentences.length);
//     //     const sentence = sentences[randomIndex];
//     //     return sentence;
//     //   };
//     const[isOpen, setIsOpen] = useState(false);
//     const onMenuButtonClick = () => {
//     // console.log("Icon clicked");
//     setIsOpen(!isOpen)
//     }


//   const {contactData} = props;
  
//   return contactData == null ? <h1>No data</h1> : (

//     <div className='chat'>

//         <div className='chat_header'>
//             <img src={contactData.profile} alt="" id='p1'/>
//             <div className='chat_headerinfo'>
//                 <h2>{contactData.name}</h2>
//                 <p>{contactData.date}</p> 
//             </div>
//             <div id = 'right' className='chat_headerright'>
//                 <IconButton>
//                 <SearchOutlined />
//                 </IconButton>
//                 <button onClick={onMenuButtonClick}><svg className='menu' viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg></button> 
//                 {/* <button onClick={onMenuButtonClick}>
//                 <MoreVert />
//                 </button> */}
//                 <div className={`menu-class   ${isOpen ? 'visible':''}`}>
//                 <p>Contact Info </p>
//                 <p>Select Messages</p>
//                 <p>Mute notifications</p>
//                 <p>Clear messages</p>
//                 <p>Delete chat</p>
//                 </div>
//             </div>
//         </div>
//         <div>
//             <p className='chat_message'>{contactData.newmessage}</p>
//             <p className='chat_receiver'>{contactData.message}</p>
//         </div>
//         </div>
        
//   )
// }

// export default Header;