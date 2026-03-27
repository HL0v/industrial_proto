import React from 'react';
import { 
  Plus, 
  Info, 
  Users, 
  Star, 
  Send, 
  Bold, 
  Italic, 
  Link as LinkIcon, 
  List, 
  AtSign, 
  PlusCircle,
  Gauge,
  Pin,
  Video
} from 'lucide-react';
import { cn } from '@/common/utils/cn';

const channels = [
  { id: 'production', name: 'production', active: false },
  { id: 'management', name: 'management', active: true },
  { id: 'support', name: 'support', active: false },
];

const dms = [
  { id: 1, name: 'Sarah Jenkins', avatar: 'https://i.pravatar.cc/150?u=11', online: true },
  { id: 2, name: 'Mark Rybak', avatar: 'https://i.pravatar.cc/150?u=12', online: false },
];

const messages = [
  { id: 1, user: 'Sarah Jenkins', time: '10:42 AM', text: "The CNC router on Line 4 is showing a slight calibration drift. I've scheduled a maintenance window for 2 PM today. Does anyone have priority runs that might be impacted?", avatar: 'https://i.pravatar.cc/150?u=11' },
  { id: 2, user: 'Chief Operator', time: '10:45 AM', text: "Thanks Sarah. We have the Titanium housing batch coming off the lathe around that time. It shouldn't need the router until late shift. @Mark Rybak, can you confirm the floor plan?", avatar: 'https://i.pravatar.cc/150?u=10', isMe: true },
  { id: 3, type: 'system', text: 'Production Update' },
  { id: 4, type: 'alert', title: 'Daily Yield Report Generated', desc: 'Line 1-6 aggregate efficiency: 98.4% (Target: 95%)', action: 'View Dashboard' },
  { id: 5, user: 'Mark Rybak', time: '11:02 AM', text: "Confirmed. Line 4 is clear for maintenance. I'll re-route the secondary team to handle the off-load from the lathe. Will update the kanban cards now.", avatar: 'https://i.pravatar.cc/150?u=12' },
];

