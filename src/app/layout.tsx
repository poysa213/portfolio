'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import './globals.css';
import TopNavbar from "../components/TopNavbar";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import { DarkModeProvider } from "@context/darkModeContext";
import GoogleAnalytics from './GoogleAnalytics';  

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const FoundPaths = ['/', '/skills', '/about', '/projects']; 
  const isNotFoundPage = !FoundPaths.includes(pathName);

  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <DarkModeProvider>
          {!isNotFoundPage && <TopNavbar />}
          {children}
          {!isNotFoundPage && <Footer />}
          <ScrollToTopButton />
        </DarkModeProvider>
      </body>
    </html>
  );
}
