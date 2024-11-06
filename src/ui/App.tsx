import React from "react"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

import Analyze from "./routes/analyze";
import Workspace from "./routes/workspace";
import Reports from "./routes/reports";
import Samples from "./routes/samples";
import Help from "./routes/help";
import Settings from "./routes/settings";
import Login from "./routes/login";

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
                    {
                        path: "/",
                        element: <Login/>,
                    },
        ]
    },
    {
        element: <MainLayout />,
        children: [
                    {
                        path: "/workspace",
                        element: <Workspace/>,
                    },
                    {
                        path: "/analyze",
                        element: <Analyze/>,
                    },
                    {
                        path: "/reports",
                        element: <Reports/>,
                    },
                    {
                        path: "/samples",
                        element: <Samples/>,
                    },
                    {
                        path: "/help",
                        element: <Help/>,
                    },
                    {
                        path: "/settings",
                        element: <Settings/>,
                    }
        ]
    }
]);
const App = () => {
    return (

            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
    );
}

export default App;