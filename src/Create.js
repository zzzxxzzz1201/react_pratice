import React, {useState} from 'react'
import {v4 as uuidv4} from "uuid";
const Create = ({messages,setMessages}) => {
    let [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setMessages([...messages,{input,id:uuidv4()}]);
        setInput("");
    };

    const inputHandler = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    }
  return (
    <form action="">
        <input onChange = {inputHandler} type="text" />
        <button onClick = {submitHandler}>Summit</button></form>
  )
}

export default Create