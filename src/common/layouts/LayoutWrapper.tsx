import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, TopBar } from './DashboardLayout';

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-64">
        <TopBar />
        <main className="pt-16 min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
