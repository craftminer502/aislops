import { motion } from "framer-motion";
import { Zap, BarChart3, Users, TrendingUp, ArrowUpRight, Clock } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-fuchsia-500/5 blur-[80px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col gap-4 md:gap-6 flex-1"
      >
        {/* Top Bar */}
        <motion.div
          variants={item}
          className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl flex items-center justify-between px-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white/90">Nova</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/40">
            <span className="text-white/70 cursor-pointer hover:text-white transition-colors">Dashboard</span>
            <span className="cursor-pointer hover:text-white/70 transition-colors">Analytics</span>
            <span className="cursor-pointer hover:text-white/70 transition-colors">Reports</span>
            <span className="cursor-pointer hover:text-white/70 transition-colors">Settings</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
        </motion.div>

        {/* Main Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 grid-rows-[auto] md:grid-rows-3 gap-4 md:gap-6">
          {/* Top-left: Revenue card */}
          <motion.div
            variants={item}
            className="col-span-1 row-span-1 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl p-6 flex flex-col justify-between group hover:bg-white/[0.05] transition-all duration-500"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-white/30 uppercase tracking-widest">Revenue</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight">$48.2k</p>
              <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" /> +12.5% from last month
              </p>
            </div>
          </motion.div>

          {/* Top-right: Chart area */}
          <motion.div
            variants={item}
            className="col-span-1 md:col-span-2 md:row-span-2 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl p-6 flex flex-col group hover:bg-white/[0.05] transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-medium text-white/30 uppercase tracking-widest">Performance</span>
                <p className="text-lg font-semibold mt-1">Weekly Overview</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium">7 days</div>
              </div>
            </div>
            {/* Fake chart bars */}
            <div className="flex-1 flex items-end gap-2 md:gap-3 pb-4">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-violet-500/20 to-violet-500/60 relative group/bar"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white/30 opacity-0 group-hover/bar:opacity-100 transition-opacity">
                    {h}%
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-white/20 mt-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <span key={d} className="flex-1 text-center">{d}</span>
              ))}
            </div>
          </motion.div>

          {/* Middle-left: Users card */}
          <motion.div
            variants={item}
            className="col-span-1 md:row-span-2 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl p-6 flex flex-col justify-between group hover:bg-white/[0.05] transition-all duration-500"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-white/30 uppercase tracking-widest">Active Users</span>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <p className="text-4xl font-bold tracking-tight mt-4">2,847</p>
              <p className="text-xs text-white/30 mt-1">Online right now</p>
            </div>

            <div className="space-y-3 mt-6">
              {[
                { label: "Desktop", value: 64, color: "bg-violet-500" },
                { label: "Mobile", value: 28, color: "bg-cyan-500" },
                { label: "Tablet", value: 8, color: "bg-fuchsia-500" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/40">{item.label}</span>
                    <span className="text-white/60">{item.value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Mini avatar stack */}
            <div className="flex items-center gap-2 mt-6">
              <div className="flex -space-x-2">
                {[
                  "from-violet-400 to-fuchsia-400",
                  "from-cyan-400 to-blue-400",
                  "from-amber-400 to-orange-400",
                  "from-emerald-400 to-teal-400",
                ].map((g, i) => (
                  <div key={i} className={`w-6 h-6 rounded-full bg-gradient-to-br ${g} border-2 border-[#0a0a0f]`} />
                ))}
              </div>
              <span className="text-[10px] text-white/30">+2.8k more</span>
            </div>
          </motion.div>

          {/* Bottom-right: Recent activity */}
          <motion.div
            variants={item}
            className="col-span-1 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl p-6 flex flex-col group hover:bg-white/[0.05] transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-white/30 uppercase tracking-widest">Recent</span>
              <Clock className="w-4 h-4 text-white/20" />
            </div>
            <div className="space-y-3 flex-1">
              {[
                { text: "New signup", time: "2m ago", dot: "bg-emerald-400" },
                { text: "Payment received", time: "8m ago", dot: "bg-violet-400" },
                { text: "Server deployed", time: "15m ago", dot: "bg-cyan-400" },
              ].map((a, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                  <span className="text-sm text-white/60 flex-1">{a.text}</span>
                  <span className="text-[10px] text-white/20">{a.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={item}
          className="w-full h-20 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl flex items-center justify-between px-6"
        >
          <div className="flex items-center gap-8">
            {[
              { icon: BarChart3, label: "Conversions", value: "3,241" },
              { icon: Users, label: "Visitors", value: "12.8k" },
              { icon: TrendingUp, label: "Growth", value: "+24%" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-white/20" />
                <div>
                  <p className="text-xs text-white/30">{label}</p>
                  <p className="text-sm font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity">
            View Report
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
