// src/components/experience/types.ts

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  date: string;
  details: string[];
  projects?: string[];
}