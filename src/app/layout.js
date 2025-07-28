import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Sound from "@/components/Sound";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});


export const metadata = {
  title: "Daniel Hu",
  description: "danielhu.dev",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Daniel Hu",
    description: "danielhu.dev",
    type: "website",
    url: "https://danielhu.dev",
    siteName: "Daniel Hu",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Daniel Hu",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
        {children}
      <Sound/>
      <div id="my-modal" />
      </body>
    </html>
  );
}
