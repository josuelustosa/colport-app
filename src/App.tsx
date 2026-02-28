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
      </main>
    </PageContainer>
  )
}
