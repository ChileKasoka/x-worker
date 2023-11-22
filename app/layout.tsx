import './globals.css'
import React, { ReactNode } from 'react';
import Footer from "./components/Footer";
import Header from './components/Header';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Classified App',
  description: 'Classified App is a free platform that allows users to buy/sell/rent almost anything, find jobs or workers',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
