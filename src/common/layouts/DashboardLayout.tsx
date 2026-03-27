import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Kanban, 
  MessageSquare, 
  Users, 
  Settings, 
  HelpCircle,
  Plus,
  Search,
  Bell,
  Radio,
  Network
} from 'lucide-react';
import { cn } from '@/common/utils/cn';
import { useAuthStore } from '@/store/useAuthStore';

export const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Kanban, label: 'Production', path: '/production' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: Users, label: 'Team', path: '/team' },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 z-40 flex flex-col bg-surface-container-low border-none">
      <div className="flex flex-col h-full py-8 px-4">
        <div className="mb-10 px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 kinetic-gradient rounded-lg flex items-center justify-center shadow-lg">
              <Network className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-primary tracking-widest leading-none">IRONCLAD</h1>
              <p className="font-headline font-semibold tracking-tighter uppercase text-[10px] text-slate-500 mt-1">Industrial OS</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg font-headline font-semibold tracking-tighter uppercase text-xs transition-all duration-200 active:scale-[0.97]",
                isActive 
                  ? "text-primary border-l-4 border-primary bg-surface-container-high" 
                  : "text-slate-500 opacity-80 hover:bg-surface-container-high"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button className="mt-4 kinetic-gradient text-white py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
          <Plus className="w-4 h-4" />
          <span className="font-headline font-bold text-xs uppercase tracking-widest">New Run</span>
        </button>

        <div className="mt-auto pt-6 space-y-1">
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 text-slate-500 opacity-80 hover:bg-surface-container-high rounded-lg font-headline font-semibold tracking-tighter uppercase text-xs"
          >
            <Settings className="w-4 h-4" />
            Settings
          </NavLink>
          <NavLink
            to="/support"
            className="flex items-center gap-3 px-4 py-3 text-slate-500 opacity-80 hover:bg-surface-container-high rounded-lg font-headline font-semibold tracking-tighter uppercase text-xs"
          >
            <HelpCircle className="w-4 h-4" />
            Support
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export const TopBar = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="fixed top-0 right-0 left-64 h-16 z-30 flex items-center justify-between px-10 bg-background/90 backdrop-blur-xl border-b ghost-border shadow-ambient">
      <div className="flex items-center gap-8">
        <h2 className="text-xl font-extrabold text-on-surface font-headline uppercase tracking-tight">Command Center</h2>
        <div className="relative w-80 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            className="w-full bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all" 
            placeholder="Search systems..." 
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-primary transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <button className="text-slate-400 hover:text-primary transition-colors">
            <Radio className="w-5 h-5" />
          </button>
        </div>
        <div className="h-8 w-px bg-outline-variant/30"></div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs font-bold text-on-surface leading-none">{user?.name}</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter mt-1">{user?.role}</p>
          </div>
          <img 
            alt="User Avatar" 
            className="w-10 h-10 rounded-lg object-cover border-2 border-primary/20" 
            src={user?.avatar}
          />
        </div>
      </div>
    </header>
  );
};
