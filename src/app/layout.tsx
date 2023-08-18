import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I got paid - fake flex on X that you got paid",
  description:
    "This is a meme website/project because everyone seems to post how much they are earning so let the poor enjoy as well.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
