import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoSpec | Vehicle Specifications and Service Workflow Tool",
  description:
    "AutoSpec is a React and Next.js application for vehicle specification lookup, job notes management, parts tracking, and automotive service workflows.",
  metadataBase: new URL("https://autospec.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AutoSpec | Vehicle Specifications and Service Workflow Tool",
    description:
      "AutoSpec is a React and Next.js application for vehicle specification lookup, job notes management, parts tracking, and automotive service workflows.",
    url: "/",
    siteName: "AutoSpec",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoSpec | Vehicle Specifications and Service Workflow Tool",
    description:
      "AutoSpec is a React and Next.js application for vehicle specification lookup, job notes management, parts tracking, and automotive service workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><QueryProvider>{children}</QueryProvider></body>
    </html>
  );
}
