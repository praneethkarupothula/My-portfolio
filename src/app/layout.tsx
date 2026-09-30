import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Karupothula Praneeth | AI/ML Developer",
  description:
    "Portfolio of Karupothula Praneeth – AI/ML Developer. Building scalable AI solutions and predictive models.",
  keywords: [
    "Karupothula Praneeth",
    "AI/ML Developer",
    "Machine Learning",
    "Python"
  ],
  authors: [{ name: "Karupothula Praneeth" }],
  openGraph: {
    title: "Karupothula Praneeth | AI/ML Developer",
    description:
      "Dynamic Computer Science student with expertise in Machine Learning, Data Science, and AI integration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
