
// Fix: Added React import to resolve 'Cannot find namespace React' when using React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}
