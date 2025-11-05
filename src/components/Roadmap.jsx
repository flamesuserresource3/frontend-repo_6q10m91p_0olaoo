import { Rocket, Trophy, Shield, Code, BookOpen } from "lucide-react";

const stages = [
  {
    title: "Pemula (0-2 Bulan)",
    icon: <BookOpen className="h-5 w-5 text-emerald-400" />,
    focus: [
      "Dasar OS & jaringan",
      "Keamanan fundamental",
      "Lab Linux & Wireshark",
    ],
    certs: ["CompTIA ITF+", "NDG Linux"]
  },
  {
    title: "Intermediate (2-6 Bulan)",
    icon: <Code className="h-5 w-5 text-emerald-400" />,
    focus: [
      "Web pentest dasar & blue team",
      "Scripting (Python/Bash)",
      "Vuln management",
    ],
    certs: ["eJPT", "AZ-900/CCSK"]
  },
  {
    title: "Advanced (6-12 Bulan)",
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    focus: [
      "IR & threat hunting",
      "Privilege escalation",
      "Cloud & container security",
    ],
    certs: ["eCPPT/eWPT", "GCIA/GCIH"]
  },
  {
    title: "Cyber Engineer (12+ Bulan)",
    icon: <Trophy className="h-5 w-5 text-emerald-400" />,
    focus: [
      "Arsitektur & automation",
      "DevSecOps & detection engineering",
      "Governance & risk",
    ],
    certs: ["OSCP (opsional)", "CISSP (berpengalaman)"]
  },
];

function Stage({ title, icon, focus, certs }) {
  return (
    <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-300 font-medium">Fokus</p>
          <ul className="mt-2 list-disc pl-5 text-slate-300 text-sm space-y-1">
            {focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm text-slate-300 font-medium">Rekomendasi Sertifikasi</p>
          <ul className="mt-2 list-disc pl-5 text-slate-300 text-sm space-y-1">
            {certs.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-slate-950 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Roadmap ke Cyber Engineer</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">
              Ikuti tahapan berikut, ukur progres tiap 2–4 minggu, dan konsolidasikan skill melalui proyek nyata.
            </p>
          </div>
          <Rocket className="hidden md:block h-10 w-10 text-emerald-400" />
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {stages.map((s) => (
            <Stage key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
