
import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import Homepage from "../pages/homepage";
import Profile from "../pages/profile";
import InfoPage from "../pages/infoPage";
import ChatPage from "../pages/chatPage";
import NotFoundPage from "../pages/not-found";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App , // use outlet incase of parent component 
        children: [
            {
                path: "/",
                Component: Homepage ,
            },
            {
                path: "/profile",
                Component: Profile ,
            },
            {
                path: "/infoPage",
                Component: InfoPage ,
            },
            {
                path: "/chatPage",
                Component: ChatPage ,
            },
            {
                path: "/not-found",
                Component: NotFoundPage ,
            },
            {
                path: '*',
                Component: ()=>  <Navigate to="/not-found" />
            }
        
        ],
        
    },

]);

