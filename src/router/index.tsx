
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Homepage from "../layout/pages/homepage";
import Profile from "../layout/pages/profile";

export const router = createBrowserRouter([
    {
        path: "chapApp",
        element: <App />, // use outlet incase of parent component 
        children: [
            {
                path: "homepage",
                element: <Homepage />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
        
    },
    {
        path: '*',
        element: <> Not found</>
    }

]);

