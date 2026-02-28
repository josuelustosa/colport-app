import { createBrowserRouter, Outlet } from "react-router-dom"
import { Suspense } from "react"

import { App } from "@/App"
import { routes } from "./routes"
import { RouteErrorBoundary } from "./RouteErrorBoundary"

const wrappedRoutes = routes.map((route) => ({
    ...route,
    element: route.element ? (
        <Suspense fallback={<div>Carregando...</div>}>
            {route.element}
        </Suspense>
    ) : undefined,
}))

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Outlet />,
                errorElement: <RouteErrorBoundary />,
                children: wrappedRoutes,
            }
        ]
    },
])
