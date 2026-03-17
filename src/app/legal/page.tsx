import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Legal Documents | Midas Markets",
  description: "Legal and regulatory documents for Midas Markets Limited.",
};

export default function LegalPage() {
  const documents = [
    {
      title: "Account Opening Declarations",
      description: "Declarations and acknowledgements required when opening a trading account with Midas Markets.",
      updated: "1 March 2026"
    },
    {
      title: "Complaint Handling Process",
      description: "Our process for handling client complaints fairly and efficiently, including escalation procedures.",
      updated: "1 March 2026"
    },
    {
      title: "Cookies Policy",
      description: "Information about how we use cookies and similar tracking technologies on our website.",
      updated: "1 March 2026"
    },
    {
      title: "Order Execution Policy",
      description: "Our policy for executing client orders fairly and efficiently in the best interests of our clients.",
      updated: "1 March 2026"
    },
    {
      title: "Prevention of Money Laundering & Terror Financing Manual",
      description: "Our Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) policies and procedures.",
      updated: "1 March 2026"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, store, and protect your personal information in accordance with applicable law.",
      updated: "1 March 2026"
    },
    {
      title: "Risk Disclosure Policy",
      description: "Important information about the risks associated with CFD and leveraged trading that you should read before trading.",
      updated: "1 March 2026"
    },
    {
      title: "Social Trading Terms and Conditions",
      description: "Terms and conditions governing the use of our social trading features, including copy trading.",
      updated: "1 March 2026"
    },
    {
      title: "Terms and Conditions",
      description: "The full terms and conditions governing the relationship between Midas Markets Limited and its clients.",
      updated: "1 March 2026"
    },
    {
      title: "Website Terms of Use",
      description: "Terms governing your use of the Midas Markets website and its content.",
      updated: "1 March 2026"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Legal Documents
            </h1>
            <p className="text-xl text-muted-foreground">
              Important legal and regulatory documents. Please read these documents carefully before opening an account.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Info */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-xl p-6 border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">Regulatory Information</h2>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Midas Markets Limited</strong> (BVI Company Number 2117591) is licensed and regulated by the BVI Financial Services Commission and holds BVI FSC license #SIBA/L/24/1168.
              </p>
              <p className="text-muted-foreground">
                Our regulatory status can be verified on the BVI Financial Services Commission website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Legal Documents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{doc.description}</p>
                    <div className="text-xs text-muted-foreground">Last updated: {doc.updated}</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 ml-4">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Risk Warning</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.</strong> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
              </p>
              <p>
                The information on this site is not directed at residents of any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
              </p>
              <p>
                Past performance is not indicative of future results. Please read the full Risk Disclosure document before trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions?</h2>
          <p className="text-muted-foreground mb-8">
            If you have any questions about our legal documents, please contact our support team.
          </p>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Support
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
