import type { Metadata } from "next";

// Halaman render video, tidak untuk diindeks mesin pencari
export const metadata: Metadata = { title: "Video render", robots: { index: false, follow: false } };

export default function VideoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
