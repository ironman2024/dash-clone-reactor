import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-dashboard-text-primary mb-4">Dashboard</h1>
        <div className="bg-dashboard-section p-6 rounded-lg border border-dashboard-border">
          <p className="text-dashboard-text-secondary">Dashboard content will be displayed here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;