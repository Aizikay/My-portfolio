import React from 'react';
import { Layout, Server, Database, Shield, Zap, Smartphone, Globe, Github, Instagram, Facebook, MessageCircle, Mail, Code2, ShieldAlert, Cpu, Terminal, Wrench } from 'lucide-react';
import { Project, Skill, Service } from './types';

export const GITHUB_URL = 'https://github.com/Aizikay';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Commerce Engine',
    description: 'A high-performance headless e-commerce solution with real-time inventory management and multi-currency support. Built for enterprise scale.',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800&h=500',
    liveUrl: '#',
    githubUrl: GITHUB_URL
  },
  {
    id: '2',
    title: 'Sentinel Security Monitor',
    description: 'Enterprise-grade security dashboard for monitoring distributed cloud infrastructure and detecting anomalies using ML algorithms.',
    techStack: ['React', 'Python', 'FastAPI', 'Docker', 'Kubernetes'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500',
    liveUrl: '#',
    githubUrl: GITHUB_URL
  },
  {
    id: '3',
    title: 'QuantFlow Analytics',
    description: 'Real-time financial data visualization tool providing deep insights into market liquidity and high-frequency trading patterns.',
    techStack: ['D3.js', 'React', 'Go', 'WebSockets', 'InfluxDB'],
    imageUrl: 'https://images.unsplash.com/photo-1611974715853-26d33924e775?auto=format&fit=crop&q=80&w=800&h=500',
    liveUrl: '#',
    githubUrl: GITHUB_URL
  },
  {
    id: '4',
    title: 'Core System Audit',
    description: 'Automated vulnerability scanner for enterprise software stacks, identifying critical exploits and providing remediation paths.',
    techStack: ['Rust', 'Bash', 'Docker', 'Kali', 'Metasploit'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=500',
    liveUrl: '#',
    githubUrl: GITHUB_URL
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Full Stack Engineering',
    items: [
      { name: 'React / Next.js', level: 98 },
      { name: 'Node.js / Go', level: 92 },
      { name: 'TypeScript / Rust', level: 90 },
      { name: 'SQL / NoSQL Architecture', level: 94 },
    ]
  },
  {
    category: 'Cybersecurity & Auditing',
    items: [
      { name: 'Ethical Hacking / Penetration', level: 95 },
      { name: 'Vulnerability Assessment', level: 92 },
      { name: 'Security Hardening', level: 88 },
      { name: 'Network Protocol Analysis', level: 90 },
    ]
  },
  {
    category: 'Cloud & System Design',
    items: [
      { name: 'Docker / Kubernetes / IaC', level: 88 },
      { name: 'AWS / Azure Security', level: 90 },
      { name: 'CI/CD Pipeline Security', level: 92 },
      { name: 'High-Availability Design', level: 94 },
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description: 'Custom websites, dashboards, and enterprise-grade web applications with a focus on speed and user experience.',
    icon: <Globe className="w-10 h-10 text-emerald-500" />
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions, system automation, and high-performance backend systems built for reliability.',
    icon: <Terminal className="w-10 h-10 text-emerald-500" />
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications optimized for performance and seamless user interaction.',
    icon: <Smartphone className="w-10 h-10 text-emerald-500" />
  },
  {
    title: 'Cybersecurity & Ethical Hacking',
    description: 'Authorized penetration testing, vulnerability scanning, and security audits to protect your digital assets.',
    icon: <ShieldAlert className="w-10 h-10 text-emerald-500" />
  },
  {
    title: 'System Security Hardening',
    description: 'Implementation of OAuth2, multi-factor authentication, and encryption to secure sensitive user and business data.',
    icon: <Shield className="w-10 h-10 text-emerald-500" />
  },
  {
    title: 'Technical Consulting',
    description: 'Expert guidance on system architecture, bug fixing, performance optimization, and long-term maintenance.',
    icon: <Wrench className="w-10 h-10 text-emerald-500" />
  }
];

export const SOCIALS = [
  { name: 'WhatsApp', href: 'https://wa.me/255612431951', icon: <MessageCircle className="w-6 h-6" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/izkfx2026', icon: <Instagram className="w-6 h-6" /> },
  { name: 'Facebook', href: 'https://www.facebook.com/AizikayIzk', icon: <Facebook className="w-6 h-6" /> },
  { name: 'Email', href: 'mailto:aizikay12izk@gmail.com', icon: <Mail className="w-6 h-6" /> },
  { name: 'Github', href: GITHUB_URL, icon: <Github className="w-6 h-6" /> },
];