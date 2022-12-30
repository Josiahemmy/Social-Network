/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from the database or local storage
    const userData = retrieveUserData(userId);
    setUser(userData);
  }, [userId]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h1 className="font-bold text-xl mb-4">{user.name}</h1>
      <img
        src={user.profilePicture}
        alt=""
        className="w-32 h-32 rounded-full mb-4"
      />
      <p className="font-bold mb-2">Location:</p>
      <p className="text-gray-700 mb-4">{user.location}</p>
      <p className="font-bold mb-2">Bio:</p>
      <p className="text-gray-700 mb-4">{user.bio}</p>
      <p className="font-bold mb-2">Interests:</p>
      <p className="text-gray-700 mb-4">{user.interests}</p>
      <p className="font-bold mb-2">Work:</p>
      <p className="text-gray-700 mb-4">{user.work}</p>
      <p className="font-bold mb-2">Education:</p>
      <p className="text-gray-700 mb-4">{user.education}</p>
      <p className="font-bold mb-2">Contact:</p>
      <p className="text-gray-700 mb-4">{user.contact}</p>
      <p className="font-bold mb-2">Links:</p>
      <p className="text-gray-700 mb-4">{user.links}</p>
      <button
        className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
        onClick={() => editProfile(user)}
      >
        Edit Profile
      </button>
    </div>
  );
}

export default UserProfile;
