import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, ShieldAlert, Zap, Skull, Cpu, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../portfolioData';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: string[];
  isError?: boolean;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'sys_connect --user guest',
      output: [
        '========================================================',
        ' [!] BREACH PROTOCOL INITIALIZED :: CYBER HUD ACTIVE',
        ' Type "help" to view executable terminal commands.',
        ' Type "exit" or press ESC to terminate session.',
        '========================================================',
      ],
    },
  ]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    setInputVal('');
    let output: string[] = [];
    let isError = false;

    switch (cmd) {
      case 'help':
        output = [
          'AVAILABLE COMMANDS:',
          '  whoami      - Print current identity and security profile',
          '  nmap        - Simulate a TCP stealth reconnaissance scan',
          '  skills      - List cybersecurity & developer skill set',
          '  projects    - Enumerate active security repositories',
          '  contact     - Reveal verified communication protocols',
          '  matrix      - Trigger digital cascade sequence',
          '  sudo        - Elevate privilege',
          '  clear       - Clear terminal buffer',
          '  exit        - Terminate terminal session',
        ];
        break;

      case 'whoami':
        output = [
          `NAME     : ${PERSONAL_INFO.name}`,
          `DEGREE   : ${PERSONAL_INFO.role}`,
          `LOCATION : ${PERSONAL_INFO.location}`,
          `STATUS   : ${PERSONAL_INFO.systemStatus}`,
          'FOCUS    : Offensive/Defensive Tooling, Network Inspection, Python',
        ];
        break;

      case 'nmap':
      case 'nmap -ss 127.0.0.1':
        output = [
          'Starting Nmap 7.94 ( https://nmap.org ) at 2026-09-20 10:42 UTC',
          'Nmap scan report for localhost (127.0.0.1)',
          'Host is up (0.00012s latency).',
          'PORT     STATE SERVICE     VERSION',
          '22/tcp   open  ssh         OpenSSH 9.6 (protocol 2.0)',
          '80/tcp   open  http        nginx/1.24.0 (TLS Active)',
          '443/tcp  open  https       nginx/1.24.0 (TLS 1.3 Strict)',
          '1337/tcp open  cyber-hub   Samvrith Security Daemon v1.0',
          'MAC Address: 00:0C:29:BD:5A:F3 (VMware Virtual)',
          'Nmap done: 1 IP address (1 host up) scanned in 0.42 seconds',
        ];
        break;

      case 'skills':
        output = [
          'CYBERSECURITY : Ethical Hacking Basics, TCP/IP & Networking, Linux CLI, Cryptography',
          'PROGRAMMING   : Python, SQL, Bash Scripting, Web Fundamentals',
          'SECURITY TOOLS: Git/GitHub, Wireshark, Nmap Basics, VirtualBox Labs, Burp Suite',
        ];
        break;

      case 'projects':
        output = [
          '[1] Python Port Scanner & Network Recon Tool (Socket, Multithreaded)',
          '[2] Packet Sniffer & Traffic Protocol Analyzer (Raw Sockets, Scapy)',
          '[3] Password Strength Auditor & Hash Verifier (Cryptography, Hashlib)',
        ];
        break;

      case 'contact':
        output = [
          `Email    : ${PERSONAL_INFO.email}`,
          `LinkedIn : ${PERSONAL_INFO.linkedin}`,
          `GitHub   : ${PERSONAL_INFO.github}`,
        ];
        break;

      case 'sudo':
      case 'sudo su':
        output = [
          'user: guest is not in the sudoers file.',
          '[!] WARNING: This security incident will be reported to Samvrith Babu.',
        ];
        isError = true;
        break;

      case 'matrix':
        output = [
          '[+] Injecting digital rain matrix payload into browser memory...',
          '01001111 01010000 01010011 01000101 01000011',
          'SUCCESS: Visual telemetry synchronized.',
        ];
        break;

      case 'clear':
        setLogs([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output = [`bash: ${cmd}: command not recognized. Type "help" for command catalog.`];
        isError = true;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmd,
        output,
        isError,
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-3xl bg-[#090D14] border-2 border-[#00FF9C]/60 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,255,156,0.35)] flex flex-col max-h-[85vh]"
        >
          {/* Terminal Window Chrome */}
          <div className="bg-[#0D131F] px-4 py-3 border-b border-[#00FF9C]/30 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#00FF9C] inline-block" />
              <span className="ml-2 text-xs font-mono text-[#00FF9C] flex items-center gap-1.5 font-semibold">
                <ShieldAlert className="w-4 h-4 text-[#00FF9C]" />
                samvrith@security-core:~/easter_egg_cli
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-[#00E5FF] hidden sm:inline-block">
                ROOT_PRIVILEGE: RESTRICTED
              </span>
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-white transition-colors"
                title="Exit terminal (ESC)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div className="p-5 font-mono text-xs sm:text-sm overflow-y-auto flex-1 space-y-4 bg-[#05070A]/95 text-slate-300">
            {logs.map((log) => (
              <div key={log.id} className="space-y-1">
                <div className="flex items-center gap-2 text-[#00FF9C]">
                  <span className="text-[#00E5FF]">guest@samvrith:~$</span>
                  <span className="text-white font-semibold">{log.command}</span>
                </div>
                <div
                  className={`pl-4 space-y-0.5 whitespace-pre-wrap leading-relaxed ${
                    log.isError ? 'text-red-400' : 'text-slate-300'
                  }`}
                >
                  {log.output.map((line, lIdx) => (
                    <div key={lIdx}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Interactive Input Prompt */}
          <form
            onSubmit={handleCommand}
            className="p-3.5 bg-[#0C121D] border-t border-[#00FF9C]/30 flex items-center gap-2 font-mono text-xs sm:text-sm"
          >
            <span className="text-[#00FF9C] font-semibold shrink-0">guest@samvrith:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type a command e.g. help, nmap, whoami, exit..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-slate-600 font-mono"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded bg-[#00FF9C] text-[#05070A] font-bold text-xs hover:bg-[#00FF9C]/90"
            >
              EXEC
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
