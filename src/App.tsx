import './App.css'

function App() {
  return (
    <div className="min-h-screen p-6">
      <h1>
        Olá, colportor(a)! <span className="text-text-secondary">Vamos fazer o acerto?</span>
      </h1>

      <div className="mt-6 bg-background-surface p-4 rounded-(--radius-default) border border-neutral-secondary">
        <h2 className="text-text-secondary">Produção diária registrada</h2>
        <p className="mt-2 text-brand-accent">R$ 2.540,00</p>
      </div>

      <footer className="mt-6">
        <h4 className="text-text-secondary font-(--font-bold)">
          ColportApp - Gestão de Colportagem
        </h4>
        <p className="italic">
          “E será pregado este evangelho do reino por todo o mundo, para testemunho a todas as nações. Então, virá o fim”. (Mateus 24:14)
        </p>

      </footer>
    </div>
  )
}

export default App
