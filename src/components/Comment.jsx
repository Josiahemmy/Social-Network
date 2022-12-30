import React from "react";

function Comment({ comment }) {
  return (
    <div className="border-l-4 border-gray-600 pl-4 mb-4">
      <p className="text-lg font-semibold">{comment.author}</p>
      <p className="text-gray-700">{comment.content}</p>
    </div>
  );
}

export default Comment;
