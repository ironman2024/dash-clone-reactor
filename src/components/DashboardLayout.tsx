import React from 'react';
import { DashboardSidebar } from './DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-dashboard-content">
      <DashboardSidebar />
      <main className="flex-1 ml-64">
        {children}
      </main>
    </div>
  );
};