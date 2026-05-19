import { motion } from 'motion/react';
import { Activity, BarChart2, Terminal } from 'lucide-react';

export function AdvancedTools() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[60px] font-black leading-[0.85] tracking-tighter uppercase mb-6"
            >
              Pro-Level <span className="text-emerald-accent">Tools.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#8E9299] text-lg font-light leading-relaxed mb-10 max-w-lg"
            >
              Analyze the market with institutional-grade charting, AI-driven insights, and a fully customizable trading terminal designed for power users.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Terminal, title: 'Customizable Terminal', desc: 'Drag, drop, and resize modules to fit your exact workflow.' },
                { icon: Activity, title: 'Real-Time Order Book', desc: 'Visualize market depth instantly with zero latency.' },
                { icon: BarChart2, title: 'Advanced Indicators', desc: 'Over 150+ technical indicators built right into the platform.' }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-accent/10 flex items-center justify-center text-emerald-accent shrink-0 mt-1">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Abstract Interface Graphic */}
          <div className="lg:w-1/2 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl bg-gradient-to-tr from-[#111] to-[#1a1a1a] border border-white/10 shadow-2xl overflow-hidden flex flex-col perspective-[1000px]"
            >
              {/* Fake UI Header */}
              <div className="h-10 border-b border-white/5 flex items-center px-4 space-x-2 bg-black/40">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              
              {/* Fake UI Body */}
              <div className="flex-1 p-4 grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-end relative overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <div className="text-xs text-gray-500">BTC/USD</div>
                    <div className="text-lg text-emerald-accent font-mono">94,231.50</div>
                  </div>
                  {/* Fake Candlesticks */}
                  <div className="flex items-end justify-between space-x-1 h-3/4 opacity-70">
                    {[40, 60, 45, 70, 50, 80, 65, 90, 75, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.05), duration: 0.5 }}
                        className={`w-full ${i % 2 === 0 ? 'bg-emerald-accent/80' : 'bg-red-500/80'} rounded-t-sm`}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="flex-1 rounded border border-white/5 bg-white/[0.02] p-3 flex flex-col">
                    <div className="text-xs text-gray-500 mb-2">Order Book</div>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex justify-between text-[10px] font-mono mb-1">
                        <span className="text-red-500">94,23{i}.50</span>
                        <span className="text-gray-400">1.00{i}</span>
                      </div>
                    ))}
                    <div className="my-1 border-t border-white/5"></div>
                    {[...Array(5)].map((_, i) => (
                      <div key={`g-${i}`} className="flex justify-between text-[10px] font-mono mt-1">
                        <span className="text-emerald-accent">94,22{i}.00</span>
                        <span className="text-gray-400">0.50{i}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex-[0.5] rounded bg-emerald-accent flex items-center justify-center text-black font-bold text-sm cursor-pointer hover:bg-emerald-400 transition-colors">
                    BUY Market
                  </div>
                </div>
              </div>
              
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none transform -skew-x-12 translate-x-1/2"></div>
            </motion.div>
            
            {/* Soft Glow Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-accent/20 blur-[100px] pointer-events-none -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
