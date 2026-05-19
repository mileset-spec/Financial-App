import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const ASSETS = [
  { symbol: 'BTC', price: '$94,231.50', change: 4.2 },
  { symbol: 'ETH', price: '$3,421.10', change: 2.1 },
  { symbol: 'SOL', price: '$245.80', change: 8.4 },
  { symbol: 'XRP', price: '$1.05', change: -1.2 },
  { symbol: 'GOLD', price: '$2,341.20', change: 0.5 },
  { symbol: 'SILVER', price: '$28.40', change: -0.3 },
  { symbol: 'CRUDE OIL', price: '$78.50', change: 1.4 },
  { symbol: 'NAT GAS', price: '$2.10', change: -2.5 },
];

export function Ticker({ isFixed = true }: { isFixed?: boolean }) {
  const [tickerItems, setTickerItems] = useState(ASSETS);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerItems((prev) =>
        prev.map((item) => {
          const shift = (Math.random() - 0.5) * 0.5; // Small random change
          const newChange = item.change + shift;
          return { ...item, change: Number(newChange.toFixed(2)) };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${isFixed ? 'fixed top-0 left-0 border-b border-[#00FF9F1A]' : 'relative border-t border-[#00FF9F1A] mt-10'} w-full h-8 bg-black z-50 overflow-hidden flex items-center`}>
      <motion.div
        className="flex whitespace-nowrap px-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: 20,
          repeat: Infinity,
        }}
      >
        {/* Duplicate the array to create a seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => {
          const isPositive = item.change >= 0;
          return (
            <div key={`${item.symbol}-${index}`} className="flex items-center mx-6 text-[10px] font-bold tracking-widest uppercase">
              <span className="text-[#E0E0E0] mr-2">{item.symbol}</span>
              <span className={isPositive ? 'text-emerald-accent' : 'text-danger'}>{item.price}</span>
              <span
                className={`ml-1 ${isPositive ? 'text-emerald-accent' : 'text-danger'}`}
              >
                {isPositive ? '▲' : '▼'} {Math.abs(item.change)}%
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
