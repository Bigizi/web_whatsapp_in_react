import './App.css';
import MessageList from '../message-list/MessageList';
import MessageView from '../rightside/MessageView';
import {useState} from "react";

function App() {
    const [contactData, setContactData] = useState({});
    const getData = (data) => {
        setContactData(data);
    }
    return (
            <>
            <MessageList giveData={getData} />
            <MessageView contactData={contactData} />
            </>
    );
    }

export default App;