import { Outlet } from "react-router-dom";

import { Header } from "@/components/layout/Header";

import "./index.css";

export function App() {
  return (
    <div className="min-h-screen bg-background-secondary text-text-primary">
      <Header />

      <div className="px-(--layout-container-padding-x) py-(--layout-container-padding-y)">
        <main className="mx-auto h-[calc(100vh-var(--header-height)-calc(var(--layout-container-padding-y)*2))] w-full max-w-(--layout-container-max-width) overflow-y-auto rounded-(--radius-default) bg-background-surface px-4 py-4 tablet:px-5 tablet:py-5 desktop:px-6 desktop:py-6">
          {/* centralized routing system */}
          <Outlet />
        </main>
      </div>
    </div>
  )
}
