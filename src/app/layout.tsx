'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import './globals.css';
import TopNavbar from "../components/TopNavbar";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import { DarkModeProvider } from "@context/darkModeContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const FoundPaths = ['/', '/skills', '/about', '/projects']; // Add your desired paths here
  const isNotFoundPage = !FoundPaths.includes(pathName);// Replace '/not-found' with the actual path of your 404 page

  return (
    <html lang="en">
      <body>
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
