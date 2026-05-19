import { motion } from 'motion/react';
import { Shield, Brain, Zap, Globe } from 'lucide-react';

const FEATURES = [
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'Your assets are protected by industry-leading encryption and cold storage solutions.'
  },
  {
    icon: Brain,
    title: 'AI Signal Generation',
    description: 'Leverage our proprietary neural networks to anticipate market movements before they happen.'
  },
  {
    icon: Zap,
    title: 'Lightning Execution',
    description: 'Direct market access infrastructure ensuring your trades are executed in milliseconds.'
  },
  {
    icon: Globe,
    title: 'Global Liquidity',
    description: 'Access deep liquidity pools across 50+ global exchanges from a single unified account.'
  }
];

export function Features() {
  return (
    <section className="py-24 relative bg-black border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[60px] font-black leading-[0.85] tracking-tighter uppercase mb-6"
          >
            Why Choose <span className="text-emerald-accent">Us</span>
          </motion.h2>
          <div className="w-16 h-1 bg-emerald-accent mx-auto mt-8 shadow-[0_0_10px_rgba(0,255,159,0.5)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden transition-all hover:bg-white/10 shadow-[0_4px_60px_-12px_rgba(0,255,159,0.0)] hover:shadow-[0_4px_60px_-12px_rgba(0,255,159,0.08)] group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-emerald-accent transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3">{feature.title}</h3>
                <p className="text-[#8E9299] text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
