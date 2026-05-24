/* Shared résumé data for both Terminal & Corporate modes.
   All facts verbatim from the source résumé PDF — no inventions. */

export const RESUME = {
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
      logo: "C",
      role: "Tech Vulnerability Engineer (VAPT)",
      company: "CIMB Bank Philippines",
      start: "Oct 2025",
      end: "May 2026",
      current: true,
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
      logo: "N",
      role: "Penetration Tester",
      company: "Next Generation Technologies Global Inc.",
      start: "Mar 2024",
      end: "Oct 2025",
      current: false,
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
      logo: "G",
      role: "Tech Process Senior Associate",
      company: "Google Operations Center",
      start: "May 2022",
      end: "Feb 2024",
      current: false,
      summary:
        "Direct work with US-based Google engineers on Payment Services bug triage.",
      bullets: [
        "Collaborated directly with Google engineers in the US to triage and resolve code-level bugs across Google Payment Services, supporting Ads and payment integrations used by multiple business units.",
        "Managed coding configurations for partner payment service integrations, handling multiple concurrent projects and autonomously resolving integration issues to maintain service continuity.",
        "Served as post-launch partner contact, tracking case records and identifying process improvements, resulting in more efficient escalation workflows and clearer technical documentation for stakeholders.",
      ],
    },
  ],

  skills: [
    {
      category: "VAPT & Recon",
      icon: "Radar",
      items: ["Burp Suite", "Metasploit", "Nmap", "Nessus", "Qualys", "OWASP ZAP", "sqlmap", "dirbuster", "nikto", "hydra", "theHarvester"],
    },
    {
      category: "Mobile Security & Reverse Engineering",
      icon: "Smartphone",
      items: ["Frida", "MobSF", "Ghidra", "IDA Pro"],
    },
    { category: "SAST", icon: "Code2", items: ["Fortify Scanner"] },
    { category: "Network & Wireless", icon: "Wifi", items: ["Wireshark", "aircrack-ng"] },
    {
      category: "Frameworks & Compliance",
      icon: "ShieldCheck",
      items: ["OWASP Top 10", "NIST", "CVSS", "PTES", "Secure SDLC"],
    },
    { category: "Programming", icon: "Terminal", items: ["Python", "Bash", "Java"] },
    { category: "Platforms", icon: "Monitor", items: ["Linux (Kali Linux)", "Windows"] },
  ],

  focusAreas: [
    "Web application testing",
    "Android/iOS mobile testing",
    "WiFi testing",
    "Infrastructure/network testing",
    "Red team operations",
  ],

  certifications: [
    { id: "pentest-plus", name: "CompTIA PenTest+", issuer: "CompTIA", status: "achieved", year: "Achieved" },
    { id: "cpts", name: "Hack The Box CPTS", issuer: "Hack The Box", status: "in-progress", year: "Next" },
    { id: "bscp", name: "Burp Suite Certified Practitioner", issuer: "PortSwigger", status: "planned", year: "Planned" },
    { id: "oscp", name: "OSCP+", issuer: "Offensive Security", status: "planned", year: "Goal" },
  ],

  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "AMA Computer College Makati",
    years: "2016 — 2019",
  },
};
