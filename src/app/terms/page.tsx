import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="min-h-screen bg-white">
      <Navbar forceSolid={true} />
      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Terms of Service</h1>
            <p className="text-slate-500 text-base md:text-lg font-medium">Last updated: {currentDate}</p>
          </div>
          
          <div className="space-y-10 md:space-y-12 text-slate-600 leading-relaxed text-base md:text-lg">
            
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">1. Agreement to Terms</h2>
              <p className="mb-4">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and JobVanta ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
              </p>
              <p>
                You agree that by accessing the site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the site and you must discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">2. Intellectual Property Rights</h2>
              <p className="mb-4">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">3. User Representations</h2>
              <p className="mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">4. Subscriptions and Payments</h2>
              <p className="mb-4">
                We offer access to our premium AI-driven career services through subscription plans. By subscribing, you agree to pay all applicable fees and taxes. We reserve the right to change our subscription prices at any time; however, we will provide you with reasonable notice of any changes.
              </p>
              <p>
                Your subscription will automatically renew at the end of each billing cycle unless you cancel it before the renewal date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">5. Prohibited Activities</h2>
              <p className="mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">6. Term and Termination</h2>
              <p className="mb-4">
                These Terms of Service shall remain in full force and effect while you use the Site. Without limiting any other provision of these Terms of Service, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Site (including blocking certain IP addresses), to any person for any reason or for no reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">7. Contact Us</h2>
              <p className="mb-4">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="mb-2"><strong className="text-slate-800">Email:</strong> <a href="mailto:legal@jobvanta.com" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">legal@jobvanta.com</a></p>
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
