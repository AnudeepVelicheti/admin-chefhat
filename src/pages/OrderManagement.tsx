import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OrderManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-sans font-bold text-chefhut-purple tracking-wide">Order Management</h1>
        <p className="text-gray-600">View and manage customer orders</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Order management features will be available soon.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderManagement;