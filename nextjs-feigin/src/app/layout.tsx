import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: "next.js, web development, react",
  openGraph: {
    type: "website",
    url: "https://yourwebsite.com",
    title: "Your Website Title",
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
