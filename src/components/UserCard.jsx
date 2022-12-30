import React from "react";

function UserCard({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={user.profilePicture}
        alt="Profile picture"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="font-bold text-xl mb-2">{user.name}</h1>
      <p className="text-gray-700 mb-4">{user.bio}</p>
    </div>
  );
}

export default UserCard;
