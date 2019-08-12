import { createContext } from "react";

const NotificationContext = createContext();

export const NotificationProvider = NotificationContext.Provider;
export const NotificationConsumer = NotificationContext.Consumer;

export default NotificationContext;