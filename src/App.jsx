import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Formacao from "./components/Formacao";
import Habilidades from "./components/Habilidades";
import Contato from "./components/Contato";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1b]">
      <Navbar />
      <Hero />
      <Projetos />
      <Formacao />
      <Habilidades />
      <Contato />
      <footer className="bg-[#0a0f1b] border-t border-white/5 py-6 text-center">
        <p className="font-mono text-slate-600 text-xs">
          © 2025 Gabriel Fernando de Lima · Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}

export default App;
