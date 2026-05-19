import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Standard',
    price: 'Free',
    desc: 'For casual traders getting started.',
    features: ['Real-time market data', 'Basic charting tools', 'Standard execution speed', 'up to $10k volume/mo'],
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    desc: 'For serious traders who demand more.',
    features: ['Advanced indicator suite', 'AI signal generation', 'Lightning execution (Sub-10ms)', 'up to $1M volume/mo', 'Dedicated API access'],
    highlighted: true
  },
  {
    name: 'Institutional',
    price: 'Custom',
    desc: 'For funds and high-frequency firms.',
    features: ['Uncapped trading volume', 'Co-located servers', 'Custom AI model training', 'White-glove OTC desk', 'Private Slack channel'],
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section className="py-24 relative bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[60px] font-black leading-[0.85] tracking-tighter uppercase mb-6 text-white">
            Simple <span className="text-emerald-accent">Pricing.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-[32px] flex flex-col backdrop-blur-xl ${
                plan.highlighted 
                ? 'bg-[#00FF9F05] border border-[#00FF9F] scale-105 shadow-[0_4px_60px_-12px_rgba(0,255,159,0.2)] z-10 py-12' 
                : 'bg-white/5 border border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-emerald-accent text-black text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl text-white font-medium mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-6">{plan.desc}</p>
              
              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-bold font-mono text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-500 ml-1 font-mono">{plan.period}</span>}
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map(f => (
                  <div key={f} className="flex items-start space-x-3 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-emerald-accent' : 'text-gray-500'}`} />
                    <span className="text-gray-300">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-full font-semibold transition-all ${
                plan.highlighted 
                ? 'bg-emerald-accent text-black hover:bg-emerald-400' 
                : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
