import { Terminal, Globe, Shield, Bug, Network, ExternalLink } from "lucide-react";

const labs = [
  {
    title: "Network Scanning & Enumeration",
    icon: <Network className="h-5 w-5 text-emerald-400" />,
    goals: [
      "Pahami perbedaan TCP/UDP scan",
      "Enumerasi service dan versi",
      "Dokumentasikan temuan",
    ],
    commands: [
      "nmap -sC -sV -O -p- <IP_TARGET>",
      "nmap --script=vuln -p <PORTS> <IP_TARGET>",
      "whatweb http://<IP_TARGET>"
    ],
    links: [
      { label: "TryHackMe", href: "https://tryhackme.com" },
      { label: "Hack The Box", href: "https://www.hackthebox.com" },
    ],
  },
  {
    title: "Web Pentest Basics",
    icon: <Globe className="h-5 w-5 text-emerald-400" />,
    goals: [
      "Identifikasi entry point aplikasi",
      "Uji OWASP Top 10 (XSS, SQLi, IDOR)",
      "Gunakan proxy (Burp/ZAP)",
    ],
    commands: [
      "sqlmap -u 'http://site.com/item?id=1' --dbs",
      "ffuf -u http://site.com/FUZZ -w /usr/share/wordlists/dirb/common.txt",
      "xsser -u 'http://site.com?q=1'"
    ],
    links: [
      { label: "PortSwigger Labs", href: "https://portswigger.net/web-security" },
      { label: "OWASP ZAP", href: "https://www.zaproxy.org" },
    ],
  },
  {
    title: "Blue Team: Log Analysis",
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    goals: [
      "Kumpulkan log (syslog/Windows)",
      "Deteksi pola anomali",
      "Buat rule deteksi sederhana",
    ],
    commands: [
      "journalctl -xe | grep 'failed'",
      "Get-WinEvent -LogName Security | Select -First 20",
      "zeek -r traffic.pcap"
    ],
    links: [
      { label: "Sigma Rules", href: "https://sigmahq-pyc.github.io" },
      { label: "Elastic SIEM", href: "https://www.elastic.co/siem" },
    ],
  },
  {
    title: "Privilege Escalation",
    icon: <Bug className="h-5 w-5 text-emerald-400" />,
    goals: [
      "Enumerasi host secara menyeluruh",
      "Eksploitasi misconfig umum",
      "Dapatkan persistence dengan aman",
    ],
    commands: [
      "linpeas.sh | tee enum.txt",
      "winPEAS.exe > enum.txt",
      "(Linux) find / -perm -4000 -type f 2>/dev/null"
    ],
    links: [
      { label: "GTFOBins", href: "https://gtfobins.github.io" },
      { label: "PayloadAllTheThings", href: "https://github.com/swisskyrepo/PayloadsAllTheThings" },
    ],
  },
];

function LabCard({ title, icon, goals, commands, links }) {
  return (
    <div className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-300 font-medium">Tujuan</p>
          <ul className="mt-2 list-disc pl-5 text-slate-300 text-sm space-y-1">
            {goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm text-slate-300 font-medium">Perintah Contoh</p>
          <pre className="mt-2 rounded-lg bg-black/60 text-emerald-300 p-3 text-xs overflow-x-auto">
{commands.map((c) => `\n$ ${c}`).join("\n")}
          </pre>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-slate-700"
          >
            <ExternalLink className="h-4 w-4" /> {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Labs() {
  return (
    <section id="labs" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Lab Praktik</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">
              Latihan langsung dengan skenario realistis. Gunakan perintah contoh, dokumentasikan proses, dan evaluasi hasil.
            </p>
          </div>
          <Terminal className="hidden md:block h-10 w-10 text-emerald-400" />
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {labs.map((lab) => (
            <LabCard key={lab.title} {...lab} />
          ))}
        </div>
      </div>
    </section>
  );
}
