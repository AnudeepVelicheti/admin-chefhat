import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Users, ShoppingBag, Menu } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Orders',
      value: '156',
      icon: ShoppingBag,
      change: '+12%',
    },
    {
      title: 'Active Users',
      value: '89',
      icon: Users,
      change: '+5%',
    },
    {
      title: 'Menu Items',
      value: '24',
      icon: Menu,
      change: '+2',
    },
    {
      title: 'Revenue',
      value: '$2,340',
      icon: BarChart3,
      change: '+18%',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-sans font-bold text-chefhut-purple tracking-wide">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Order management features coming soon...</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Items</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Analytics features coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;