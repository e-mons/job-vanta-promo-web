import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Navbar forceSolid={true} />
      <main className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white px-6 py-16 pt-38 pb-30">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-slate-300 text-lg">
              Effective Date: May 11, 2026
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-10 shadow-2xl">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-300 leading-8">
                By accessing or using JobVanta, you agree to comply with these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
              <p className="text-slate-300 leading-8">
                JobVanta provides AI-powered resume building, cover letter generation, resume optimization, and job search services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-slate-300 leading-8 space-y-2">
                <li>Provide accurate information</li>
                <li>Protect account credentials</li>
                <li>Use the platform lawfully</li>
                <li>Review AI-generated content before use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Payments & Subscriptions</h2>
              <p className="text-slate-300 leading-8">
                Paid features may be processed through Lemon Squeezy, Dodo Payments, Creem, and Paystack.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. AI Disclaimer</h2>
              <p className="text-slate-300 leading-8">
                AI-generated resumes, suggestions, and cover letters are provided for assistance purposes only. JobVanta does not guarantee employment outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Account Suspension</h2>
              <p className="text-slate-300 leading-8">
                Accounts involved in fraud, abuse, chargeback abuse, or unlawful activity may be suspended or terminated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-slate-300 leading-8">
                JobVanta shall not be liable for employment outcomes, indirect damages, AI inaccuracies, or third-party service failures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-slate-300 leading-8">
                Email: legal@jobvanta.ai
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}