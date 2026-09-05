import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  metadataBase: new URL("https://rohan-codes-portfolio.vercel.app"),
  title: {
    default: "R Rohan | React.js & Next.js Frontend Developer in India",
    template: "%s | R Rohan",
  },
  description:
    "R Rohan is a React.js and Next.js frontend developer in India building fast, responsive, SEO-friendly web applications and modern UI experiences.",
  abstract:
    "React.js and Next.js frontend developer portfolio for R Rohan, focused on fast, responsive, SEO-friendly web experiences.",
  category: "technology",
  applicationName: "R Rohan Portfolio",
  keywords: [
    "R Rohan",
    "Frontend Developer",
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Frontend Developer in India",
    "JavaScript Developer",
    "UI Developer",
    "React.js Portfolio",
    "Next.js Portfolio",
    "Web Developer India",
    "SEO Friendly Web Developer",
    "Responsive Web Design",
    "Frontend Engineer",
  ],
  authors: [
    { name: "R Rohan", url: "https://rohan-codes-portfolio.vercel.app" },
  ],
  creator: "R Rohan",
  publisher: "R Rohan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "R Rohan | React.js & Next.js Frontend Developer in India",
    description:
      "Explore the portfolio of R Rohan, a frontend developer creating fast, responsive, and SEO-focused digital experiences with React.js and Next.js.",
    url: "https://rohan-codes-portfolio.vercel.app",
    siteName: "R Rohan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rohan-codes-portfolio.vercel.app/og-image.svg",
        width: 1200,
        height: 630,
        alt: "R Rohan Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R Rohan | React.js & Next.js Frontend Developer in India",
    description:
      "Frontend developer portfolio for R Rohan, specializing in React.js, Next.js, and performance-first UI development.",
    images: ["https://rohan-codes-portfolio.vercel.app/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-foreground transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
