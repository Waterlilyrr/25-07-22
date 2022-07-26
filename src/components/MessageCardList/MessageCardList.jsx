import { useState, useEffect } from "react";
import { GET } from "../../utils/api.js";
import MessageCard from "../MessageCard";
import "./index.css";

const MessageCardList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    // fetch("https://edgemony-backend.herokuapp.com/messages")
    //   .then((res) => res.json())
    //   .then((data) => setMessageList(data));
    GET("messages").then((data) => {
      setMessageList(data);
    });
  }, []);

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList
          .reverse()
          .map((message) => (
            <MessageCard textContent={message} key={message["id"]} />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MessageCardList;
