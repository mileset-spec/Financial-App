import { motion } from 'motion/react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const MARKET_DATA = [
  {
    name: 'Bitcoin',
    symbol: 'BTC/USD',
    price: '$94,231.50',
    change: 4.25,
    data: [40, 42, 41, 45, 44, 48, 47, 50],
    color: '#00FF9F'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH/USD',
    price: '$3,421.10',
    change: 2.15,
    data: [20, 21, 23, 21, 25, 24, 26, 28],
    color: '#00FF9F'
  },
  {
    name: 'Euro',
    symbol: 'EUR/USD',
    price: '$1.0842',
    change: -0.42,
    data: [35, 33, 34, 32, 28, 30, 27, 26],
    color: '#FF3B5C'
  },
  {
    name: 'Gold',
    symbol: 'XAU/USD',
    price: '$2,341.20',
    change: 0.85,
    data: [60, 62, 61, 65, 68, 67, 70, 72],
    color: '#00FF9F'
  }
];

export function LiveMarkets() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[60px] font-black leading-[0.85] tracking-tighter uppercase mb-6"
          >
            Live <span className="text-emerald-accent">Markets</span>
          </motion.h2>
          <p className="text-[#8E9299] max-w-2xl mx-auto font-light text-lg leading-relaxed">
            Monitor the top performing assets across cryptocurrency, forex, and commodities in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKET_DATA.map((asset, index) => {
            const isPositive = asset.change >= 0;
            const chartData = asset.data.map((val, i) => ({ value: val, index: i }));

            return (
              <motion.div
                key={asset.symbol}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden transition-all hover:bg-white/10 shadow-[0_4px_60px_-12px_rgba(0,255,159,0.0)] hover:shadow-[0_4px_60px_-12px_rgba(0,255,159,0.08)]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8E9299] mb-1">{asset.name}</h3>
                    <p className="text-xs font-bold text-white">{asset.symbol}</p>
                  </div>
                  <div className={`px-2 py-1 rounded text-[9px] font-bold tracking-tighter uppercase ${isPositive ? 'bg-emerald-accent/10 text-emerald-accent' : 'bg-danger/10 text-danger'}`}>
                    {isPositive ? '+' : ''}{asset.change}%
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-[28px] font-mono font-bold tracking-tight text-white/90">
                    {asset.price}
                  </p>
                </div>

                <div className="h-16 w-full opacity-60 group-hover:opacity-100 transition-opacity">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke={asset.color} 
                        strokeWidth={2} 
                        dot={false}
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-emerald-accent/0 group-hover:ring-emerald-accent/20 transition-all pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
