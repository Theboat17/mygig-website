"use client";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export default function PrivacyPolicy() {
  return (
    <>
      <NavBar />
      <main className="bg-white pt-32 pb-20">
        <Container>
          <div className="max-w-[800px] mx-auto prose-custom">
            <h1 className="font-display font-bold text-[40px] md:text-[54px] leading-tight tracking-[-0.02em] text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="font-body text-primary/50 text-sm mb-12">
              MyGig Workforce Pty Ltd (ABN 20 692 462 856) &mdash; Last updated November 2024
            </p>

            <Section title="1. Definitions">
              <p>This policy distinguishes between standard personal information and &ldquo;sensitive information,&rdquo; which includes racial or ethnic origin, political opinions, religious beliefs, sexual orientation, health data, genetic information, biometric data, and criminal records.</p>
            </Section>

            <Section title="2. Data Collection">
              <p>MyGig gathers contact details, demographic information, employment history, financial information including bank accounts and tax file numbers, and usage analytics. Sources include direct registration, third-party referees, background check providers, and public sources.</p>
            </Section>

            <Section title="3. Information Usage">
              <p>Data supports service delivery, employment facilitation, payment processing, communications, legal compliance, and service improvement.</p>
            </Section>

            <Section title="4. Disclosure Practices">
              <p>Personal information may be shared with potential employers, service providers, regulatory bodies, and parties involved in business transactions. Overseas transfers require consent absent legal requirements.</p>
            </Section>

            <Section title="5. Security Measures">
              <p>The organisation implements physical, electronic, and managerial procedures to safeguard information from unauthorised access or misuse.</p>
            </Section>

            <Section title="6. Data Retention">
              <p>Information is maintained only as long as necessary, then securely destroyed or de-identified.</p>
            </Section>

            <Section title="7. Cookies &amp; Third-Party Services">
              <p>The policy covers cookie usage, third-party service disclaimers, marketing communication opt-outs, sensitive information handling, and minors&apos; privacy (requiring parental consent for those under 18).</p>
            </Section>

            <Section title="8. Image Consent">
              <p>Users grant MyGig rights to capture and use images for commercial and promotional purposes in accordance with their consent at the time of registration.</p>
            </Section>

            <Section title="9. Complaints &amp; Contact">
              <p>For privacy concerns, contact us at <a href="mailto:support@mygig.com.au" className="text-accent-vivid hover:underline">support@mygig.com.au</a>. Escalation is available to the Office of the Australian Information Commissioner.</p>
              <p className="mt-2"><strong>Address:</strong> 81-83 Campbell Street, Surry Hills NSW 2010</p>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display font-bold text-[24px] md:text-[28px] text-primary mb-4">{title}</h2>
      <div className="font-body text-lg leading-[30px] text-primary/70 space-y-4">{children}</div>
    </div>
  );
}
