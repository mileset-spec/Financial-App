import { motion } from 'motion/react';

const TESTIMONIALS = [
  {
    quote: "The execution speed is unparalleled. I've completely migrated my high-frequency trading algorithms here.",
    author: "Elena R.",
    role: "Quantitative Analyst"
  },
  {
    quote: "The cleanest, most intuitive interface I've used in 10 years of trading. The green neon hits exactly the right mood.",
    author: "Marcus T.",
    role: "Day Trader"
  },
  {
    quote: "Finally, a platform that doesn't compromise on security while offering cutting-edge AI insights. Simply brilliant.",
    author: "Sarah L.",
    role: "Fund Manager"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[60px] font-black leading-[0.85] tracking-tighter uppercase mb-6 text-white">
            Trusted by the <span className="text-emerald-accent">Best.</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-accent mx-auto mt-8 shadow-[0_0_10px_rgba(0,255,159,0.5)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between transition-all hover:bg-white/10 shadow-[0_4px_60px_-12px_rgba(0,255,159,0.0)] hover:shadow-[0_4px_60px_-12px_rgba(0,255,159,0.08)]"
            >
              <div className="mb-6 text-emerald-accent/40">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-xl text-gray-300 font-light mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-white font-medium">{t.author}</p>
                <p className="text-emerald-accent text-sm font-light">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