export const ManagementChat = () => {
  return (
    <div className="flex h-full overflow-hidden">
      {/* Channels Sidebar */}
      <div className="w-72 bg-surface-container-low flex flex-col border-r ghost-border">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline font-extrabold text-sm tracking-widest text-on-surface uppercase">Channels</h3>
            <button className="text-primary hover:bg-primary/10 p-1 rounded transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <ul className="space-y-1">
            {channels.map(ch => (
              <li key={ch.id}>
                <button className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                  ch.active ? "bg-surface-container-highest text-primary border-l-2 border-primary" : "text-slate-500 hover:bg-surface-container-high"
                )}>
                  <span className={cn(ch.active ? "text-primary" : "text-slate-400")}>#</span>
                  <span>{ch.name}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h3 className="font-headline font-extrabold text-sm tracking-widest text-on-surface uppercase mb-6">Direct Messages</h3>
            <ul className="space-y-3">
              {dms.map(dm => (
                <li key={dm.id} className="flex items-center gap-3 px-3 cursor-pointer group">
                  <div className="relative">
                    <img src={dm.avatar} className={cn("w-8 h-8 rounded", !dm.online && "opacity-60")} alt={dm.name} />
                    {dm.online && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-surface-container-low rounded-full"></div>}
                  </div>
                  <span className={cn("text-sm font-medium transition-colors", dm.online ? "text-slate-600" : "text-slate-400 group-hover:text-slate-600")}>{dm.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-surface overflow-hidden">
        <div className="h-14 px-8 border-b ghost-border flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-on-surface"># management</span>
            <Star className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button className="hover:text-primary transition-colors"><Info className="w-5 h-5" /></button>
            <button className="hover:text-primary transition-colors"><Users className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
          {messages.map((msg) => {
            if (msg.type === 'system') {
              return (
                <div key={msg.id} className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-outline-variant/10"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">{msg.text}</span>
                  <div className="h-px flex-1 bg-outline-variant/10"></div>
                </div>
              );
            }
            if (msg.type === 'alert') {
              return (
                <div key={msg.id} className="bg-surface-container-low rounded-xl p-4 border-l-4 border-primary flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{msg.title}</p>
                    <p className="text-xs text-slate-500 mb-3">{msg.desc}</p>
                    <button className="bg-white border border-outline-variant text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded shadow-sm hover:bg-slate-50 transition-colors">{msg.action}</button>
                  </div>
                </div>
              );
            }
            return (
              <div key={msg.id} className="flex gap-4 group">
                <img src={msg.avatar} className="w-10 h-10 rounded shrink-0 bg-surface-container" alt={msg.user} />
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className={cn("font-bold", msg.isMe ? "text-primary" : "text-on-surface")}>{msg.user}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{msg.time}</span>
                    {msg.isMe && <span className="bg-primary/10 text-primary text-[9px] px-1.5 py-0.5 rounded font-black uppercase tracking-widest">You</span>}
                  </div>
                  <div className="text-slate-600 leading-relaxed max-w-3xl">
                    {msg.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-6 bg-surface shrink-0">
          <div className="max-w-4xl mx-auto bg-surface-container-high rounded-xl border ghost-border shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-outline-variant/5">
              <button className="text-slate-400 hover:text-primary transition-colors"><Bold className="w-4 h-4" /></button>
              <button className="text-slate-400 hover:text-primary transition-colors"><Italic className="w-4 h-4" /></button>
              <button className="text-slate-400 hover:text-primary transition-colors"><LinkIcon className="w-4 h-4" /></button>
              <div className="w-px h-4 bg-outline-variant/20 mx-1"></div>
              <button className="text-slate-400 hover:text-primary transition-colors"><List className="w-4 h-4" /></button>
            </div>
            <div className="flex items-end px-4 py-3">
              <textarea 
                className="flex-1 bg-transparent border-none resize-none focus:ring-0 text-on-surface placeholder:text-slate-400 py-1" 
                placeholder="Message #management" 
                rows={1}
              />
              <div className="flex items-center gap-3">
                <button className="text-slate-400 hover:text-primary transition-colors mb-1"><AtSign className="w-5 h-5" /></button>
                <button className="text-slate-400 hover:text-primary transition-colors mb-1"><PlusCircle className="w-5 h-5" /></button>
                <button className="bg-primary text-white p-2 rounded-lg flex items-center justify-center hover:opacity-90 transition-colors shadow-md active:scale-95">
                  <Send className="w-5 h-5 fill-current" />
                </button>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-3">Shift A is currently online • 14 operators active</p>
        </div>
      </div>

      {/* Channel Intel Sidebar */}
      <div className="w-80 bg-surface-container-low border-l ghost-border p-6 overflow-y-auto hidden xl:flex flex-col gap-6">
        <h3 className="font-headline font-extrabold text-sm tracking-widest text-on-surface uppercase">Channel Intel</h3>
        
        <div className="bg-white rounded-xl p-5 shadow-ambient">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Gauge className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Throughput</span>
          </div>
          <div className="text-2xl font-black text-on-surface mb-1">92.4 <span className="text-xs font-medium text-slate-400">units/hr</span></div>
          <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-4/5"></div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pinned Docs</span>
            <Pin className="w-3 h-3 text-slate-400" />
          </div>
          <div className="space-y-3">
            <div className="bg-surface-container-highest p-3 rounded-lg border border-transparent hover:border-primary/20 transition-all cursor-pointer">
              <p className="text-xs font-bold text-on-surface truncate">Safety_Protocol_V4.pdf</p>
              <p className="text-[10px] text-slate-400 font-medium">Updated 2 days ago</p>
            </div>
            <div className="bg-surface-container-highest p-3 rounded-lg border border-transparent hover:border-primary/20 transition-all cursor-pointer">
              <p className="text-xs font-bold text-on-surface truncate">Floor_Mapping_Phase_2.dwg</p>
              <p className="text-[10px] text-slate-400 font-medium">Pinned by Chief Operator</p>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="rounded-xl overflow-hidden relative group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/factory/400/200" 
              className="w-full h-32 object-cover" 
              alt="Factory Floor" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex items-end p-3">
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">Live Feed: Bay 04</p>
            </div>
            <div className="absolute top-2 right-2 flex items-center gap-1 bg-primary/90 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-widest">
              <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
              Live
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
