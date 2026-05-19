import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function BackgroundEffects() {
  const [bubbles, setBubbles] = useState<Array<{ id: number; left: string; top: string; xFrames: number[]; yFrames: number[]; delay: number; size: number; duration: number }>>([]);

  useEffect(() => {
    // Generate random bubbles that float and bounce around
    const newBubbles = Array.from({ length: 40 }).map((_, i) => {
      const xFrames = [0, (Math.random() - 0.5) * 600, (Math.random() - 0.5) * 600, (Math.random() - 0.5) * 600, 0];
      const yFrames = [0, (Math.random() - 0.5) * 600, (Math.random() - 0.5) * 600, (Math.random() - 0.5) * 600, 0];

      return {
        id: i,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        xFrames,
        yFrames,
        delay: -(Math.random() * 30),
        size: Math.random() * 30 + 10, // 10px to 40px
        duration: Math.random() * 40 + 30, // 30s to 70s
      };
    });
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 3D Floating Elements */}
      
      {/* Bitcoin */}
      <motion.div 
        animate={{ y: [-30, 30, -30], x: [-15, 15, -15], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] md:left-[15%] w-24 h-24 rounded-full bg-emerald-accent/5 border border-emerald-accent/20 backdrop-blur-sm flex items-center justify-center blur-[1px]"
      >
         <span className="text-emerald-accent/80 text-3xl font-bold font-mono">₿</span>
      </motion.div>

      {/* US Dollar */}
      <motion.div 
        animate={{ y: [40, -40, 40], x: [20, -20, 20], rotate: [0, -20, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] md:right-[20%] w-32 h-32 rounded-full bg-yellow-500/5 border border-yellow-500/20 backdrop-blur-sm flex items-center justify-center blur-[1px]"
      >
        <span className="text-yellow-500/80 text-4xl font-bold font-mono">$</span>
      </motion.div>

      {/* Euro */}
      <motion.div 
        animate={{ y: [45, -45, 45], x: [25, -25, 25], rotate: [0, 30, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] right-[5%] md:right-[15%] w-24 h-24 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-sm flex items-center justify-center blur-[1px]"
      >
        <span className="text-blue-500/80 text-4xl font-bold font-mono">€</span>
      </motion.div>

      {/* Pound */}
      <motion.div 
        animate={{ y: [35, -35, 35], x: [-35, 35, -35], rotate: [0, -25, 25, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[30%] left-[10%] md:left-[25%] w-28 h-28 rounded-full bg-purple-500/5 border border-purple-500/20 backdrop-blur-sm flex items-center justify-center blur-[1px]"
      >
        <span className="text-purple-500/80 text-4xl font-bold font-mono">£</span>
      </motion.div>

      {/* Yen */}
      <motion.div 
        animate={{ y: [-40, 40, -40], x: [-30, 30, -30], rotate: [0, 40, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[60%] left-[40%] w-24 h-24 rounded-full bg-pink-500/5 border border-pink-500/20 backdrop-blur-sm flex items-center justify-center blur-[1px]"
      >
        <span className="text-pink-500/80 text-4xl font-bold font-mono">¥</span>
      </motion.div>

      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          animate={{ 
            x: bubble.xFrames,
            y: bubble.yFrames,
            opacity: [0.2, 0.6, 0.2, 0.6, 0.2] 
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full border border-emerald-accent/30 bg-emerald-accent/10 backdrop-blur-[4px] shadow-[0_0_15px_rgba(0,255,159,0.3)]"
          style={{
            left: bubble.left,
            top: bubble.top,
            width: bubble.size,
            height: bubble.size,
          }}
        />
      ))}
    </div>
  );
}
