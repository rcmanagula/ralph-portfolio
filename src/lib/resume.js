/* Shared résumé data for both Terminal & Corporate modes.
   All facts verbatim from the source résumé PDF — no inventions. */

export const RESUME = {
  // Corporate-mode "pentest report" framing
  brief: {
    classification: 'CONFIDENTIAL · CANDIDATE BRIEF',
    docId: 'RCM-2026-001',
    version: 'v1.0',
    period: '2026.05',
    preparedBy: 'Ralph Christian Managula',
    executiveSummary:
      'Offensive security professional with four years of hands-on VAPT, red-team, and AppSec engagements across banking, government, and Google-scale engineering teams. Specializes in translating attacker techniques into clear remediation actions that both technical and non-technical stakeholders can act on. Currently leading vulnerability assessment and penetration testing across the web, API, mobile, and corebanking surface area at a tier-1 Philippine retail bank.',
  },

  identity: {
    name: "Ralph Christian Managula",
    handle: "ralph",
    sigil: "rcm",
    title: "Offensive Security Professional",
    tagline: "Penetration Tester · Red Team Operator",
    location: "Taguig City, Metro Manila, Philippines",
    region: "PH-MNL",
    email: "rcmanagula@yahoo.com",
    phone: "0918-333-9163",
    linkedin: "linkedin.com/in/rcmanagula",
    status: "AVAILABLE",
    statusLabel: "Open to new offensive-security roles",
  },

  about: {
    headline: "Offensive security professional with a hacker mindset.",
    long: "CompTIA PenTest+ certified, specializing in vulnerability assessment, penetration testing, and red team operations across banking, government, and enterprise environments. Approaches every system the way an attacker would, finding the gaps before they get exploited, then translating those findings into clear remediation actions that development and business teams can execute on.",
    terminalShort: "mindset: attacker. translates exploits → business risk.",
  },

  experience: [
    {
      id: "cimb",
      engId: "ENG-2025-001",
      logo: "C",
      role: "Tech Vulnerability Engineer (VAPT)",
      company: "CIMB Bank Philippines",
      start: "Oct 2025",
      end: "May 2026",
      current: true,
      tags: ["INTERNAL", "BANKING", "CRITICAL-INFRA"],
      summary:
        "Owned offensive testing across web, API, mobile, and corebanking surface area at a large retail bank.",
      bullets: [
        "Conducted VAPT across the bank's web applications, APIs, mobile modules, and corebanking assets, manually verifying each finding for exploitability, resulting in accurate risk reporting with minimal false positives reaching stakeholders.",
        "Established the bank's VAPT process and SOPs from the ground up, defining how pentesting gets scoped, scheduled, and reported — giving the organization its first structured approach to regular security validation.",
        "Validated SAST findings from Fortify Scanner and performed reverse engineering of mobile applications using Ghidra and Frida to identify hardcoded credentials, exposed tokens, and weak payload encryption, ensuring no critical flaws ship to production.",
        "Tested security tooling (Zimperium, SmartStream TLM) prior to production deployment, identifying integration gaps early and enabling smooth rollouts without security exposure.",
        "Managed 3rd party VAPT vendor engagements end-to-end, from vendor selection and scope definition to translating technical findings into actionable items for business operations.",
        "Collaborated with development teams to communicate security risks and attacker exploitation techniques, while driving Secure SDLC adoption through internal security roadshows and training sessions.",
        "Provided attacker-perspective analysis during cybersecurity incidents, performing triage to determine root cause and potential impact on bank operations.",
      ],
    },
    {
      id: "ngt",
      engId: "ENG-2024-002",
      logo: "N",
      role: "Penetration Tester",
      company: "Next Generation Technologies Global Inc.",
      start: "Mar 2024",
      end: "Oct 2025",
      current: false,
      tags: ["EXTERNAL", "CONSULTING", "GOVERNMENT", "RED-TEAM"],
      summary:
        "3rd-party VAPT engagements for private companies and Philippine government bodies.",
      bullets: [
        "Performed web application and infrastructure VAPT for private companies and government bodies across the Philippines, identifying critical vulnerabilities including SQL injection, XXE, and server misconfigurations.",
        "Executed both remote and onsite penetration tests using Burp Suite, Nessus, Qualys, sqlmap, and Nmap, delivering findings that directly informed client remediation priorities.",
        "Carried out red team engagements involving phishing campaigns, physical security testing, and lateral movement, exposing infrastructure weaknesses that traditional assessments missed.",
        "Authored tailored VAPT reports for each engagement, mapping vulnerabilities across network and application layers in a format that both technical and non-technical stakeholders could act on.",
      ],
    },
    {
      id: "goc",
      engId: "ENG-2022-003",
      logo: "G",
      role: "Tech Process Senior Associate",
      company: "Google Operations Center",
      start: "May 2022",
      end: "Feb 2024",
      current: false,
      tags: ["ENGINEERING", "INTERNATIONAL", "PAYMENTS"],
      summary:
        "Direct work with US-based Google engineers on Payment Services bug triage.",
      bullets: [
        "Collaborated directly with Google engineers in the US to triage and resolve code-level bugs across Google Payment Services, supporting Ads and payment integrations used by multiple business units.",
        "Managed coding configurations for partner payment service integrations, handling multiple concurrent projects and autonomously resolving integration issues to maintain service continuity.",
        "Served as post-launch partner contact, tracking case records and identifying process improvements, resulting in more efficient escalation workflows and clearer technical documentation for stakeholders.",
      ],
    },
  ],

  // Proficiency scale:
  //   daily      — used in current/recent work, multiple times a week
  //   weekly     — regular but not constant
  //   occasional — situational use, deep know-how but not always reached for
  //   learning   — exploring, not engagement-grade yet
  // years = total professional time using the tool
  skills: [
    {
      category: "VAPT & Recon",
      icon: "Radar",
      items: [
        { name: "Nmap",       freq: "daily",      years: 4 },
        { name: "Subfinder",  freq: "weekly",     years: 2.5 },
        { name: "Nuclei",     freq: "weekly",     years: 3 },
        { name: "Maltego",    freq: "occasional", years: 0.5 },
        { name: "Shodan",     freq: "occasional", years: 2 },
        { name: "Metasploit Framework", freq: "weekly", years: 3 },
        { name: "Nessus",     freq: "weekly",     years: 2 },
        { name: "Qualys",     freq: "weekly",     years: 3 },
        { name: "Wireshark",  freq: "weekly",     years: 3.5 },
      ],
    },
    {
      category: "Web Application Security",
      icon: "Code2",
      items: [
        { name: "Burp Suite", freq: "daily",  years: 4 },
        { name: "OWASP ZAP",  freq: "daily",  years: 4 },
        { name: "sqlmap",     freq: "weekly", years: 4 },
        { name: "ffuf",       freq: "daily",  years: 4 },
      ],
    },
    {
      category: "Mobile & Reverse Engineering",
      icon: "Smartphone",
      items: [
        { name: "MobSF",           freq: "daily",      years: 4 },
        { name: "Frida",           freq: "daily",      years: 3 },
        { name: "Objection",       freq: "weekly",     years: 3 },
        { name: "dnSpy",           freq: "occasional", years: 1 },
        { name: "Process Monitor", freq: "occasional", years: 1 },
        { name: "IDA Pro",         freq: "weekly",     years: 2 },
        { name: "Ghidra",          freq: "weekly",     years: 2 },
      ],
    },
    {
      category: "AD & Post-Exploitation",
      icon: "ShieldCheck",
      items: [
        { name: "BloodHound",    freq: "occasional", years: 1 },
        { name: "SharpHound",    freq: "occasional", years: 1 },
        { name: "Impacket",      freq: "occasional", years: 1 },
        { name: "CrackMapExec",  freq: "occasional", years: 0.5 },
        { name: "Mimikatz",      freq: "occasional", years: 1 },
      ],
    },
    {
      category: "Password Attacks",
      icon: "Terminal",
      items: [
        { name: "Hashcat",          freq: "weekly", years: 3 },
        { name: "John the Ripper",  freq: "weekly", years: 3 },
        { name: "Hydra",            freq: "weekly", years: 3 },
      ],
    },
    {
      category: "Wireless",
      icon: "Wifi",
      items: [
        { name: "aircrack-ng", freq: "occasional", years: 2 },
      ],
    },
    {
      category: "Cloud Security",
      icon: "Radar",
      items: [
        { name: "ScoutSuite", freq: "occasional", years: 0.5 },
        { name: "Pacu",       freq: "occasional", years: 0.5 },
      ],
    },
    {
      category: "Social Engineering",
      icon: "Smartphone",
      items: [
        { name: "GoPhish", freq: "weekly", years: 2 },
      ],
    },
    {
      category: "Frameworks & Compliance",
      icon: "ShieldCheck",
      items: [
        { name: "OWASP Top 10", freq: "daily",  years: 4 },
        { name: "NIST",         freq: "weekly", years: 3 },
        { name: "CVSS",         freq: "daily",  years: 4 },
        { name: "PTES",         freq: "weekly", years: 3 },
        { name: "Secure SDLC",  freq: "weekly", years: 1 },
      ],
    },
    {
      category: "Programming",
      icon: "Terminal",
      items: [
        { name: "Python", freq: "weekly",     years: 3 },
        { name: "Bash",   freq: "daily",      years: 3 },
        { name: "Java",   freq: "occasional", years: 2 },
      ],
    },
    {
      category: "Platforms",
      icon: "Monitor",
      items: [
        { name: "Kali Linux", freq: "daily", years: 4 },
      ],
    },
  ],

  focusAreas: [
    "Web application testing",
    "Android/iOS mobile testing",
    "WiFi testing",
    "Infrastructure/network testing",
    "Red team operations",
  ],

  certifications: [
    { id: "pentest-plus", name: "CompTIA PenTest+", issuer: "CompTIA", status: "achieved", year: "Achieved", tier: "Foundational" },
    { id: "cpts", name: "Hack The Box CPTS", issuer: "Hack The Box", status: "in-progress", year: "Next", tier: "Practitioner" },
    { id: "bscp", name: "Burp Suite Certified Practitioner", issuer: "PortSwigger", status: "planned", year: "Planned", tier: "Practitioner" },
    { id: "oscp", name: "OSCP+", issuer: "Offensive Security", status: "planned", year: "Goal", tier: "Expert" },
  ],

  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "AMA Computer College Makati",
    years: "2016 — 2019",
  },
};
