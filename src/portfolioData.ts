/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Edit any details (Name, Bio, Skills, Projects, Socials, Timeline) right here!
 * All changes will automatically update across the entire website.
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  status: 'Completed' | 'In Progress' | 'Experimental';
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  badge: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  color: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'certification' | 'experience';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  status?: string;
}

export const PERSONAL_INFO = {
  name: "Samvrith Babu",
  role: "B.Tech CSE (Cybersecurity) Student",
  subRole: "Aspiring Cybersecurity Professional & Developer",
  location: "Kannur, Kerala, India",
  email: "samvrithbabu1@gmail.com",
  linkedin: "https://www.linkedin.com/in/samvrith-babu-p-27644740b",
  github: "https://github.com/samvrith-babu",
  resumePath: "/resume.pdf",
  systemStatus: "ALL DEFENSE SYSTEMS OPERATIONAL",
  terminalWhoami: "samvrith@cyber-node:~# whoami",
  taglines: [
    "Cybersecurity Enthusiast",
    "Ethical Hacking Learner",
    "Python Developer",
    "Network Defense Student",
  ],
  stats: [
    { label: "Academic Year", value: "1st Year", detail: "B.Tech CSE (Cybersecurity)" },
    { label: "Projects", value: "3+", detail: "Security Tools & Prototypes" },
    { label: "Certifications", value: "In Progress", detail: "Foundational & Hands-on" },
    { label: "Focus Domains", value: "NetDef & CTF", detail: "Active Lab Practice" },
  ],
};

