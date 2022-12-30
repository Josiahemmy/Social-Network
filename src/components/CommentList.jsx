import Comment from "./Comment";
import React from "react";

function CommentList({ comments }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
