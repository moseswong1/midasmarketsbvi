import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About Us | Midas Markets",
  description: "Learn about Midas Markets Limited - a licensed and regulated CFD broker.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Midas Markets
            </h1>
            <p className="text-xl text-muted-foreground">
              A licensed and regulated CFD broker committed to providing professional trading services to clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Midas Markets Limited is a financial services company specializing in Contracts for Difference (CFD) trading. We provide retail and professional clients with access to global financial markets including forex, indices, commodities, and shares.
                </p>
                <p>
                  Our mission is to deliver professional-grade trading infrastructure, competitive pricing, and reliable service to traders seeking exposure to international markets.
                </p>
                <p>
                  We are committed to maintaining the highest standards of regulatory compliance and client fund protection.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Company Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Legal Name</div>
                  <div className="text-foreground font-medium">Midas Markets Limited</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Company Number</div>
                  <div className="text-foreground font-medium">BVI Company Number 2117591</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Regulator</div>
                  <div className="text-foreground font-medium">BVI Financial Services Commission</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">License Number</div>
                  <div className="text-foreground font-medium">SIBA/L/24/1168</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulation */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Regulation & Compliance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Operating under strict regulatory oversight to ensure client protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Licensed Broker",
                description: "Midas Markets Limited holds a valid license from the BVI Financial Services Commission (License #SIBA/L/24/1168).",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Segregated Accounts",
                description: "Client funds are held in segregated accounts, separate from company operational funds.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: "Transparent Operations",
                description: "We maintain transparent business practices and provide clear disclosure of all trading conditions.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-background border-border">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Integrity",
                description: "We operate with honesty and transparency in all our business dealings."
              },
              {
                title: "Client Focus",
                description: "Our clients' interests are at the center of everything we do."
              },
              {
                title: "Excellence",
                description: "We strive to deliver the highest quality trading services."
              },
              {
                title: "Innovation",
                description: "We continuously improve our technology and services."
              }
            ].map((value, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Start Trading Today</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Open an account with a regulated broker and access global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Open Account
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
