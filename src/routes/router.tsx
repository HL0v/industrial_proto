import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/common/layouts/LayoutWrapper';
import { DashboardView } from '@/modules/dashboard/views/DashboardView';
import { ProductionBoard } from '@/modules/production/views/ProductionBoard';
import { MembersList } from '@/modules/members/views/MembersList';
import { ManagementChat } from '@/modules/team-chat/views/ManagementChat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardView />,
      },
      {
        path: 'production',
        element: <ProductionBoard />,
      },
      {
        path: 'messages',
        element: <ManagementChat />,
      },
      {
        path: 'team',
        element: <MembersList />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
