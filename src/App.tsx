/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Ticker } from './components/Ticker';
import { Hero } from './components/Hero';
import { LiveMarkets } from './components/LiveMarkets';
import { Features } from './components/Features';
import { AdvancedTools } from './components/AdvancedTools';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';

export default function App() {
  return (
    <div className="font-sans min-h-screen bg-[#0A0A0A] text-white selection:bg-emerald-accent/30 selection:text-emerald-accent relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <Ticker />
        <main>
          <Hero />
          <LiveMarkets />
          <Features />
          <AdvancedTools />
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
}
