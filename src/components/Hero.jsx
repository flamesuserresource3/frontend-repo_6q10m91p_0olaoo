import { Shield, Rocket, BookOpen, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 px-3 py-1 text-sm font-medium ring-1 ring-emerald-500/30">
              <Shield className="h-4 w-4" />
              Cyber Learning Path • From Zero to Cyber Engineer
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Belajar Cyber Security yang Terstruktur, Praktis, dan Menarik
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Kuasai dasar hingga lanjutan: networking, keamanan sistem, red/blue team, cloud
              security, dan DevSecOps. Setiap modul dilengkapi latihan hands‑on dan tutorial step‑by‑step.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#curriculum"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-slate-900 font-semibold shadow hover:bg-emerald-400 transition"
              >
                <Rocket className="h-5 w-5" /> Mulai Belajar
              </a>
              <a
                href="#labs"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800/60 px-5 py-3 text-white font-semibold ring-1 ring-white/10 hover:bg-slate-700 transition"
              >
                <Terminal className="h-5 w-5" /> Coba Lab Praktik
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              {["Modul", "Lab", "Sertifikasi"].map((label, i) => (
                <div key={label} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                  <p className="text-3xl font-bold text-white">{[25, 40, 6][i]}+</p>
                  <p className="text-slate-400 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-emerald-500/20 blur-3xl rounded-full" />
            <img
              alt="Cyber security illustration"
              src="https://images.unsplash.com/photo-1553484771-10832a3b5d16?q=80&w=1600&auto=format&fit=crop"
              className="relative w-full h-[380px] object-cover rounded-2xl ring-1 ring-white/10 shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-xl bg-slate-900/80 backdrop-blur ring-1 ring-white/10 p-3">
                <BookOpen className="h-5 w-5 text-emerald-400" />
                <span className="text-sm text-white">Tutorial langkah demi langkah</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-slate-900/80 backdrop-blur ring-1 ring-white/10 p-3">
                <Shield className="h-5 w-5 text-emerald-400" />
                <span className="text-sm text-white">Fokus praktik dan best‑practice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
