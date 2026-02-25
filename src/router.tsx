import { createBrowserRouter } from "react-router-dom";

import { App } from "@/App";

// pages
import { Dashboard } from "@/pages/Dashboard";
import { Register } from "@/pages/Register"
import { History } from "@/pages/History"
import { About } from "@/pages/About"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "/registrar-acerto",
                element: <Register />
            },
            {
                path: "/historico-de-acertos",
                element: <History />
            },
            {
                path: "/sobre",
                element: <About />
            },
            {
                path: "*",
                element: <h1>Not Found.</h1>
            }
        ]
    }
])
