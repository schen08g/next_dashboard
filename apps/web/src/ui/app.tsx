'use client';

import { SidebarInset, SidebarProvider } from '../components/ui/sidebar';
import * as React from 'react';
import Header from './layout/header';
import AppSideBar from './layout/sidebar';

export default function App({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  // Only render after first client-side mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <SidebarProvider>
      <AppSideBar></AppSideBar>
      <SidebarInset>
        <Header></Header>
        {/* page main content */}
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
