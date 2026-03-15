import { Outlet } from "react-router-dom";

import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/layout/Header";

import "./index.css";

export function App() {
  return (
    <PageContainer>
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* centralized routing system */}
        <Outlet />
        <h2>Sou um Título - H2</h2>
        <h3>Sou um Título - H3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum explicabo ipsa dolorem soluta aut laboriosam recusandae sequi o officia aliquid ipsum? Sequi autem laborum mollitia corporis similique excepturi sunt. Quasi, dolor.</p>
      </main>
    </PageContainer>
  )
}
