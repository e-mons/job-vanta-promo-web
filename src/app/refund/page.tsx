import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RefundPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="min-h-screen bg-white">
      <Navbar forceSolid={true} />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Refund Policy</h1>
            <p className="text-slate-500 text-lg font-medium">Last updated: {currentDate}</p>
          </div>
          
          <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
            
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">1. General Overview</h2>
              <p className="mb-4">
                Thank you for choosing JobVanta. We strive to provide the highest quality service to assist you in your career journey. If, for any reason, You are not completely satisfied with a purchase, We invite You to review our policy on refunds and returns.
              </p>
              <p className="mb-4">
                The following terms are applicable for any products/services that You purchased with Us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">2. Conditions for Refund</h2>
              <p className="mb-4">
                We offer a money-back guarantee for all purchases made on our website under the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500 mb-4">
                <li>You have requested the refund within <strong className="text-slate-800">14 days</strong> of the original transaction.</li>
                <li>You have experienced significant technical issues that prevent you from using the core features of the platform, and our support team is unable to resolve them.</li>
                <li>Less than 20% of your purchased AI credits or active limits have been utilized.</li>
              </ul>
              <p>
                If the conditions are not satisfied, or if 14 days have passed since your purchase, we reserve the right to decline your refund request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">3. Non-refundable Purchases</h2>
              <p className="mb-4">
                Certain purchases and usages are strictly non-refundable, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li>Promotional, discounted, or sale items (unless specifically stated).</li>
                <li>One-time accelerated processing fees or priority application requests.</li>
                <li>Subscriptions that have been actively used beyond the trial or generous initial usage limits.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">4. Subscription Cancellations</h2>
              <p className="mb-4">
                You may cancel your recurring subscription at any time through your account dashboard. Cancellation will stop any future billing, and you will retain access to your plan's features until the end of your current billing cycle. Canceling a subscription does not automatically qualify you for a refund of the previous or current charge.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">5. Process for Requesting a Refund</h2>
              <p className="mb-4">
                To request a refund, please contact our support team with your account details, purchase receipt, and a clear explanation of why you are requesting a refund. You can reach out to us via email or our dedicated support portal.
              </p>
              <p className="mb-4">
                Refunds are processed to the original payment method used during the purchase. Please note that it may take 5-10 business days for the credit to appear on your statement, depending on your card issuer's policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">6. Changes to this Policy</h2>
              <p className="mb-4">
                We reserve the right to amend this Refund Policy at any time without prior notice. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our Returns and Refunds Policy, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="mb-2"><strong className="text-slate-800">Email:</strong> <a href="mailto:support@jobvanta.com" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">support@jobvanta.com</a></p>
                <p><strong className="text-slate-800">Address:</strong> 123 Tech Boulevard, San Francisco, CA 94105</p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
