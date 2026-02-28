import type { RouteObject } from "react-router-dom"
import { lazy } from "react"

const Dashboard = lazy(() => import("@/pages/Dashboard"))
const Register = lazy(() => import("@/pages/Register"))
const History = lazy(() => import("@/pages/History"))
const About = lazy(() => import("@/pages/About"))

export const routes: RouteObject[] = [
  {
    index: true,
    element: <Dashboard />
  },
  {
    path: "registrar-acerto",
    element: <Register />,
    
    // Forçar um erro para testar o RouteErrorBoundary
    // loader: () => {
    //   throw new Error("Erro simulado de rota")
    // }
  },
  {
    path: "historico-de-acertos",
    element: <History />,
  },
  {
    path: "sobre",
    element: <About />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]
