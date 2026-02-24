import { PageContainer } from "./components/layout/PageContainer";
import { Header } from "./components/layout/Header";

export function App() {
  return (
    <PageContainer>
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-8">
        <h1>Dashboard</h1>
      </main>
    </PageContainer>
  )
}
