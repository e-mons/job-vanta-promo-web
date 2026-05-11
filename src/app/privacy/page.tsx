import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navbar forceSolid={true} />
      <main className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white px-6 py-16 pt-38 pb-30">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-slate-300 text-lg">
              Effective Date: May 11, 2026
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-10 shadow-2xl">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-slate-300 leading-8">
                JobVanta is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use our AI-powered resume builder, cover letter generator, resume analyzer, and job search services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <ul className="list-disc pl-6 text-slate-300 leading-8 space-y-2">
                <li>Name, email address, and account information</li>
                <li>Uploaded resumes and cover letters</li>
                <li>Employment and educational information</li>
                <li>Device and analytics information</li>
                <li>Subscription and payment transaction information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Payment Processing</h2>
              <p className="text-slate-300 leading-8">
                Payments are securely processed by trusted third-party providers including Lemon Squeezy, Dodo Payments, Creem, and Paystack. JobVanta does not directly store full payment card information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. How We Use Information</h2>
              <ul className="list-disc pl-6 text-slate-300 leading-8 space-y-2">
                <li>Provide AI resume and cover letter services</li>
                <li>Improve platform performance and security</li>
                <li>Process subscriptions and payments</li>
                <li>Analyze resumes and optimize job matching</li>
                <li>Prevent fraud and unauthorized activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-slate-300 leading-8">
                We implement commercially reasonable safeguards including encryption, secure cloud infrastructure, authentication systems, and fraud monitoring to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. AI Disclaimer</h2>
              <p className="text-slate-300 leading-8">
                JobVanta uses artificial intelligence to generate resume suggestions, resume optimizations, and cover letters. Users are responsible for reviewing all generated content before use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p className="text-slate-300 leading-8">
                Email: support@jobvanta.ai
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}