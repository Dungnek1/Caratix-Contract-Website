import React from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({
  children
}: LayoutProps) {
  return <div className="min-h-screen flex bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 md:ml-0">
        <main className="flex-1 pt-16 md:pt-0">{children}</main>
        <Footer />
      </div>
    </div>;
}