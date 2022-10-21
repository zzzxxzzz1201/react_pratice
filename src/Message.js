import React from 'react';
import "./style/style.css";
const Message = ({msg,messages,setMessages}) => {
    const deleteHandler = () =>{
        setMessages(messages.filter(m => m.id !== msg.id))
    }
  return (
    <div className="msg">
        <p>{msg.input}</p>
        <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Message;