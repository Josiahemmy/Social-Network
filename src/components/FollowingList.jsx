import React from "react";
import UserCard from "./UserCard";

function FollowingList({ users }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default FollowingList;
