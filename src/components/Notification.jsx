import { Link } from "react-router-dom";
import React from "react";

function Notification({ notification }) {
  return (
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
        <i className="fas fa-bell fa-2x text-gray-700" />
      </div>
      <div className="flex-1">
        <p className="text-gray-700 font-bold mb-2">
          {notification.sender.name}
        </p>
        <p className="text-gray-600 mb-2">{notification.message}</p>
        <Link
          to={`/profile/${notification.sender.id}`}
          className="text-blue-500 hover:underline"
        >
          View profile
        </Link>
      </div>
    </div>
  );
}

export default Notification;
