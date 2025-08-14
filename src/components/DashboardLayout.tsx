import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-dashboard-content justify-center items-center">
      <main className="flex-1 max-w-full">
        {children}
      </main>
    </div>
  );
};