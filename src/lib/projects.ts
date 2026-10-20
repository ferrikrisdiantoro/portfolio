import projectsData from "@/data/projects.json";

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  features?: string[];
  type: string;
  category: string;
  link: string;
  thumbnail?: string;
  gallery?: string[];
  youtubeUrl?: string;
  demoLink?: string;
  githubLink?: string;
  /** Tampil di bagian unggulan Beranda */
  featured?: boolean;
  /** Tidak ditampilkan publik (misalnya bertabrakan dengan perjanjian non-compete) */
  hidden?: boolean;
}

/** Proyek yang boleh tampil publik, sudah terurut dari yang terbaru dan terkuat */
export const projects: Project[] = (projectsData as Project[]).filter((p) => !p.hidden);

export const featuredProjects: Project[] = projects.filter((p) => p.featured);
