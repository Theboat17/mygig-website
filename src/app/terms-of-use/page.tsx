"use client";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export default function TermsOfUse() {
  return (
    <>
      <NavBar />
      <main className="bg-white pt-32 pb-20">
        <Container>
          <div className="max-w-[800px] mx-auto prose-custom">
            <h1 className="font-display font-bold text-[40px] md:text-[54px] leading-tight tracking-[-0.02em] text-primary mb-4">
              Terms of Use
            </h1>
            <p className="font-body text-primary/50 text-sm mb-12">
              Labour Hire Services Agreement (Australia) &mdash; Effective November 21, 2024
            </p>
            <p className="font-body text-lg text-primary/70 mb-10">
              This agreement is between MyGig Workforce Pty Ltd trading as MyGig (ACN 692 462 856) and the Client.
            </p>

            <Section title="1. Definitions">
              <ul>
                <li><strong>Services:</strong> Worker provision by MyGig per New Request or Shift specifications.</li>
                <li><strong>New Request/Shift:</strong> Client submission detailing Worker requirements, position, location, duration, and qualifications.</li>
                <li><strong>Position:</strong> Assigned work duties including Award, Classification, and pay rates.</li>
                <li><strong>Location:</strong> Physical address where Worker performs duties.</li>
                <li><strong>Worker:</strong> Individual supplied by MyGig as casual employee under Client direction.</li>
              </ul>
            </Section>

            <Section title="2. Engagement of Services">
              <p>Clients may submit New Requests/Shifts through the platform with detailed position and location information. Workers are matched based on qualifications, availability, and preferences, then secure shifts via the platform.</p>
            </Section>

            <Section title="3. Provision of Workers">
              <p>MyGig ensures Workers meet specified qualifications. Workers are casual employees of Workforce Technologies Pty Ltd t/a MyGig (Employer of Record). MyGig manages payroll and compliance. Clients cannot engage Workers directly without written consent.</p>
              <p>All positions are governed by applicable industrial Awards. Default payment meets minimum Award rates unless &ldquo;Pay above Award rate&rdquo; is specified. Workers operate under Client direction and supervision. Clients provide a safe environment and training.</p>
            </Section>

            <Section title="4. Fees and Payment">
              <p>Clients pay a 15% Service Fee of Cost of Workforce, which includes Worker Gross Pay (base plus applicable loadings/penalties) and On-Costs (Superannuation, payroll tax, workers&apos; compensation, public liability insurance).</p>
              <p>MyGig automatically invoices via Direct Debit/PayTo, Credit Card, Debit Card, or Invoice. Late payments incur interest.</p>
            </Section>

            <Section title="5. Responsibilities of the Client">
              <ul>
                <li>Provide a safe working environment complying with workplace health and safety laws.</li>
                <li>Provide necessary induction and training for safe, effective work performance.</li>
                <li>Comply with applicable laws, regulations, and industrial awards.</li>
                <li>Ensure appropriate insurance coverage including public liability, professional indemnity, motor vehicle, and workers&apos; compensation insurance.</li>
              </ul>
            </Section>

            <Section title="6. Confidentiality">
              <p>Both parties maintain confidentiality of proprietary and sensitive information unless required by law or with written consent.</p>
            </Section>

            <Section title="7. Liability and Indemnity">
              <p>MyGig&apos;s liability is limited to fees paid for Services in question. The Client indemnifies MyGig against claims, damages, and expenses from Client breach or negligent Worker supervision.</p>
            </Section>

            <Section title="8. Termination">
              <p>Either party may terminate with 30 days&apos; written notice. MyGig may terminate immediately for material breach or Client insolvency.</p>
            </Section>

            <Section title="9. Governing Law">
              <p>This agreement is governed by New South Wales laws with exclusive jurisdiction in NSW courts.</p>
            </Section>

            <Section title="10. Entire Agreement &amp; Amendments">
              <p>This constitutes the complete agreement, superseding prior understandings. Written amendments require both parties&apos; signatures.</p>
            </Section>

            <Section title="11. Contact Information">
              <p><strong>Email:</strong> <a href="mailto:support@mygig.com.au" className="text-accent-vivid hover:underline">support@mygig.com.au</a></p>
              <p><strong>Address:</strong> 81-83 Campbell Street, Surry Hills NSW 2010</p>
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
      <div className="font-body text-lg leading-[30px] text-primary/70 space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">{children}</div>
    </div>
  );
}
