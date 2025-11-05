import Hero from "./components/Hero";
import Curriculum from "./components/Curriculum";
import Labs from "./components/Labs";
import Roadmap from "./components/Roadmap";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-950/60 ring-1 ring-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-extrabold tracking-tight text-lg">
          CyberPath
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#curriculum" className="text-slate-300 hover:text-white">Kurikulum</a>
          <a href="#labs" className="text-slate-300 hover:text-white">Lab</a>
          <a href="#roadmap" className="text-slate-300 hover:text-white">Roadmap</a>
          <a
            href="#labs"
            className="rounded-md bg-emerald-500 text-slate-900 font-semibold px-3 py-1.5 hover:bg-emerald-400"
          >Mulai</a>
        </div>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Curriculum />
        <Labs />
        <Roadmap />
      </main>
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} CyberPath • Belajar hingga jadi Cyber Engineer</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-slate-400 hover:text-white" href="#curriculum">Kurikulum</a>
            <a className="text-slate-400 hover:text-white" href="#labs">Lab</a>
            <a className="text-slate-400 hover:text-white" href="#roadmap">Roadmap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