export const ABOUT_DATA = {
  shortBio:
    "I am a passionate first-year B.Tech Computer Science and Engineering student specializing in Cybersecurity, based in Kannur, Kerala. Driven by a deep curiosity about how systems communicate and defend against unauthorized intrusion, I dedicate my time to hands-on exploration of networking fundamentals, Linux system administration, and Python automation for security tooling.",
  secondaryBio:
    "Currently building a solid foundation in cryptographic primitives, TCP/IP stack analysis, and ethical hacking basics. When I am not writing security scripts, I enjoy exploring CTF challenges, configuring virtual lab environments, and keeping up with the latest cybersecurity threat intelligence.",
  terminalSpecs: [
    { key: "Target Field", value: "Information Security / Offensive & Defensive Security" },
    { key: "Degree", value: "B.Tech in CSE (Cybersecurity) — 1st Year (2025–2029)" },
    { key: "Base OS", value: "Linux (Kali / Ubuntu) & Windows" },
    { key: "Primary Language", value: "Python 3, Bash, SQL" },
    { key: "Current Study", value: "Computer Networks, Linux CLI, Socket Programming" },
    { key: "Availability", value: "Open for CTF teams, projects & student internships" },
  ],
};

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    category: "Cybersecurity & Defense",
    iconName: "Shield",
    color: "#00FF9C",
    skills: [
      { name: "Ethical Hacking Basics", level: 65, badge: "Core", description: "Reconnaissance, scanning concepts, OWASP awareness" },
      { name: "Computer Networking (TCP/IP)", level: 75, badge: "Foundational", description: "OSI model, subnetting, DNS, HTTP/S protocols" },
      { name: "Linux System & Security CLI", level: 70, badge: "Daily Driver", description: "Permissions, file systems, process handling, SSH" },
      { name: "Vulnerability Assessment", level: 60, badge: "Practicing", description: "Scanning concepts, identification of misconfigurations" },
      { name: "Cryptography Fundamentals", level: 65, badge: "Theory & Practice", description: "Symmetric/Asymmetric encryption, hash algorithms" },
    ],
  },
  {
    category: "Programming & Scripting",
    iconName: "Code2",
    color: "#00E5FF",
    skills: [
      { name: "Python", level: 80, badge: "Primary", description: "Automation scripts, socket programming, data parsing" },
      { name: "SQL", level: 70, badge: "Databases", description: "Database querying, relational schema design, SQLi concepts" },
      { name: "Bash & Shell Scripting", level: 65, badge: "Automation", description: "Linux cron jobs, pipeline scripting, log analysis" },
      { name: "C / C++ Basics", level: 60, badge: "Academic", description: "Memory layout basics, data structures, syntax" },
      { name: "Web Fundamentals (HTML/JS)", level: 65, badge: "Web", description: "Client-server architecture, DOM, REST APIs" },
    ],
  },
  {
    category: "Tools & Environments",
    iconName: "Terminal",
    color: "#A855F7",
    skills: [
      { name: "Git & GitHub", level: 75, badge: "Version Control", description: "Branching, PRs, collaborative workflows" },
      { name: "Wireshark", level: 65, badge: "Packet Sniffing", description: "PCAP capture, protocol dissection, filtering" },
      { name: "Nmap Basics", level: 65, badge: "Network Recon", description: "Port scanning, service detection, NSE scripts" },
      { name: "VirtualBox / Lab Setup", level: 80, badge: "Virtualization", description: "Host-only networks, Kali & Ubuntu VMs" },
      { name: "Burp Suite (Community)", level: 55, badge: "Web Proxy", description: "HTTP proxy, request repeater, interception" },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Python Port Scanner & Network Recon Tool",
    category: "Network Security",
    description:
      "A fast, multi-threaded CLI network reconnaissance tool written in Python. Capable of scanning specific IP ranges or domains, detecting open TCP ports, identifying standard service banners, and generating formatted scan logs for vulnerability triage.",
    features: [
      "Multi-threaded socket connections for high-speed port scanning",
      "Banner grabbing to detect service versions (HTTP, SSH, FTP)",
      "Target host reachability check with ICMP echo probe simulation",
      "Clean terminal output with exportable JSON/TXT report generation",
    ],
    techStack: ["Python", "Socket API", "Threading", "Argparse"],
    githubUrl: "https://github.com/samvrith-babu",
    demoUrl: "#",
    status: "Completed",
  },
  {
    id: "proj-2",
    title: "Packet Sniffer & Protocol Traffic Analyzer",
    category: "Packet Analysis",
    description:
      "A custom packet capture and dissection utility built to inspect raw network frames in real-time. Captures Ethernet headers, unpacks IPv4 packets, and decodes TCP/UDP/ICMP payloads to analyze traffic patterns and suspicious payloads.",
    features: [
      "Low-level socket packet listening and raw frame decoding",
      "Extracts source/destination MAC addresses, IP addresses, and ports",
      "Hexadecimal and ASCII payload dumping for inspecting packet bodies",
      "Protocol distribution statistics and suspicious ping flood alerts",
    ],
    techStack: ["Python", "Raw Sockets", "Scapy", "Linux CLI"],
    githubUrl: "https://github.com/samvrith-babu",
    demoUrl: "#",
    status: "In Progress",
  },
  {
    id: "proj-3",
    title: "Password Strength Auditor & Hash Verifier",
    category: "Cryptography & Auth",
    description:
      "A security utility designed to evaluate password entropy against NIST guidelines, check for common dictionary leaks, and generate or crack standard cryptographic hashes (MD5, SHA-1, SHA-256) for educational verification.",
    features: [
      "Calculates Shannon entropy and character space complexity",
      "Fast hashing generation & verification against target wordlists",
      "Real-time feedback with actionable password strengthening tips",
      "Visual strength indicator bar with brute-force time estimates",
    ],
    techStack: ["Python", "Hashlib", "Cryptography", "CLI"],
    githubUrl: "https://github.com/samvrith-babu",
    demoUrl: "#",
    status: "Completed",
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "edu-1",
    type: "education",
    title: "B.Tech in Computer Science & Engineering (Cybersecurity)",
    organization: "[Add your college / university name here]",
    location: "Kannur, Kerala, India",
    period: "2025 – 2029 (Current, 1st Year)",
    description: [
      "Specializing in cybersecurity, computer networks, and secure software development.",
      "Engaging in foundational coursework: Programming, Discrete Mathematics, Operating Systems, and Network Basics.",
      "Active participant in technical coding clubs and cybersecurity learning communities.",
    ],
    status: "In Progress",
  },
  {
    id: "edu-2",
    type: "education",
    title: "Higher Secondary Education (Science & Computer Science)",
    organization: "[Add your higher secondary school name here]",
    location: "Kannur, Kerala, India",
    period: "2023 – 2025",
    description: [
      "Completed higher secondary schooling with core subjects in Mathematics, Physics, Chemistry, and Computer Science.",
      "Developed an early interest in computer hardware, programming logic, and Linux operating systems.",
    ],
    status: "Completed",
  },
  {
    id: "cert-1",
    type: "certification",
    title: "[Add Your Certification Title Here — e.g. Google Cybersecurity Certificate / CompTIA Security+]",
    organization: "[e.g. Coursera / CompTIA / Cisco Networking Academy]",
    location: "Online",
    period: "In Progress / Upcoming",
    description: [
      "Currently pursuing foundational certification covering threat intelligence, SIEM tools, and network defense principles.",
      "Hands-on labs covering Linux command line, packet analysis, and security incident response.",
    ],
    status: "Planned / In Progress",
  },
  {
    id: "cert-2",
    type: "certification",
    title: "[Add CTF / Hands-on Lab Milestone — e.g. TryHackMe / HackTheBox]",
    organization: "TryHackMe / Hack The Box Labs",
    location: "Online",
    period: "Ongoing Practice",
    description: [
      "Actively solving introductory cybersecurity rooms, Linux fundamentals, and web exploitation basics.",
      "Focusing on pre-security paths: Network Fundamentals, Windows/Linux Privilege Basics, and Cryptography.",
    ],
    status: "Active",
  },
];
