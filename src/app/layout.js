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
    default: "R Rohan | Frontend Developer Portfolio",
    template: "%s | R Rohan",
  },
  description:
    "Frontend developer portfolio of R Rohan — building responsive, modern, and high-performance web experiences with React.js, Next.js, and UI-focused design.",
  applicationName: "R Rohan Portfolio",
  keywords: [
    "R Rohan",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer India",
    "Modern UI Developer",
  ],
  authors: [{ name: "R Rohan" }],
  creator: "R Rohan",
  publisher: "R Rohan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "R Rohan | Frontend Developer Portfolio",
    description:
      "Explore the portfolio of R Rohan, a frontend developer creating responsive, high-performance web experiences with React.js and Next.js.",
    url: "https://rohan-codes-portfolio.vercel.app",
    siteName: "R Rohan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "R Rohan Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R Rohan | Frontend Developer Portfolio",
    description:
      "Modern frontend developer portfolio for R Rohan, specializing in React.js and Next.js",
    images: ["/og-image.svg"],
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
