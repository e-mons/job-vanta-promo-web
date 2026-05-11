import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navbar forceSolid={true} />
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white px-6 py-16 pt-38 pb-30">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4">Refund Policy</h1>
            <p className="text-slate-300 text-lg">
              Effective Date: May 11, 2026
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-10 shadow-2xl">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Subscription Services</h2>
              <p className="text-slate-300 leading-8">
                JobVanta provides premium subscription features including AI resume optimization, cover letter generation, advanced resume analysis, and premium templates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Payment Providers</h2>
              <p className="text-slate-300 leading-8">
                Payments may be processed through Lemon Squeezy, Dodo Payments, Creem, and Paystack.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Refund Eligibility</h2>
              <ul className="list-disc pl-6 text-slate-300 leading-8 space-y-2">
                <li>Duplicate transactions</li>
                <li>Unauthorized charges</li>
                <li>Technical billing errors</li>
                <li>Service access issues caused by platform failure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Non-Refundable Situations</h2>
              <ul className="list-disc pl-6 text-slate-300 leading-8 space-y-2">
                <li>Failure to cancel before renewal</li>
                <li>Change of mind</li>
                <li>Lack of usage</li>
                <li>Employment outcomes</li>
                <li>AI-generated content dissatisfaction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Subscription Cancellation</h2>
              <p className="text-slate-300 leading-8">
                Users may cancel subscriptions at any time. Cancellation prevents future billing but does not automatically trigger refunds for prior billing periods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Contact Billing Support</h2>
              <p className="text-slate-300 leading-8">
                Email: billing@jobvanta.ai
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}