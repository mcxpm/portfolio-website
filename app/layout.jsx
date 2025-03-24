import { ThemeContextProvider } from "./ThemeContext";
import Head from "next/head";

export const metadata = {
  title: "Markus Lim",
  description: "Portfolio Website for Markus Lim",
  keywords: "Markus Lim, NTU REP, Ex-TikTok",
  openGraph: {
    title: "Markus Lim – Portfolio Website",
    description:
      "Portfolio Website for Markus Lim, NTU REP student and Ex-TikTok intern specializing in low-latency systems and AI development.",
    url: "https://markuslim.vercel.app",
    siteName: "Markus Lim",
    images: [
      {
        url: "https://markuslim.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview of Markus Lim's portfolio website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/code-32.ico",
    apple: "/code-32.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://markuslim.vercel.app" />
      </head>
      <body>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
