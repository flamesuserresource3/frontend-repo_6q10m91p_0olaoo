import { BookOpen, Lock, Network, Cpu, Code } from "lucide-react";

const modules = [
  {
    title: "Fundamentals",
    icon: <BookOpen className="h-5 w-5 text-emerald-400" />,
    desc:
      "Bangun fondasi kuat: konsep keamanan, OS, jaringan, dan mindset attacker/defender.",
    items: [
      {
        name: "Dasar Keamanan & Mindset",
        steps: [
          "CIA Triad, Threat Modeling, Kerangka kerja NIST/ISO",
          "Terminologi: vuln, exploit, risk, CVE, CVSS",
          "Legal & etika: scope, izin, responsible disclosure",
        ],
      },
      {
        name: "Linux & Windows Essentials",
        steps: [
          "Command-line, proses, service, permission",
          "Hardening dasar: user/group, firewall, update",
          "Logging & audit: journalctl, Event Viewer",
        ],
      },
      {
        name: "Jaringan untuk Cyber",
        steps: [
          "OSI/TCP-IP, routing, DNS, DHCP",
          "Tools: ping, traceroute, tcpdump, Wireshark",
          "Model ancaman di layer jaringan",
        ],
      },
    ],
  },
  {
    title: "Blue Team",
    icon: <Lock className="h-5 w-5 text-emerald-400" />,
    desc: "Pertahanan: hardening, deteksi, respons insiden, dan SIEM.",
    items: [
      {
        name: "Hardening & Compliance",
        steps: [
          "Baseline CIS, patch management, backup",
          "Kontrol akses, PAM, secrets management",
          "Vulnerability management & scanning",
        ],
      },
      {
        name: "Monitoring & Detection",
        steps: [
          "Log pipeline, parsing, enrichment",
          "SIEM rules & threat hunting dasar",
          "Alert triage & tuning",
        ],
      },
      {
        name: "Incident Response",
        steps: [
          "Preparation: playbook, RACI, lab IR",
          "Identification & containment",
          "Eradication, recovery, post-mortem",
        ],
      },
    ],
  },
  {
    title: "Red Team",
    icon: <Code className="h-5 w-5 text-emerald-400" />,
    desc: "Offensive: recon, exploit, privilege escalation, post‑exploitation.",
    items: [
      {
        name: "Recon & Enumeration",
        steps: [
          "Passive recon (OSINT) & active recon",
          "Service enum: web, SMB, RDP, SSH",
          "Wordlist, fuzzing, dir enum",
        ],
      },
      {
        name: "Exploitation Basics",
        steps: [
          "SQLi, XSS, LFI/RFI, SSRF, CSRF",
          "Exploit stack & service umum",
          "Metasploit, payload, listener",
        ],
      },
      {
        name: "Privilege Escalation",
        steps: [
          "Linux: SUID, PATH hijack, cron, kernel",
          "Windows: UAC bypass, token, misconfig",
          "AV/EDR evasion dasar",
        ],
      },
    ],
  },
  {
    title: "Cloud & DevSecOps",
    icon: <Cpu className="h-5 w-5 text-emerald-400" />,
    desc: "Keamanan modern: container, cloud, pipeline, IaC security.",
    items: [
      {
        name: "Container & K8s",
        steps: [
          "Image scanning, secrets, runtime policy",
          "RBAC, NetworkPolicy, admission control",
          "Supply chain security",
        ],
      },
      {
        name: "Cloud Security",
        steps: [
          "IAM, least privilege, guardrail",
          "Storage/network hardening",
          "Detection & response di cloud",
        ],
      },
      {
        name: "DevSecOps",
        steps: [
          "Shift‑left: SAST, SCA, DAST",
          "Security gates di CI/CD",
          "Threat modeling aplikasi",
        ],
      },
    ],
  },
];

function ModuleCard({ title, icon, desc, items }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-slate-300 text-sm">{desc}</p>
        </div>
      </div>
      <div className="mt-5 space-y-4">
        {items.map((m) => (
          <details key={m.name} className="group rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-4">
            <summary className="list-none cursor-pointer select-none flex items-center justify-between">
              <span className="font-medium text-white">{m.name}</span>
              <span className="text-emerald-400 text-sm">lihat langkah</span>
            </summary>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-slate-300 text-sm">
              {m.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Kurikulum Berjenjang</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">
              Materi disusun bertahap dari pemula hingga mahir. Baca pemahaman, ikuti langkah, lalu praktik di lab.
            </p>
          </div>
          <Network className="hidden md:block h-10 w-10 text-emerald-400" />
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {modules.map((mod) => (
            <ModuleCard key={mod.title} {...mod} />
          ))}
        </div>
      </div>
    </section>
  );
}
