import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Head from "next/head";

const interFont = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  fallback: ["Helvetica", "sans-serif"],
});
const interItalic = localFont({
  src: "./fonts/InterVariable-Italic.woff2",
  variable: "--font-inter-italic",
  weight: "100 900",
  fallback: [ "Helvetica", "sans-serif"],
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  fallback: ["Inter", "Helvetica", "sans-serif"],
});


export const metadata: Metadata = {
  title: "Feigin Electric",
  description: "Generated by create next app",
  keywords: "next.js, web development, react",
  openGraph: {
    type: "website",
    url: "https://yourwebsite.com",
    title: "Feigin Electric",
    description: "A description of your website for social sharing.",
    images: [
      {
        url: "/path-to-image.jpg",
        width: 800,
        height: 600,
        alt: "Image description",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Feigin Electric" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${interFont.variable} ${interItalic.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
