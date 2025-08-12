import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';

const Users = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-dashboard-text-primary mb-4">Manage Users</h1>
        <div className="bg-dashboard-section p-6 rounded-lg border border-dashboard-border">
          <p className="text-dashboard-text-secondary">User management interface will be displayed here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Users;