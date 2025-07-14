import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import { AdminDataProvider } from '@/contexts/AdminDataContext';
import { AdminLayout } from '@/components/AdminLayout';
import AdminDashboard from '@/pages/AdminDashboard';
import MenuManagement from '@/pages/MenuManagement';
import OrderManagement from '@/pages/OrderManagement';
import UserManagement from '@/pages/UserManagement';
import AdminSettings from '@/pages/AdminSettings';
import Login from '@/pages/Login';

function App() {
  return (
    <AuthProvider>
      <AdminDataProvider>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={
              <AdminLayout>
                <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/menu" element={<MenuManagement />} />
                  <Route path="/orders" element={<OrderManagement />} />
                  <Route path="/users" element={<UserManagement />} />
                  <Route path="/settings" element={<AdminSettings />} />
                  <Route path="*" element={<Navigate to="/admin" replace />} />
                </Routes>
              </AdminLayout>
            } />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
          <Toaster />
        </div>
      </AdminDataProvider>
    </AuthProvider>
  );
}

export default App;