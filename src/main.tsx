import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"
import { App } from "./App.tsx"

// pages
import { Dashboard } from "./pages/Dashboard.tsx"
import { Register } from "./pages/Register.tsx"
import { History } from "./pages/History.tsx"
import { About } from "./pages/About.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route index element={<Dashboard />} />
          <Route path="/registrar-acerto" element={<Register />} />
          <Route path="/historico-de-acertos" element={<History />} />
          <Route path="/sobre" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
