import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { TrendingUp, ShoppingCart, Activity, Zap } from 'lucide-react';
import { cn } from '@/common/utils/cn';

const data = [
  { name: 'Shift A', output: 4000, efficiency: 95 },
  { name: 'Shift B', output: 3000, efficiency: 88 },
  { name: 'Shift C', output: 2000, efficiency: 92 },
  { name: 'Shift D', output: 2780, efficiency: 90 },
  { name: 'Shift E', output: 1890, efficiency: 85 },
  { name: 'Shift F', output: 2390, efficiency: 93 },
  { name: 'Shift G', output: 3490, efficiency: 96 },
];

export const DashboardView = () => {
  return (
    <div className="p-10 space-y-10">
      <section className="flex justify-between items-end">
        <div>
          <span className="text-primary font-bold uppercase tracking-widest text-xs">Live Environment</span>
          <h3 className="text-4xl font-black font-headline text-on-surface mt-1">Production Performance</h3>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-surface-container rounded-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Real-time Stream</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Chart */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-ambient border ghost-border">
          <div className="flex justify-between items-start mb-10">
            <div>
              <p className="text-slate-500 font-bold uppercase tracking-tighter text-xs">Total Output</p>
              <h4 className="text-5xl font-black font-headline text-on-surface mt-1 tracking-tight">12,482 <span className="text-lg font-medium text-slate-400 uppercase">Units</span></h4>
            </div>
            <div className="flex flex-col items-end">
              <span className="flex items-center text-primary font-bold text-sm">
                <TrendingUp className="w-4 h-4 mr-1" /> +14.2%
              </span>
              <span className="text-[10px] text-slate-400 uppercase mt-1">vs Last Shift</span>
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4beba33" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#af101a11' }}
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: 'none', boxShadow: '0 12px 40px rgba(17, 29, 35, 0.06)' }}
                />
                <Bar dataKey="output" fill="#af101a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Metrics */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-low p-6 rounded-xl border ghost-border">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">MTD Revenue</span>
            </div>
            <div className="mt-4">
              <h5 className="text-3xl font-black font-headline text-on-surface">$1.24M</h5>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-primary font-bold text-xs">+8.5%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Target: $1.5M</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl border ghost-border">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-tertiary/10 rounded-lg text-tertiary">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Uptime</span>
            </div>
            <div className="mt-4">
              <h5 className="text-3xl font-black font-headline text-on-surface">342h 12m</h5>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-tertiary font-bold text-xs">Stable</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-tighter">99.9% Reliability</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 bg-surface-container-high/50 p-8 rounded-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black font-headline text-on-surface uppercase tracking-tight">Activity Feed</h3>
            <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="space-y-6 relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-outline-variant/30"></div>
            {[
              { title: 'Batch #402 Completed', desc: 'Line A-12 finished production cycle with 100% yield.', time: '12 Minutes Ago', color: 'bg-primary' },
              { title: 'Maintenance Override', desc: 'Operator Marcus cleared sensor warning on Belt C.', time: '45 Minutes Ago', color: 'bg-tertiary' },
              { title: 'Inventory Restocked', desc: 'Bulk shipment of Raw Carbon Steel confirmed in Bay 4.', time: '2 Hours Ago', color: 'bg-on-surface' },
            ].map((item, i) => (
              <div key={i} className="relative pl-8">
                <div className={cn("absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-background", item.color)}>
                  <Activity className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface leading-tight">{item.title}</p>
                  <p className="text-xs text-on-surface-variant mt-1">{item.desc}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 tracking-tighter">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 bg-surface-container-lowest p-8 rounded-xl shadow-ambient border ghost-border">
          <p className="text-slate-500 font-bold uppercase tracking-tighter text-xs mb-4">Quality Rate</p>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#af101a" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#af101a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4beba33" />
                <XAxis dataKey="name" hide />
                <Tooltip />
                <Area type="monotone" dataKey="efficiency" stroke="#af101a" fillOpacity={1} fill="url(#colorEff)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-bold text-on-surface">Average Efficiency: 91.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
