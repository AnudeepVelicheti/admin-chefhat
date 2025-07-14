import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Settings, 
  Menu, 
  Users, 
  ShoppingBag, 
  BarChart3,
  LogOut
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { useAuth } from '@/contexts/AuthContext';

const adminItems = [
  { title: 'Dashboard', url: '/admin', icon: BarChart3 },
  { title: 'Menu Management', url: '/admin/menu', icon: Menu },
  { title: 'Orders', url: '/admin/orders', icon: ShoppingBag },
  { title: 'Users', url: '/admin/users', icon: Users },
  { title: 'Settings', url: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  const location = useLocation();
  const { signOut } = useAuth();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'bg-chefhut-orange text-white font-medium' : 'hover:bg-chefhut-orange/10 text-chefhut-purple';

  return (
    <Sidebar className="w-60 admin-sidebar"
    >
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent>
        <div className="p-4 border-b">
          <h2 className="text-lg font-sans font-bold text-chefhut-purple tracking-wider">
            CHEF HUT
          </h2>
          <p className="text-sm text-gray-600">Admin Panel</p>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-chefhut-purple font-medium">
            Administration
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t">
          <SidebarMenuButton onClick={signOut} className="w-full text-red-600 hover:bg-red-50">
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}