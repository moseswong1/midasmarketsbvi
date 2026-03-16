import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Markets | Midas Markets",
  description: "Trade Forex, Indices, Commodities, and Shares with Midas Markets.",
};

export default function MarketsPage() {
  const markets = [
    {
      title: "Forex",
      description: "Trade the world's largest financial market with access to major, minor, and exotic currency pairs. Benefit from tight spreads and leverage up to 1:500.",
      icon: "💱",
      instruments: "60+ Currency Pairs",
      features: ["Major pairs from 0.0 pips", "24/5 market access", "Deep liquidity"],
      examples: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD", "USD/CAD"]
    },
    {
      title: "Indices",
      description: "Access global stock indices including US, European, and Asian markets. Trade CFDs on the world's most popular indices.",
      icon: "📈",
      instruments: "15+ Global Indices",
      features: ["Low margin requirements", "No commission on trades", "Extended trading hours"],
      examples: ["US30", "US500", "US100", "UK100", "GER40"]
    },
    {
      title: "Commodities",
      description: "Trade precious metals, energies, and agricultural commodities. Diversify your portfolio with commodity CFDs.",
      icon: "🥇",
      instruments: "10+ Commodities",
      features: ["Gold & Silver CFDs", "Oil & Gas markets", "Agricultural products"],
      examples: ["XAU/USD", "XAG/USD", "USOIL", "UKOIL", "NGAS"]
    },
    {
      title: "Shares",
      description: "Trade CFDs on leading global company stocks. Access major US, UK, and European equities without owning the underlying asset.",
      icon: "🏢",
      instruments: "50+ Share CFDs",
      features: ["Trade long or short", "Fractional exposure", "No stamp duty"],
      examples: ["AAPL", "TSLA", "AMZN", "GOOGL", "MSFT"]
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Global Markets at Your Fingertips
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access over 100 tradable instruments across forex, indices, commodities, and shares with competitive spreads and professional execution.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Trading
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {markets.map((market, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-5xl mb-4">{market.icon}</div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{market.title}</h2>
                  <p className="text-muted-foreground mb-6">{market.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-primary font-semibold mb-3">{market.instruments}</div>
                    <ul className="space-y-2">
                      {market.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Card className={`bg-card border-border ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-4">Popular Instruments</div>
                    <div className="space-y-3">
                      {market.examples.map((example, eIdx) => (
                        <div key={eIdx} className="flex items-center justify-between p-3 bg-background rounded-lg">
                          <span className="font-medium text-foreground">{example}</span>
                          <span className="text-sm text-muted-foreground">CFD</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Conditions */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trading Conditions</h2>
            <p className="text-lg text-muted-foreground">Competitive pricing across all markets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Spreads From", value: "0.0 pips" },
              { label: "Leverage Up To", value: "1:500" },
              { label: "Execution", value: "< 50ms" },
              { label: "Min. Deposit", value: "$100" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-background rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Trade?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Open your account and start trading global markets today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Open Live Account
              </Button>
            </Link>
            <Link href="/platforms">
              <Button size="lg" variant="outline">
                View Platforms
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
