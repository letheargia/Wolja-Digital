"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useI18n } from "../lib/i18n";

export default function TermsOfServicePage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0">
            <h2 className="font-poppins text-xl font-semibold text-[#2d3748] mb-6">
              Legal
            </h2>
            <nav className="space-y-2">
              <Link
                href="/privacy-policy"
                className="block py-3 px-4 text-[#4a5568] hover:text-[#2d3748] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Privacy Policy
              </Link>
              <div className="py-3 px-4 text-[#2d3748] bg-gray-50 rounded-lg font-medium flex items-center justify-between">
                Terms of Service
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="font-poppins text-4xl font-bold text-[#2d3748] mb-2">
                Terms of Use
              </h1>
              <div className="w-16 h-1 bg-[#9AE6B4] rounded-full mb-6"></div>
            </div>
            <div className="space-y-8 mb-8 text-[#4a5568] leading-relaxed">
              <div className="mb-4">
                <p className="font-medium mb-4">
                  Last update: January 10, 2025
                </p>
                <p className="mb-6">
                  Wolja Digital ("the Company", "Wolja Digital" "we", "us",
                  "our") is a consultancy service provider. Wolja Digital
                  comprises a network of companies and independent entrepreneurs
                  established in the Republic of Poland and Republic of Georgia.
                  Wolja Digital is neither law firm (kancelaria prawna), nor tax
                  advisory firm (doradca podatkowy) in the meaning of the
                  legislation of Republic of Poland.
                </p>
                <p className="mb-6">
                  These Terms of Service ("Terms") describe what terms and
                  conditions are applicable regarding your use of the Website
                  and during consultancy service provision.
                </p>
                <p className="mb-6">
                  Please read them carefully. The Terms comprises a legally
                  binding agreement between Wolja Digital and you. If you do not
                  agree with them, you cannot use the Website and our services.
                </p>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  1. General Terms
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    <strong>1.1.</strong> These Terms of Service constitute
                    regulations as referred to in Article 8 of the Act on
                    Providing Services by Electronic Means (Ustawa o świadczeniu
                    usług drogą elektroniczną).
                  </p>
                  <div>
                    <p>
                      <strong>1.2.</strong> These Terms and Conditions
                      specifically define:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>rules for use of the Website;</li>
                      <li>
                        terms and conditions for placement requests with us;
                      </li>
                      <li>providing consultancy services by Wolja Digital.</li>
                    </ul>
                  </div>
                  <div>
                    <p>
                      <strong>1.3.</strong> Use of the Website is possible
                      subject to meeting the following technical requirements
                      necessary for interaction with the IT system:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>
                        possession of a PC computer or other device enabling use
                        of the Service;
                      </li>
                      <li>Internet access;</li>
                      <li>
                        possession of appropriate software, including at least a
                        web browser supporting CSS, JavaScript scripts and
                        Cookies. Recommended browsers: Google Chrome, Opera,
                        Edge, Safari and Firefox.
                      </li>
                    </ul>
                  </div>
                  <p>
                    <strong>1.4.</strong> When accessing the Website via tablet,
                    phone or other mobile device, some Website functionalities
                    may not work properly or may not work at all, and the use of
                    certain electronic services provided within the Website may
                    be impossible or hindered.
                  </p>
                  <p>
                    <strong>1.5.</strong> Users of the Website are prohibited
                    from providing content of an unlawful nature, as well as
                    making any interference with the content contained in the
                    Website without our consent.
                  </p>
                  <p>
                    <strong>1.6.</strong> If You will have any questions
                    regarding these Terms that need to be clarified before
                    entering the service agreement, please, do not hesitate to
                    contact Us for further information. You can do it by writing
                    an email at: info@wolja.digital or by contacting us via
                    Social Network and messenger contact details provided on the
                    Website, or by mailing at our addresses.
                  </p>
                  <p>
                    <strong>1.7.</strong> You agree that you are at least 18
                    years old and have full civil capacity.
                  </p>
                  <p>
                    <strong>1.8.</strong> These Terms of Service are considered
                    accepted by you upon either provision of the details for
                    client's onboarding, and/or making the advance payment under
                    the invoice provided, and/or providing express consent by
                    email, messengers or any other fixed means.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  2. Service Order Processing
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    <strong>2.1. Order Placement.</strong> Clients may submit
                    service requests through electronic communication channels,
                    including email, messaging platforms, and other designated
                    contact methods. Service requests are accepted in English,
                    Russian, Belarusian, Ukrainian, Polish, or Georgian
                    languages.
                  </p>
                  <div>
                    <p>
                      <strong>2.2. Service Scope.</strong> Our consultancy
                      services include but are not limited to:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Verbal and written advisory services;</li>
                      <li>Document and contract preparation;</li>
                      <li>Third-party representation;</li>
                      <li>Court proceedings representation;</li>
                      <li>Government authority engagement;</li>
                      <li>Commercial arbitration representation.</li>
                    </ul>
                    <p className="mt-2">
                      We do not provide financial, investment or business
                      development consultancy services.
                    </p>
                  </div>
                  <p>
                    <strong>2.3. Order Processing.</strong> Wolja Digital
                    manager will contact you within 24 hours to discuss your
                    request details. We may require additional information to
                    fully understand your needs and objectives, potentially
                    including video conference calls for comprehensive
                    assessment.
                  </p>
                  <div>
                    <p>
                      <strong>2.4. Commercial Terms.</strong> Following request
                      evaluation, we provide a commercial proposal outlining.
                      Services may be charged through:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Fixed fee arrangements;</li>
                      <li>Hourly rate billing;</li>
                      <li>Monthly retainer payments;</li>
                      <li>Custom financial arrangements as agreed.</li>
                    </ul>
                    <p className="mt-2">
                      <strong>Additional Costs.</strong> Unless specifically
                      agreed otherwise, quoted fees cover professional services
                      exclusively, excluding Value Added Tax (VAT), Withholding
                      Tax (WHT) applicable to client jurisdiction, Government
                      fees and duties, Postal and courier charges, Notary
                      services, Document translation costs.
                    </p>
                    <p className="mt-2">
                      Services are provided on a prepayment basis unless
                      alternative arrangements are explicitly agreed upon.
                    </p>
                  </div>
                  <p>
                    <strong>2.5. Agreement Formation.</strong> Client's
                    acceptance of the commercial proposal constitutes agreement
                    formation. Such acceptance may be expressed through
                    electronic communication channels and serves as binding
                    confirmation for contract purposes.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  3. Service Delivery Terms
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    <strong>
                      3.1. Client Identification and Due Diligence.
                    </strong>{" "}
                    Following service acceptance, Wolja Digital may request
                    additional information about the paying entity for AML
                    compliance under Polish legislation. Such information
                    collection falls under Wolja Digital's legitimate interest
                    and contractual necessity, fully covered by our Privacy
                    Policy.
                  </p>
                  <p>
                    <strong>3.2. Payment Structure and Invoicing.</strong> Upon
                    receiving required information, Wolja Digital issues service
                    invoices according to agreed terms. For phased payments
                    without specified scheduling, payment is structured as equal
                    monthly instalments over the service period. For undefined
                    service periods, payment is divided into three equal
                    instalments, each representing one-third of the total
                    amount.
                  </p>
                  <p>
                    <strong>3.3. Payment Terms.</strong> Unless otherwise
                    agreed, payment is due within 10 banking days from invoice
                    receipt, processed in Euros via bank transfer to the
                    designated account. Wolja Digital reserves the right to
                    withhold service commencement until payment receipt.
                  </p>
                  <p>
                    <strong>3.4. Service Agreement Framework.</strong> Parties
                    may execute separate service agreements which, when present,
                    supersede these Terms of Service where contradictions exist.
                    In the absence of separate agreements, the relationship is
                    governed by these Terms of Service, commercial proposal and
                    invoice contents.
                  </p>
                  <p>
                    <strong>3.5. Service Delivery and Acceptance.</strong>{" "}
                    Service deliverables are provided through agreed channels,
                    defaulting to email delivery absent specific arrangements.
                    Clients maintain a 5-working-day period for raising
                    objections following delivery. We do not accept extended
                    objections delays. Any identified deficiencies are addressed
                    promptly through remedial actions.
                  </p>
                  <div>
                    <p>
                      <strong>
                        3.6. Performance Standards and Limitations.
                      </strong>{" "}
                      While Wolja Digital commits to best efforts in achieving
                      desired outcomes, liability limitations apply in
                      circumstances beyond quality control, including:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>
                        Legislative changes affecting outcome feasibility;
                      </li>
                      <li>
                        Client-provided information inaccuracies or
                        incompleteness;
                      </li>
                      <li>Extended client response delays;</li>
                      <li>Force majeure events;</li>
                      <li>Sanctions or restrictive measures implementation.</li>
                    </ul>
                    <p className="mt-2">
                      Upon notification of such circumstances, payment
                      obligations apply to services rendered and expenses
                      incurred up to notification.
                    </p>
                  </div>
                  <p>
                    <strong>3.7. Quality Assurance and Refunds.</strong> In
                    cases of service quality deficiencies not remedied within
                    reasonable timeframes, Wolja Digital provides refunds for
                    service fees. Additional expenses incurred during service
                    provision remain non-refundable.
                  </p>
                  <p>
                    <strong>3.8. Separate Agreements.</strong> When parties
                    execute distinct service agreements, such documents take
                    precedence over these Terms of Service in cases of
                    conflicting provisions. Absent such agreements, the
                    relationship operates under these Terms of Service,
                    integrating commercial proposals and invoice specifications.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  4. Use of Website Guidelines
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    <strong>4.1.</strong> Our website and social media platforms
                    serve as communication channels for sharing content, which
                    should not be interpreted as professional advice unless
                    explicitly specified. The company maintains clear boundaries
                    regarding content interpretation and usage.
                  </p>
                  <p>
                    <strong>4.2.</strong> All website elements, published
                    content, and social media accounts represent our
                    intellectual property, safeguarded by comprehensive legal
                    frameworks. Reproduction or utilisation of our materials
                    requires explicit written authorisation, with exceptions
                    defined by applicable intellectual property legislation.
                  </p>
                  <p>
                    <strong>4.3.</strong> Reproduction or misuse of site content
                    without explicit authorization constitutes a violation of
                    our terms. We safeguard our intellectual property through
                    comprehensive legal frameworks and active monitoring.
                  </p>
                  <p>
                    <strong>4.4. External Link Disclaimer.</strong> Websites may
                    contain hyperlinks to third-party platforms. We acknowledge
                    no responsibility for external content, privacy practices,
                    or operational functionality. Users are encouraged to
                    independently review public documentation of linked websites
                    to understand their specific terms and conditions.
                  </p>
                  <p>
                    <strong>4.5. Content Responsibility.</strong> While we
                    strive to provide accurate and valuable information, users
                    assume full responsibility for interpreting and applying
                    shared content. Our publications are intended for
                    informational purposes and should not be considered
                    definitive guidance in legal, financial, or professional
                    domains.
                  </p>
                  <p>
                    <strong>4.6. User Conduct and Site Usage.</strong> Our
                    platform maintains strict standards for user interactions,
                    emphasising integrity, legal compliance, and system
                    protection. Users are prohibited from actions that
                    compromise site security, intellectual property rights, or
                    technical infrastructure.
                  </p>
                  <p>
                    <strong>4.7. Prohibited Conduct.</strong> Engaging in
                    malicious activities such as introducing harmful software,
                    performing denial-of-service attacks, or attempting
                    unauthorized system access is strictly forbidden. Users must
                    refrain from fraudulent representations, including
                    impersonating other entities or creating deceptive content.
                  </p>
                  <p>
                    <strong>4.8. Customer Support Framework.</strong> Our
                    support team provides technical assistance within defined
                    operational parameters. Representatives respond to user
                    inquiries within 24 business hours, addressing site-related
                    challenges while maintaining clear boundaries of support
                    scope.
                  </p>
                  <p>
                    <strong>4.9. Supplementary Agreements.</strong> Certain
                    platform features may involve additional usage terms
                    negotiated between users and the company, ensuring tailored
                    interaction protocols for specific service dimensions.
                  </p>
                  <p>
                    <strong>4.10. Platform Usage Responsibilities.</strong>{" "}
                    Users assume full responsibility for site interactions,
                    ensuring compliance with terms and applicable laws. This
                    includes managing access through personal internet
                    connections and preventing violations by other users.
                  </p>
                  <div>
                    <p>
                      <strong>4.11. Liability Exclusions.</strong> The company
                      disclaims liability for various potential risks associated
                      with platform usage, including:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Content accuracy and completeness;</li>
                      <li>Linked website reliability;</li>
                      <li>Property damage;</li>
                      <li>Third-party conduct;</li>
                      <li>Unauthorized system access;</li>
                      <li>Service interruptions;</li>
                      <li>Malicious software transmission;</li>
                      <li>Platform-related financial losses.</li>
                    </ul>
                  </div>
                  <div>
                    <p>
                      <strong>4.12. Indemnification.</strong> Users agree to
                      defend and protect the company against claims arising
                      from:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Platform usage;</li>
                      <li>Content distribution;</li>
                      <li>Terms of service violations.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  5. Confidentiality Commitment
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    <strong>5.1. Core Principle.</strong> Wolja Digital
                    fundamentally values and protects client trust through
                    comprehensive confidentiality measures. Our commitment
                    extends to safeguarding all aspects of our professional
                    relationship, including the very existence of our
                    collaboration, client personal data, and all documentation
                    exchanged during our engagement.
                  </p>
                  <p>
                    <strong>5.2. Information Protection.</strong> The scope of
                    our confidentiality commitment encompasses all client
                    interactions, communications, documentation, and data
                    exchanges. This includes not only the materials directly
                    provided by clients but also information obtained from third
                    parties in the course of our service delivery. We maintain
                    strict protocols for handling sensitive information,
                    ensuring its protection throughout our engagement.
                  </p>
                  <p>
                    <strong>5.3.</strong> Reciprocal confidentiality forms the
                    cornerstone of our professional relationship. Clients commit
                    to maintaining strict confidentiality regarding all aspects
                    of their engagement with Wolja Digital. This obligation
                    encompasses our professional communications, methodologies,
                    and internal practices.
                  </p>
                  <div>
                    <p>
                      <strong>5.4.</strong> Specifically, the following
                      information is considered confidential:
                    </p>
                    <p className="mt-2">
                      All communications and consultations, including
                      preliminary discussions and draft documents, Financial
                      arrangements and payment structures, Company
                      organisational structure and operational methods,
                      Professional backgrounds and personal data of our staff,
                      Internal processes and consulting methodologies, Strategic
                      recommendations and solution frameworks, Pricing
                      structures and commercial terms, Technical infrastructure
                      and communication systems, Client management approaches
                      and service delivery methods, Training materials and
                      knowledge-sharing resources.
                    </p>
                  </div>
                  <p>
                    <strong>5.5.</strong> Clients acknowledge that breach of
                    these confidentiality provisions may result in significant
                    commercial and reputational damage to our consulting
                    practice.
                  </p>
                  <p>
                    <strong>5.6. Disclosure Framework.</strong> Confidential
                    information sharing operates within carefully defined
                    parameters. Such information may be accessed by Wolja
                    Digital employees and contractors solely for service
                    delivery purposes, with all parties bound by equivalent
                    confidentiality obligations. Information disclosure may
                    occur only when mandated by legal requirements, government
                    authority demands, or in the context of dispute resolution
                    between parties.
                  </p>
                  <p>
                    <strong>5.7. Marketing Communications.</strong> As part of
                    our service commitment, we share informational materials
                    about new publications, events, and industry developments.
                    Wolja Digital is also authorized to use anonymized
                    information about the project to strengthen its portfolio
                    materials and participate in rankings. We respect client
                    preferences regarding such communications, offering a
                    straightforward opt-out mechanism via email notification.
                    This ensures clients maintain control over their engagement
                    with our educational and marketing content.
                  </p>
                  <p>
                    <strong>5.8. Data Management.</strong> Our data retention
                    policy aligns with both operational necessities and
                    regulatory requirements. Client information is maintained
                    throughout the active service period and request processing
                    timeline. Following the conclusion of our engagement, we
                    retain relevant information for five years to comply with
                    AML legislation and maintain appropriate business records.
                    This retention period ensures both legal compliance and the
                    ability to provide continued support for recurring clients.
                    Client's confidentiality obligation extends beyond the
                    active engagement period and continues for 5 years, unless
                    explicitly released by Wolja Digital or required by law.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  6. Final Terms
                </h3>
                <div className="space-y-4 pl-4">
                  <div>
                    <p>
                      <strong>6.1. Force Majeure Provisions.</strong> Due to
                      extraordinary circumstances beyond reasonable control the
                      Party may temporarily suspend executing its contractual
                      obligations. Such events include but are not limited to:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Military conflicts;</li>
                      <li>Natural disasters;</li>
                      <li>Governmental regulatory changes;</li>
                      <li>Sanctions and other restrictive measures;</li>
                      <li>Epidemics and pandemics;</li>
                      <li>Infrastructure failures.</li>
                    </ul>
                    <p className="mt-2">
                      The Parties are not considered in violation of these Terms
                      during the Force Majeure event being effective and are not
                      liable for any delays upon submitting a Force Majeure
                      notification to the other Party. If the Force Majeure is
                      in force for more than 3-months period any Party may
                      inform the other Party on termination of the contractual
                      obligations. The Parties will conduct a reconciliation
                      procedure and determine the state of reciprocal payments.
                      Any services rendered and costs incurred prior to Force
                      Majeure event occurred should be reimbursed to Wolja
                      Digital.
                    </p>
                  </div>
                  <p>
                    <strong>6.2. Applicable law.</strong> These Terms are
                    governed by the laws of the Republic of Poland.
                  </p>
                  <p>
                    <strong>6.3. Dispute resolution.</strong> All disputes and
                    disagreements related to or connected to relations between
                    you and Wolja Digital shall be initially settled by written
                    and oral negotiations. You should use the following email
                    for dispute resolution purposes: info@wolja.digital
                  </p>
                  <p>
                    <strong>6.4.</strong> Only in case we are not able to settle
                    the dispute in 30 working days from the day we start
                    negotiations, it shall be finally resolved by either the
                    courts of the Republic of Poland, or by the way of
                    arbitration in the Vilnius Court of Commercial Arbitration
                    (VCCA) in accordance with its Rules of Arbitration by one
                    arbitrator at sole choice of the Claimant.
                  </p>
                  <p>
                    <strong>6.5.</strong> The Parties agree that arbitration
                    will be conducted in English language with the use of Arbis
                    system, procedural correspondence may be submitted by
                    electronic means by email, oral hearings are not mandatory
                    and may be conducted with video conference systems.
                  </p>
                  <p>
                    <strong>6.6.</strong> A Client who is a Consumer has an
                    additional option to pursue claims through out-of-court
                    settlement by filing a complaint via the EU ODR online
                    platform, available at:
                    <a
                      href="http://ec.europa.eu/consumers/odr/"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      http://ec.europa.eu/consumers/odr/
                    </a>
                    .
                  </p>
                  <p>
                    <strong>6.7. Termination and amendments.</strong> These
                    Terms shall remain in force until terminated by Wolja
                    Digital. We may terminate these Terms at any time at its
                    discretion without explaining the reasons for this decision.
                  </p>
                  <p>
                    <strong>6.8.</strong> Wolja Digital can change, delete and
                    addend these Terms at any time. All new or changed terms
                    shall become valid at the moment they are published. Wolja
                    Digital will notify you about substantial changes to the
                    Terms. This can be made by posting a notification on the
                    Website or sending an e-mail (if appropriate). If you do not
                    agree with the new Terms, you should stop using the Website.
                  </p>
                  <p>
                    <strong>6.9.</strong> These Terms of Service, Privacy
                    Notice, any other notices and disclaimers on the Website,
                    commercial proposals, invoices separate agreements
                    constitute the entire agreement between you and Wolja
                    Digital regarding your use of the Site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
