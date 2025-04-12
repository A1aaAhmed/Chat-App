import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/homepage";
import Profile from "../pages/profile";
import InfoPage from "../pages/infoPage";
import ChatPage from "../pages/chat";
import NotFoundPage from "../pages/not-found";
import contactsPage from "../pages/contacts";
import callsPage from "../pages/calls";
import settingsPage from "../pages/settings";

export const router = createBrowserRouter([

  {
    path: "/",
    Component: App, // use outlet incase of parent component
    children: [
      {
        path: "/",
        Component: Homepage,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/infoPage",
        Component: InfoPage,
      },
      {
        path: "/chat/:id",
        Component: ChatPage,
      },
      {
        path: "/not-found",
        Component: NotFoundPage,
      },
      {
        path: "*",
        Component: () => <Navigate to="/not-found" />,
      },
      {
        path: "/user/:id",
        Component: InfoPage,
      },
      {
        path: "/contacts",
        Component: contactsPage,
      },
      {
        path: "/calls",
        Component: callsPage,
      },
      {
        path: "/settings",
        Component: settingsPage,
      },
    ],
  },]);
