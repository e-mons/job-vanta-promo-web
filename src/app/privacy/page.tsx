import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="min-h-screen bg-white">
      <Navbar forceSolid={true} />
      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Privacy Policy</h1>
            <p className="text-slate-500 text-base md:text-lg font-medium">Last updated: {currentDate}</p>
          </div>
          
          <div className="space-y-10 md:space-y-12 text-slate-600 leading-relaxed text-base md:text-lg">
            
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">1. Introduction</h2>
              <p className="mb-4">
                Welcome to JobVanta. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website 
                (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">2. The Data We Collect About You</h2>
              <p className="mb-4">
                Personal data, or personal information, means any information about an individual from which that person can be identified.
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li><strong className="text-slate-800">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong className="text-slate-800">Contact Data</strong> includes email address and telephone numbers.</li>
                <li><strong className="text-slate-800">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong className="text-slate-800">Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
                <li><strong className="text-slate-800">Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">3. How We Use Your Personal Data</h2>
              <p className="mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">6. Your Legal Rights</h2>
              <p className="mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="mb-2"><strong className="text-slate-800">Email:</strong> <a href="mailto:privacy@jobvanta.com" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">privacy@jobvanta.com</a></p>
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
