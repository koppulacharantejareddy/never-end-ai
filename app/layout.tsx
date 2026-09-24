import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Never End AI — Your AI. Your Ideas. Never End.",
  description:
    "Never End AI is a general-purpose artificial intelligence platform for learning, creating, researching, and solving problems.",
  authors: [
    {
      name: "Koppula Charan Teja Reddy",
    },
  ],
  creator: "Koppula Charan Teja Reddy",
  publisher: "Never End AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
