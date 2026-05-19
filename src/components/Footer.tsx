import { motion } from 'motion/react';
import { Twitter, Github, Linkedin, Disc as Discord } from 'lucide-react';
import { Ticker } from './Ticker';

export function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-16 mt-20 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black font-sans uppercase tracking-tighter text-white mb-4">
              Mtm<span className="text-emerald-accent">.</span>
            </h3>
            <p className="text-gray-500 font-light text-sm mb-6 max-w-xs">
              Next-generation unified trading infrastructure for the modern digital asset ecosystem.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Github, Linkedin, Discord].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-accent hover:bg-emerald-accent/10 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-emerald-accent transition-colors">Exchange</a></li>
              <li><a href="#" className="hover:text-emerald-accent transition-colors">Pro Terminal</a></li>
              <li><a href="#" className="hover:text-emerald-accent transition-colors">Institutional</a></li>
              <li><a href="#" className="hover:text-emerald-accent transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-emerald-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-accent transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-emerald-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-emerald-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-accent transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-emerald-accent transition-colors">Regulatory Status</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Master the Markets. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Made with precision.</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Ticker */}
      <div className="relative mt-10">
        <Ticker isFixed={false} />
      </div>
    </footer>
  );
}
