
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mic, Archive } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const DashboardSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      icon: Mic,
      label: 'Create',
      path: '/dashboard',
      active: location.pathname === '/dashboard'
    },
    {
      icon: Archive,
      label: 'Library',
      path: '/dashboard/library',
      active: location.pathname === '/dashboard/library'
    }
  ];

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="border-b border-white/10 p-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="h-8 w-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-md flex items-center justify-center">
            <span className="text-white font-bold">SC</span>
          </span>
          <span className="font-display font-bold text-xl text-white">SpeechCraft</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton 
                asChild 
                isActive={item.active}
                tooltip={item.label}
              >
                <Link to={item.path}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
