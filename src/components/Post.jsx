import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import React from "react";
import UserCard from "./UserCard";

function Post({ post, currentUser }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
      <UserCard user={post.user} />
      <p className="font-bold text-xl mb-2">{post.title}</p>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <CommentForm postId={post.id} />
      <CommentList comments={post.comments} currentUser={currentUser} />
    </div>
  );
}

export default Post;
