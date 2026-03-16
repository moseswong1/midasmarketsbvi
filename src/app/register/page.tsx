import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Open Account | Midas Markets",
  description: "Open a trading account with Midas Markets Limited.",
};

export default function RegisterPage() {
  return (
    <>
      <section className="py-16 min-h-screen flex items-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Open an Account</h1>
            <p className="text-muted-foreground">Start trading with a regulated broker</p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="text-xl font-semibold text-foreground mb-4">Account Inquiries</h2>
            <p className="text-muted-foreground mb-6">
              For account inquiries, please email us at{" "}
              <a href="mailto:info@midasmarketsltd.com" className="text-primary hover:underline font-medium">
                info@midasmarketsltd.com
              </a>
            </p>
            
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Already have an account?
              </p>
              <Link href="/login">
                <Button variant="outline">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Risk Warning */}
          <div className="mt-8 p-4 bg-card rounded-lg border border-border">
            <p className="text-xs text-muted-foreground text-center">
              <strong className="text-foreground">Risk Warning:</strong> CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
