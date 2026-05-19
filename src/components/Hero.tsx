import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] bg-emerald-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <span className="text-emerald-accent text-[10px] font-black tracking-[0.4em] uppercase mb-6 block fade-in">Empowering Global Capital</span>
          <h1 className="text-6xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-8 uppercase">
            Master the<br/><span className="text-emerald-accent">Markets.</span>
          </h1>
          
          <p className="text-[#8E9299] text-lg leading-relaxed font-light mt-4 mb-10 max-w-md mx-auto">
            Real-time intelligence. Lightning execution. Unrivaled insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-emerald-accent text-black font-black uppercase text-sm tracking-widest rounded-full shadow-[0_0_40px_rgba(0,255,159,0.25)] transition-all flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Start Trading</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/20 text-white font-black uppercase text-sm tracking-widest rounded-full hover:bg-white/5 transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Watch Demo</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
