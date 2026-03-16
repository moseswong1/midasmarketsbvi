import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background via-card/50 to-card border-t border-border/50">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/midas-logo.svg"
                alt="Midas Markets Logo"
                className="w-12 h-12 rounded-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300"
              />
              <span className="text-xl font-bold text-foreground">Midas Markets</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-md leading-relaxed">
              Access global financial markets with competitive spreads, professional execution, and a wide range of trading instruments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/legal", label: "Legal Documents" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trading */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Trading</h3>
            <ul className="space-y-3">
              {[
                { href: "/markets", label: "Markets" },
                { href: "/platforms", label: "Platforms" },
                { href: "/trading", label: "Account Types" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="glass rounded-xl p-6 mb-8 gold-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Risk Warning:</strong> Trading CFDs carries a high level of risk and may not be suitable for all investors. You could lose more than your initial investment. Before trading, please ensure you fully understand the risks involved and seek independent advice if necessary. Please read our full Risk Disclosure and Client Agreement before opening an account.
              </p>
            </div>
          </div>
          
          {/* Legal Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
            <p>
              <strong className="text-foreground">Midas Markets Limited</strong> (BVI Company Number 2117591) is regulated by the BVI Financial Services Commission — License #SIBA/L/24/1168
            </p>
            <p className="text-muted-foreground/70">
              © {new Date().getFullYear()} Midas Markets Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
