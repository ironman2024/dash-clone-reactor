import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-dashboard-text-primary mb-4">Dashboard</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded border border-dashboard-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">+12%</span>
              </div>
              <h3 className="text-2xl font-bold text-dashboard-text-primary mb-1">1,234</h3>
              <p className="text-sm text-gray-600">Total Applications</p>
            </div>

            <div className="bg-white rounded border border-dashboard-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">+8%</span>
              </div>
              <h3 className="text-2xl font-bold text-dashboard-text-primary mb-1">892</h3>
              <p className="text-sm text-gray-600">Approved</p>
            </div>

            <div className="bg-white rounded border border-dashboard-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">-2%</span>
              </div>
              <h3 className="text-2xl font-bold text-dashboard-text-primary mb-1">156</h3>
              <p className="text-sm text-gray-600">Pending Review</p>
            </div>

            <div className="bg-white rounded border border-dashboard-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">+5%</span>
              </div>
              <h3 className="text-2xl font-bold text-dashboard-text-primary mb-1">186</h3>
              <p className="text-sm text-gray-600">Rejected</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-white rounded border border-dashboard-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-dashboard-text-primary">Application Overview</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs bg-gray-100 rounded">Week</button>
                  <button className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded">Month</button>
                  <button className="px-3 py-1 text-xs bg-gray-100 rounded">Year</button>
                </div>
              </div>
              <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                <p className="text-gray-500">Chart Area</p>
              </div>
            </div>

            <div className="bg-white rounded border border-dashboard-border p-6">
              <h3 className="text-lg font-semibold text-dashboard-text-primary mb-6">Risk Distribution</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Low Risk</span>
                  </div>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Medium Risk</span>
                  </div>
                  <span className="text-sm font-medium">25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">High Risk</span>
                  </div>
                  <span className="text-sm font-medium">10%</span>
                </div>
              </div>
              <div className="mt-6 h-32 bg-gray-50 rounded flex items-center justify-center">
                <p className="text-gray-500">Pie Chart</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded border border-dashboard-border">
            <div className="p-6 border-b border-dashboard-border">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-dashboard-text-primary">Recent Applications</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applicant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">John Doe</td>
                    <td className="px-6 py-4 text-sm text-gray-500">$25,000</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800">Approved</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800">Low</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">Jan 15, 2024</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Jane Smith</td>
                    <td className="px-6 py-4 text-sm text-gray-500">$15,000</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-800">Pending</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-800">Medium</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">Jan 14, 2024</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Mike Johnson</td>
                    <td className="px-6 py-4 text-sm text-gray-500">$50,000</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-red-100 text-red-800">Rejected</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-red-100 text-red-800">High</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">Jan 13, 2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;