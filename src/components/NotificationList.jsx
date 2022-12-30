import Notification from "./Notification";
import React from "react";

function NotificationList({ notifications }) {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

export default NotificationList;
