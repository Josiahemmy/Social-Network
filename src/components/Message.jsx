import React from "react";

function Message({ message, currentUserId }) {
  const isCurrentUser = message.senderId === currentUserId;

  return (
    <div
      className={`flex items-center mb-4 ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`w-48 h-24 bg-white rounded-lg p-4 ${
          isCurrentUser ? "ml-4" : "mr-4"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}

export default Message;
