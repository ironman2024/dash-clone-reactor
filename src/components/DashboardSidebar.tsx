import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FolderOpen, 
  CreditCard, 
  FileText, 
  ClipboardCheck, 
  UserCheck, 
  Banknote, 
  Building, 
  DollarSign, 
  Minus, 
  HelpCircle 
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Manage Users', path: '/users', badge: '1' },
  { icon: FolderOpen, label: 'Categories', path: '/categories' },
  { icon: CreditCard, label: 'Loan Plans', path: '/loan-plans' },
  { icon: FileText, label: 'Credit Assessment', path: '/credit-assessment', active: true },
  { icon: ClipboardCheck, label: 'All Assessments', path: '/assessments' },
  { icon: UserCheck, label: 'Follow-ups', path: '/follow-ups' },
  { icon: Banknote, label: 'Loans', path: '/loans', badge: '1' },
  { icon: Building, label: 'Payment Gateways', path: '/payment-gateways' },
  { icon: DollarSign, label: 'Deposits', path: '/deposits' },
  { icon: Minus, label: 'Withdrawals', path: '/withdrawals' },
  { icon: HelpCircle, label: 'Support Ticket', path: '/support' },
];

export const DashboardSidebar = () => {
  return (
    <div className="w-64 bg-dashboard-sidebar text-dashboard-sidebar-foreground h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-dashboard-sidebar-hover">
        <h1 className="text-2xl font-bold text-white">finovel</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 text-sm transition-colors relative group ${
                    item.active || isActive
                      ? 'bg-dashboard-sidebar-active text-white border-r-2 border-dashboard-sidebar-active'
                      : 'text-dashboard-sidebar-foreground hover:bg-dashboard-sidebar-hover hover:text-white'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};