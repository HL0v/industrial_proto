import React from 'react';
import { MoreHorizontal, Clock, Rocket, CheckCircle2, AlertTriangle, GripVertical } from 'lucide-react';
import { cn } from '@/common/utils/cn';

const columns = [
  { id: 'pending', title: 'Pending', color: 'bg-slate-400', count: 3 },
  { id: 'in-progress', title: 'In Progress', color: 'bg-primary', count: 2 },
  { id: 'qa-review', title: 'QA Review', color: 'bg-tertiary', count: 1 },
  { id: 'completed', title: 'Completed', color: 'bg-secondary', count: 14 },
];

const tasks = [
  { 
    id: 1, 
    column: 'pending', 
    code: 'Milling-72', 
    title: 'Turbine Blade S7 Alloy Reinforcement', 
    time: '4.5h', 
    priority: 'High',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  { 
    id: 2, 
    column: 'in-progress', 
    code: 'Forge-09', 
    title: 'Hydraulic Manifold Block Pressing #402', 
    progress: 65, 
    batch: '12/20',
    status: 'Active',
    avatars: ['https://i.pravatar.cc/150?u=2', 'https://i.pravatar.cc/150?u=3']
  },
  { 
    id: 3, 
    column: 'in-progress', 
    code: 'Assembly-B', 
    title: 'Control Module Calibration - Unit 04', 
    time: '1.2h',
    avatar: 'https://i.pravatar.cc/150?u=4'
  },
  { 
    id: 4, 
    column: 'qa-review', 
    code: 'QC-Lab', 
    title: 'Thermal Stress Test: Gasket Batch X-22', 
    status: 'In Review',
    avatar: 'https://i.pravatar.cc/150?u=5'
  },
];

export const ProductionBoard = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="px-10 py-8 flex justify-between items-end">
        <div>
          <nav className="flex text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">
            <span className="hover:text-primary cursor-pointer transition-colors">Operations</span>
            <span className="mx-2">/</span>
            <span className="text-on-surface">Production Board</span>
          </nav>
          <h2 className="text-3xl font-black text-on-surface tracking-tight font-headline">Daily Output Control</h2>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-surface-container-high p-1 rounded-lg">
            <button className="px-4 py-1.5 text-xs font-bold bg-surface-container-lowest shadow-sm rounded-md text-primary">Kanban</button>
            <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-on-surface transition-colors">Gantt</button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-on-surface text-surface text-xs font-bold rounded-md hover:opacity-90 transition-opacity">
            <AlertTriangle className="w-4 h-4" />
            Refine View
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto px-10 pb-10">
        <div className="flex gap-6 h-full min-w-max">
          {columns.map((col) => (
            <div key={col.id} className="w-80 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className={cn("w-2 h-2 rounded-full", col.color)}></span>
                  <h3 className="font-headline font-bold text-sm uppercase tracking-wider text-slate-600">{col.title}</h3>
                  <span className="bg-surface-container-highest text-[10px] px-2 py-0.5 rounded-full font-bold">{col.count}</span>
                </div>
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 bg-surface-container-low rounded-xl p-3 space-y-4 overflow-y-auto">
                {tasks.filter(t => t.column === col.id).map((task) => (
                  <div key={task.id} className="bg-surface-container-lowest p-4 rounded-lg shadow-ambient group hover:translate-y-[-2px] transition-transform cursor-pointer relative overflow-hidden border-l-4 border-transparent hover:border-primary/30">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-surface-container-high text-on-surface-variant rounded uppercase">{task.code}</span>
                      <GripVertical className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-sm font-bold text-on-surface mb-2 leading-tight">{task.title}</h4>
                    
                    {task.progress !== undefined && (
                      <div className="mt-4">
                        <div className="w-full bg-surface-container-high h-1.5 rounded-full mb-1">
                          <div className="bg-primary h-full rounded-full" style={{ width: `${task.progress}%` }}></div>
                        </div>
                        <div className="flex justify-between text-[9px] font-bold uppercase text-slate-400">
                          <span>{task.progress}% Complete</span>
                          <span>Batch {task.batch}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-4 mt-4 pt-4 border-t ghost-border">
                      <div className="flex -space-x-2">
                        {task.avatars ? task.avatars.map((a, i) => (
                          <img key={i} src={a} className="w-6 h-6 rounded-full border-2 border-white" alt="Operator" />
                        )) : (
                          <img src={task.avatar} className="w-6 h-6 rounded-full border-2 border-white" alt="Operator" />
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                        {task.time ? (
                          <>
                            <Clock className="w-3 h-3" />
                            {task.time}
                          </>
                        ) : (
                          <>
                            <Rocket className="w-3 h-3" />
                            {task.status}
                          </>
                        )}
                      </div>
                      {task.priority && (
                        <div className="ml-auto flex items-center gap-1 text-[10px] font-bold text-primary">
                          <AlertTriangle className="w-3 h-3" />
                          {task.priority}
                        </div>
                      )}
                      {task.column === 'qa-review' && (
                        <div className="ml-auto flex items-center gap-1 text-[10px] font-bold text-tertiary uppercase tracking-tighter">
                          <CheckCircle2 className="w-3 h-3" />
                          In Review
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {col.id === 'completed' && (
                  <div className="bg-surface-container-lowest p-4 rounded-lg border-l-4 border-slate-200 opacity-70">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded uppercase">Forge-01</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-500 mb-2 leading-tight">Main Frame Chassis Structural Weld</h4>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t ghost-border">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Shipped to Depot</span>
                      <CheckCircle2 className="w-3 h-3 text-slate-300" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
