import React from 'react';
import { Search, Filter, MoreHorizontal, UserPlus, History, Shield, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/common/utils/cn';

const members = [
  { id: 1, name: 'Alex Rivera', email: 'rivera.a@ironclad.io', role: 'Franchise', networkId: 'IC-992-0X', status: 'Active', uptime: 98.2, avatar: 'https://i.pravatar.cc/150?u=11' },
  { id: 2, name: 'Sarah Chen', email: 'chen.s@ironclad.io', role: 'Admin', networkId: 'IC-042-77', status: 'Active', uptime: 100, avatar: 'https://i.pravatar.cc/150?u=12', active: true },
  { id: 3, name: 'Marcus Thorne', email: 'thorne.m@ironclad.io', role: 'Operator', networkId: 'IC-118-Y9', status: 'Offline', uptime: 72.4, avatar: 'https://i.pravatar.cc/150?u=13' },
  { id: 4, name: 'Lana Jenkins', email: 'jenkins.l@ironclad.io', role: 'Operator', networkId: 'IC-882-LL', status: 'Active', uptime: 94.8, avatar: 'https://i.pravatar.cc/150?u=14' },
];

export const MembersList = () => {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-headline font-extrabold text-on-background tracking-tight">Team Management</h2>
          <p className="text-slate-500 mt-2 font-medium">Control access levels and monitor operator uptime across the industrial network.</p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-md flex items-center gap-2 font-headline font-bold text-sm shadow-ambient hover:opacity-90 transition-all active:scale-95">
          <UserPlus className="w-4 h-4" />
          Add Member
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 bg-surface-container-low rounded-xl p-8 flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Total Network Strength</p>
            <h3 className="text-5xl font-headline font-black text-on-background">142 <span className="text-lg font-medium text-slate-400">Members</span></h3>
            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-xs font-bold">128 Active</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span className="text-xs font-bold">14 Offline</span>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent flex items-center justify-end pr-8">
            <Shield className="w-32 h-32 text-primary/10" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 bg-surface-container-highest rounded-xl p-8 flex flex-col justify-between border-b-4 border-primary">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">Active Shifts</p>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-bold">Operational Load</span>
              <span className="font-headline font-bold text-primary">84%</span>
            </div>
            <div className="w-full bg-white rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '84%' }}></div>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-4 leading-relaxed italic">System is performing within peak efficiency parameters for current crew size.</p>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-ambient overflow-hidden border ghost-border">
        <div className="px-8 py-6 flex justify-between items-center bg-surface-container-low">
          <div className="flex gap-4">
            <button className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold">All Users</button>
            <button className="text-slate-500 hover:text-primary transition-colors px-4 py-1.5 text-xs font-bold">Franchise</button>
            <button className="text-slate-500 hover:text-primary transition-colors px-4 py-1.5 text-xs font-bold">Operators</button>
          </div>
          <button className="text-slate-400 hover:text-on-surface">
            <Filter className="w-4 h-4" />
          </button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-left">
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Member</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Access Level</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Network ID</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Current Status</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Uptime</th>
              <th className="px-8 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {members.map((member) => (
              <tr key={member.id} className={cn("group hover:bg-surface-container-high transition-colors", member.active && "border-l-4 border-primary")}>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <img src={member.avatar} className="w-10 h-10 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all" alt={member.name} />
                    <div>
                      <p className="text-sm font-bold text-on-surface">{member.name}</p>
                      <p className="text-xs text-slate-500">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider",
                    member.role === 'Admin' ? "bg-primary text-white" : 
                    member.role === 'Franchise' ? "bg-secondary-container text-on-secondary-container" :
                    "bg-surface-container-highest text-on-surface-variant"
                  )}>
                    {member.role}
                  </span>
                </td>
                <td className="px-8 py-5 font-mono text-xs text-slate-500">{member.networkId}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <span className={cn("w-2 h-2 rounded-full", member.status === 'Active' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-slate-400")}></span>
                    <span className={cn("text-xs font-semibold", member.status === 'Active' ? "text-emerald-700" : "text-slate-500")}>{member.status}</span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <div className="w-24 bg-slate-200 h-1 rounded-full overflow-hidden">
                    <div className={cn("h-full", member.uptime > 95 ? "bg-emerald-500" : "bg-yellow-500")} style={{ width: `${member.uptime}%` }}></div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">{member.uptime}% monthly</p>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="text-slate-300 hover:text-primary transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-8 py-4 bg-surface-container-low flex justify-between items-center">
          <p className="text-xs text-slate-500 font-medium">Showing 4 of 142 total members</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded border ghost-border flex items-center justify-center text-slate-400 hover:bg-white transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded border ghost-border flex items-center justify-center text-slate-500 hover:bg-white transition-colors text-xs font-bold">2</button>
            <button className="w-8 h-8 rounded border ghost-border flex items-center justify-center text-slate-400 hover:bg-white transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-5">
          <h4 className="font-headline font-bold text-lg mb-4 flex items-center gap-2 text-on-surface">
            <History className="w-5 h-5 text-primary" />
            Recent Access Logs
          </h4>
          <div className="space-y-4">
            <div className="bg-surface-container p-4 rounded-lg flex items-start gap-4">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <History className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">Sarah Chen <span className="font-normal text-slate-500">authorized Terminal B-9</span></p>
                <p className="text-[10px] text-slate-400 mt-0.5">2 minutes ago • ID: IC-042-77</p>
              </div>
            </div>
            <div className="bg-surface-container p-4 rounded-lg flex items-start gap-4 opacity-70">
              <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center flex-shrink-0">
                <History className="w-4 h-4 text-slate-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">Marcus Thorne <span className="font-normal text-slate-500">ended shift at Dock 12</span></p>
                <p className="text-[10px] text-slate-400 mt-0.5">44 minutes ago • ID: IC-118-Y9</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 bg-on-background text-white p-8 rounded-xl relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="font-headline font-bold text-xl mb-2">Network Security Protocol</h4>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">Multi-factor authentication is required for all Admin and Franchise access levels. Last security audit: <span className="text-primary-fixed">Oct 24, 2023</span>.</p>
            <button className="mt-6 border border-white/20 hover:bg-white/10 px-4 py-2 rounded text-xs font-bold transition-all flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Audit PDF
            </button>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
            <Shield className="w-48 h-48" />
          </div>
        </div>
      </div>
    </div>
  );
};
