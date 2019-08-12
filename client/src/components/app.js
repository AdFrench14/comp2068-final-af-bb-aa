import React, { useState } from "react";
import MainNav from "./partials/main_nav";
import Routes from "./routes";
import { NotificationProvider } from "./notification_context";
import Notifier from "./notifier";

export default function App() {
  const [notification, setNotification] = useState({ status: null, message: null });

  return (
    <NotificationProvider value={{ notification: notification, setNotification: setNotification }}>
      <MainNav />
      <Notifier />
      <Routes />
    </NotificationProvider>
  );
}