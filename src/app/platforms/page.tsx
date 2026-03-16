import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Trading Platforms | Midas Markets",
  description: "Trade on MetaTrader 4 and MetaTrader 5 with Midas Markets.",
};

export default function PlatformsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Industry-Leading Trading Platforms
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Trade on MetaTrader 4 and MetaTrader 5 - the world&apos;s most popular trading platforms. Available on desktop, web, and mobile.
            </p>
          </div>
        </div>
      </section>

      {/* MT4 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Most Popular
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">MetaTrader 4</h2>
              <p className="text-muted-foreground mb-6">
                The industry standard for forex trading. MT4 offers powerful charting, automated trading capabilities, and a user-friendly interface trusted by millions of traders worldwide.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "30+ built-in technical indicators",
                  "9 timeframes for analysis",
                  "One-click trading",
                  "Expert Advisors (EA) support",
                  "Mobile trading on iOS & Android",
                  "Secure 128-bit encryption"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-3">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Download MT4
                </Button>
                <Button variant="outline">
                  Web Terminal
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="bg-background rounded-lg p-6 shadow-xl">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-primary mb-2">MT4</div>
                  <div className="text-sm text-muted-foreground">MetaTrader 4</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-card rounded-lg">
                    <div className="text-lg font-semibold text-foreground">Windows</div>
                    <div className="text-xs text-muted-foreground">Desktop</div>
                  </div>
                  <div className="p-3 bg-card rounded-lg">
                    <div className="text-lg font-semibold text-foreground">macOS</div>
                    <div className="text-xs text-muted-foreground">Desktop</div>
                  </div>
                  <div className="p-3 bg-card rounded-lg">
                    <div className="text-lg font-semibold text-foreground">iOS</div>
                    <div className="text-xs text-muted-foreground">Mobile</div>
                  </div>
                  <div className="p-3 bg-card rounded-lg">
                    <div className="text-lg font-semibold text-foreground">Android</div>
                    <div className="text-xs text-muted-foreground">Mobile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MT5 */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Advanced
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">MetaTrader 5</h2>
              <p className="text-muted-foreground mb-6">
                The next generation of trading platforms. MT5 offers enhanced features including more timeframes, additional order types, and an integrated economic calendar for multi-asset trading.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "38+ built-in technical indicators",
                  "21 timeframes for analysis",
                  "6 pending order types",
                  "Depth of Market (DOM)",
                  "Built-in economic calendar",
                  "Multi-asset trading support"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-3">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Download MT5
                </Button>
                <Button variant="outline">
                  Web Terminal
                </Button>
              </div>
            </div>
            
            <div className="lg:order-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="bg-background rounded-lg p-6 shadow-xl">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-primary mb-2">MT5</div>
                  <div className="text-sm text-muted-foreground">MetaTrader 5</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-card rounded-lg">
                    <div className="text-lg font-semibold text-foreground">Windows</div>
                    <div className="text-xs text-muted-foreground">Desktop</div>
                  </div>
                  <div className="p-3 bg-card rounded-lg">
                    <div className="text-lg font-semibold text-foreground">macOS</div>
                    <div className="text-xs text-muted-foreground">Desktop</div>
                  </div>
                  <div className="p-3 bg-card rounded-lg">
                    <div className="text-lg font-semibold text-foreground">iOS</div>
                    <div className="text-xs text-muted-foreground">Mobile</div>
                  </div>
                  <div className="p-3 bg-card rounded-lg">
                    <div className="text-lg font-semibold text-foreground">Android</div>
                    <div className="text-xs text-muted-foreground">Mobile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Platform Comparison</h2>
            <p className="text-muted-foreground">Choose the platform that suits your trading style</p>
          </div>
          
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-foreground font-semibold">Feature</th>
                    <th className="text-center p-4 text-foreground font-semibold">MT4</th>
                    <th className="text-center p-4 text-foreground font-semibold">MT5</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Technical Indicators", mt4: "30+", mt5: "38+" },
                    { feature: "Timeframes", mt4: "9", mt5: "21" },
                    { feature: "Pending Order Types", mt4: "4", mt5: "6" },
                    { feature: "Economic Calendar", mt4: "—", mt5: "✓" },
                    { feature: "Depth of Market", mt4: "—", mt5: "✓" },
                    { feature: "Expert Advisors", mt4: "✓", mt5: "✓" },
                    { feature: "Mobile Trading", mt4: "✓", mt5: "✓" },
                    { feature: "Web Terminal", mt4: "✓", mt5: "✓" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border last:border-0">
                      <td className="p-4 text-foreground">{row.feature}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.mt4}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.mt5}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Start Trading Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Open an account and download your preferred trading platform.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Open Account
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
