import React, { useEffect, useState } from "react";
import { getMessages, sendMessage } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function Messaging({ recipientId }) {
  const dispatch = useDispatch();
  const { messages, currentUser } = useSelector((state) => state.chat);
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(getMessages(currentUser.id, recipientId));
  }, [dispatch, currentUser.id, recipientId]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage(currentUser.id, recipientId, message));
    setMessage("");
  };

  return (
    <div className="bg-gray-100 h-full p-4">
      <div className="h-64 overflow-y-scroll">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center mb-4 ${
              message.senderId === currentUser.id
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`w-48 h-24 bg-white rounded-lg p-4 ${
                message.senderId === currentUser.id ? "ml-4" : "mr-4"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 rounded-lg"
          type="text"
          placeholder="Type your message here..."
          value={message}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Messaging;
