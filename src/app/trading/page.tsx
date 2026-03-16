import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Trading | Midas Markets",
  description: "Professional trading conditions and account types with Midas Markets.",
};

export default function TradingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Professional Trading Conditions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Trade with competitive spreads, fast execution, and flexible leverage up to 1:500.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Open Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Account Types</h2>
            <p className="text-lg text-muted-foreground">Choose the account that matches your trading style</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Account */}
            <Card className="bg-card border-border relative overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Standard Account</h3>
                <p className="text-muted-foreground mb-6">Perfect for traders who prefer spread-only pricing</p>
                
                <div className="mb-8">
                  <div className="text-4xl font-bold text-primary mb-1">From 1.0 pips</div>
                  <div className="text-sm text-muted-foreground">No commission</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Minimum deposit: $100",
                    "Leverage up to 1:500",
                    "All instruments available",
                    "MT4 & MT5 platforms",
                    "No commission fees",
                    "Free deposits & withdrawals"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/register" className="block">
                  <Button className="w-full" variant="outline">
                    Open Standard Account
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Raw Spread Account */}
            <Card className="bg-card border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1">
                Popular
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Raw Spread Account</h3>
                <p className="text-muted-foreground mb-6">Ultra-tight spreads with low commission</p>
                
                <div className="mb-8">
                  <div className="text-4xl font-bold text-primary mb-1">From 0.0 pips</div>
                  <div className="text-sm text-muted-foreground">$7 per lot round turn</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Minimum deposit: $500",
                    "Leverage up to 1:500",
                    "All instruments available",
                    "MT4 & MT5 platforms",
                    "Raw institutional spreads",
                    "Priority support"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/register" className="block">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Open Raw Account
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trading Conditions */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trading Conditions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Execution Speed",
                value: "< 50ms",
                description: "Ultra-fast order execution"
              },
              {
                title: "Maximum Leverage",
                value: "1:500",
                description: "Flexible leverage options"
              },
              {
                title: "Minimum Trade Size",
                value: "0.01 lots",
                description: "Micro lot trading available"
              },
              {
                title: "Stop Out Level",
                value: "50%",
                description: "Margin call protection"
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-background rounded-xl border border-border">
                <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-foreground font-medium mb-1">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Deposits & Withdrawals</h2>
            <p className="text-lg text-muted-foreground">Multiple payment options for your convenience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                method: "Bank Transfer",
                deposit: "Free",
                withdrawal: "Free",
                time: "1-3 business days"
              },
              {
                method: "Credit/Debit Card",
                deposit: "Free",
                withdrawal: "Free",
                time: "Instant - 24 hours"
              },
              {
                method: "Crypto",
                deposit: "Free",
                withdrawal: "Network fee",
                time: "10-60 minutes"
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{item.method}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deposit Fee</span>
                      <span className="text-foreground">{item.deposit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Withdrawal Fee</span>
                      <span className="text-foreground">{item.withdrawal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing Time</span>
                      <span className="text-foreground">{item.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Start Trading Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Open your account in minutes and access global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Open Live Account
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
