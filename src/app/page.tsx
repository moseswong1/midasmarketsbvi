"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative bg-[#0a0a0f] text-white overflow-hidden">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[120px] transition-all duration-1000 ease-out"
            style={{
              background: 'linear-gradient(135deg, #00d4aa 0%, #0891b2 100%)',
              left: `${mousePosition.x * 30}%`,
              top: `${mousePosition.y * 30}%`,
            }}
          />
          <div 
            className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] transition-all duration-1000 ease-out"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              right: `${(1 - mousePosition.x) * 20}%`,
              bottom: `${(1 - mousePosition.y) * 20}%`,
            }}
          />
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          {/* Oversized Typography */}
          <div className="mb-12">
            <div className="overflow-hidden">
              <p className="text-sm font-mono tracking-[0.3em] text-primary/70 uppercase mb-6 animate-[slideUp_0.8s_ease-out]">
                Forex • Indices • Commodities • Shares
              </p>
            </div>
            <div className="overflow-hidden">
              <h1 
                className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.85] tracking-tighter animate-[slideUp_0.8s_ease-out_0.1s_both]"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              >
                <span className="block text-white/90">TRADE</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">SMARTER</span>
              </h1>
            </div>
          </div>

          {/* Asymmetric content layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-5 lg:col-start-1">
              <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-md">
                Access 100+ instruments across forex, indices, commodities and shares. 
                Professional execution. Transparent pricing.
              </p>
              <div className="flex gap-4">
                <Link href="/register">
                  <Button className="bg-primary hover:bg-primary/90 text-black font-semibold h-14 px-8 rounded-full">
                    Get Started
                  </Button>
                </Link>
                <Link href="/platforms">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 h-14 px-8 rounded-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-4">
              {[
                { value: "0.0", label: "Spreads from", suffix: " pips" },
                { value: "50", label: "Execution", suffix: "ms" },
                { value: "1:500", label: "Max leverage", suffix: "" },
                { value: "24/5", label: "Support", suffix: "" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-500"
                  style={{ 
                    transform: `translateY(${scrollY * 0.02 * (idx + 1)}px)`,
                    animationDelay: `${idx * 0.1}s`
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}<span className="text-primary">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-white/40">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-sm font-mono tracking-[0.3em] text-primary/70 uppercase mb-4">Why Midas Markets</h2>
            <p className="text-4xl md:text-5xl font-bold text-white/90 max-w-2xl leading-tight">
              Everything you need to trade the global markets
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
            {/* Large feature card */}
            <div className="col-span-12 md:col-span-8 row-span-2 group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Professional Trading Platforms</h3>
                  <p className="text-white/50 max-w-md">
                    Trade on MetaTrader 4 & 5 with advanced charting, automated trading, and mobile access.
                  </p>
                </div>
                {/* Mini chart visualization */}
                <div className="mt-8 h-32 flex items-end gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t transition-all duration-300 group-hover:from-primary/80 group-hover:to-primary/40"
                      style={{ height: `${30 + Math.sin(i * 0.5) * 20 + Math.random() * 40}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Small cards */}
            <div className="col-span-6 md:col-span-4 group relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tight Spreads</h3>
              <p className="text-sm text-white/40">Competitive pricing from 0.0 pips on major pairs</p>
            </div>

            <div className="col-span-6 md:col-span-4 group relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Execution</h3>
              <p className="text-sm text-white/40">Sub-50ms order execution with minimal slippage</p>
            </div>

            {/* Wide card */}
            <div className="col-span-12 md:col-span-8 group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.05] transition-all overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">100+ Tradable Instruments</h3>
                  <p className="text-white/50 mb-3">Trade Forex, Indices, Commodities, Shares, Cryptocurrencies, ETFs, and more from global markets.</p>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {[
                      "EUR/USD", "GBP/JPY", "USD/JPY", "AUD/USD", "NZD/USD", "USD/CAD", "USD/CHF", "Gold", "Silver", "Oil", "Copper", "US500", "NAS100", "DAX30", "FTSE100", "HK50", "BTC/USD", "ETH/USD", "SOL/USD", "XRP/USD", "AAPL", "TSLA", "AMZN", "GOOGL", "MSFT", "S&P 500 ETF", "VIX", "EuroStoxx50", "Nikkei225", "CAC40"
                    ].map((item) => (
                      <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Markets Marquee */}
      <section className="py-16 border-y border-white/5">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex">
                {[
                  { name: "EUR/USD", change: "+0.15%" },
                  { name: "Gold", change: "+0.82%" },
                  { name: "US500", change: "-0.23%" },
                  { name: "BTC/USD", change: "+2.41%" },
                  { name: "GBP/JPY", change: "+0.08%" },
                  { name: "Oil", change: "-1.12%" },
                ].map((item, idx) => (
                  <div key={`${setIdx}-${idx}`} className="flex items-center gap-8 px-12">
                    <span className="text-2xl font-bold text-white/80">{item.name}</span>
                    <span className={`text-lg ${item.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                      {item.change}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-mono tracking-[0.3em] text-primary/70 uppercase mb-6">Get Started</h2>
          <p className="text-4xl md:text-6xl font-bold text-white/90 mb-8 leading-tight">
            Ready to trade<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">the global markets?</span>
          </p>
          <p className="text-lg text-white/50 mb-12 max-w-xl mx-auto">
            Open your account in minutes and start trading with a regulated broker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button className="bg-white text-black hover:bg-white/90 font-semibold h-14 px-10 rounded-full text-base">
                Open Account
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 h-14 px-10 rounded-full text-base">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}
