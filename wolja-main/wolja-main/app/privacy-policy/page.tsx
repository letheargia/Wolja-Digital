"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useI18n } from "../lib/i18n";

export default function PrivacyPolicyPage() {
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
              <div className="py-3 px-4 text-[#2d3748] bg-gray-50 rounded-lg font-medium flex items-center justify-between">
                Privacy Policy
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
              <Link
                href="/terms-of-use"
                className="block py-3 px-4 text-[#4a5568] hover:text-[#2d3748] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Term of Use
              </Link>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="font-poppins text-4xl font-bold text-[#2d3748] mb-2">
                Privacy Policy
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
                  "our") prioritises individual privacy and maintains rigorous
                  transparency in personal data processing. This Privacy Notice
                  outlines our approach to handling your personal information,
                  emphasising our commitment to processing data in accordance
                  with applicable data protection regulations.
                </p>
                <p className="mb-6">
                  This Privacy Notice encompasses the processing of personal
                  data during your interactions with us, specifically: (1)
                  accessing our digital platform at https://wolja.digital/ (the
                  "Website"), (2) engaging in communications with our
                  organisation, and (3) providing personal data in the context
                  of our professional consultancy services.
                </p>
                <p className="mb-6">
                  We recommend carefully reviewing this Privacy Notice alongside
                  our Terms of Service (the "Terms") prior to sharing any
                  personal information with our organisation.
                </p>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  1. Our Organisation
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    Wolja Digital comprises a network of companies and
                    independent entrepreneurs established in the Republic of
                    Poland and Republic of Georgia.
                  </p>
                  <div>
                    <p className="font-semibold mb-2">
                      Data Protection Oversight:
                    </p>
                    <p>
                      <strong>
                        For EU-based interactions or services provided by Polish
                        entities:
                      </strong>{" "}
                      Urząd Ochrony Danych Osobowych (Personal Data Protection
                      Office) serves as the supervisory authority.
                    </p>
                    <p className="mt-2">
                      <strong>
                        For services from Georgian entities or non-EU regions:
                      </strong>{" "}
                      Personal data Protection Service provides regulatory
                      oversight.
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Data Subject Rights:</strong> Individuals retain
                      the right to lodge a data protection complaint with:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Their designated supervisory authority</li>
                      <li>
                        The relevant data protection office overseeing our
                        operations
                      </li>
                    </ul>
                    <p className="mt-2">
                      A comprehensive list of local data protection authorities
                      is available for reference.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  2. How Do We Collect Personal Data?
                </h3>
                <div className="space-y-4 pl-4">
                  <div>
                    <p>
                      <strong>a. Direct Data Provision</strong>
                    </p>
                    <p className="mt-2">
                      You voluntarily share personal data to fulfil specific
                      processing purposes. Examples include:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Contacting us via email or messaging platforms;</li>
                      <li>Entering into contractual agreements.</li>
                    </ul>
                  </div>
                  <div>
                    <p>
                      <strong>b. Automated Data Collection</strong>
                    </p>
                    <p className="mt-2">
                      We utilise technical tools to automatically gather
                      personal data during Website usage. Automated collection
                      occurs with appropriate legal justification, serving
                      purposes such as:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Ensuring technical Website functionality;</li>
                      <li>Tracking and resolving technical issues.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  3. How Do We Process Personal Data?
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    We process your personal data only when it is necessary to
                    achieve the purpose of the personal data processing and only
                    to the extent necessary to achieve the purpose of the
                    processing. Furthermore, we keep your personal data for a
                    limited period of time and once the processing period has
                    expired, we delete all existing copies of your personal
                    data.
                  </p>
                  <p>
                    Below we have provided you with a full description of the
                    data processing purposes of the users of the Website and
                    clients of our services, what personal data we process,
                    legal basis of data processing and information about the
                    retention period.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="font-semibold mb-2">Communication with us</p>
                    <p className="mb-2">
                      Any information you provide to us, date and time of call
                      with our managers and consultants, information about your
                      company, legal issues or other details you might share
                      with us.
                    </p>
                    <p>
                      <strong>Legal Basis:</strong> legitimate interest.
                    </p>
                    <p>
                      <strong>Data retention period:</strong> 1 year upon after
                      the last communication.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">
                      Receiving consultancy services
                    </p>
                    <p className="mb-2">
                      Requests for services, description, and date of the
                      request, answers from your questionnaires, strictly
                      necessary for executing your request.
                    </p>
                    <p className="mb-2">
                      If necessary, we can request additional information to
                      qualify the request, such as information about the size of
                      the client company, business model, target
                      industry/market.
                    </p>
                    <p className="mb-2">
                      We may also request the client's representative name,
                      surname, identification number, position in the company,
                      name of the company, link to its website, description of
                      the request, and, if necessary, other information
                      depending on the substance of the request and requirements
                      under the applicable AML regulations.
                    </p>
                    <p>
                      <strong>Legal Basis:</strong> contractual relations.
                    </p>
                    <p>
                      <strong>Data retention period:</strong> 5 years upon cease
                      of providing consultancy services. The retention period is
                      based on tax and AML regulatory requirements.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">
                      Email and Social Networks Requests, Blog subscriptions,
                      and other forms on Website
                    </p>
                    <p className="mb-2">
                      E-mail address, subject, and content of the request.
                      Subscriptions, likes, comments, retweets, reposts, and any
                      other activity on the Company's pages on Social Networks.
                    </p>
                    <p>
                      <strong>Legal Basis:</strong> legitimate interests, in
                      certain cases - your consent.
                    </p>
                    <p>
                      <strong>Data retention period:</strong> 1 year upon the
                      end of communication and/or subscription.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Log Data and Analytics</p>
                    <p className="mb-2">
                      Information about your experience on the Website – your
                      device and browser information, login data, user ID,
                      IP-address, geolocation data, date, time, and duration of
                      use of the Website, links you visited, links, by which you
                      were addressed to the Website.
                    </p>
                    <p>
                      <strong>Legal Basis:</strong> legitimate interests, in
                      certain cases - your consent.
                    </p>
                    <p>
                      <strong>Data retention period:</strong> 1 year upon the
                      end of the use of the Website.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Cookies</p>
                    <p className="mb-2">
                      The Company uses cookies to appropriately run the Website
                      and for the analysis of the Website traffic. More
                      information about cookies is provided below in Section 6.
                    </p>
                    <p>
                      <strong>Legal Basis:</strong> legitimate interests, in
                      certain cases - your consent.
                    </p>
                    <p>
                      <strong>Data retention period:</strong> depends on the
                      type of cookie file, but does not exceed 1 year.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  4. Data Retention Period
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    We retain personal data only for necessary processing
                    purposes, with specific timeframes detailed in Section 3.
                  </p>
                  <div>
                    <p>
                      Under certain circumstances, we may be required to retain
                      your personal data for a longer period of time in
                      accordance with applicable law or regulatory requirements,
                      including:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Legal proceedings;</li>
                      <li>Investigations;</li>
                      <li>Government inquiries.</li>
                    </ul>
                  </div>
                  <p>
                    Retention periods strictly comply with legal obligations. We
                    ensure data security and confidentiality throughout the
                    retention period.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  5. Privacy and Data Sharing Policy
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    We prioritise data protection, sharing personal information
                    only when legally necessary or operationally essential. Our
                    approach balances rigorous privacy safeguarding with
                    practical service delivery requirements.
                  </p>

                  <div>
                    <p>
                      <strong>Legal Compliance Framework.</strong>
                    </p>
                    <p className="mt-2">
                      We disclose personal data when mandated by legal
                      proceedings, such as responding to court orders,
                      government requests, or protecting organisational rights.
                      This ensures transparency while maintaining individual
                      safety and regulatory adherence.
                    </p>
                  </div>

                  <div>
                    <p>
                      <strong>Service Delivery Approach.</strong>
                    </p>
                    <p className="mt-2">
                      When service requirements necessitate third-party
                      involvement, we engage trusted partners selectively. Prior
                      to any data transfer, we obtain explicit consent and
                      ensure comprehensive understanding of the collaborative
                      context.
                    </p>
                  </div>

                  <div>
                    <p>
                      <strong>Partner Evaluation Process.</strong>
                    </p>
                    <p className="mt-2">
                      Our partner selection emphasises stringent data protection
                      standards. We meticulously screen potential collaborators,
                      verifying their commitment to GDPR compliance and robust
                      data handling practices. Data Processing Agreements form a
                      critical component of our partnership framework.
                    </p>
                  </div>

                  <div>
                    <p>
                      <strong>Transparency Commitment.</strong>
                    </p>
                    <p className="mt-2">
                      We acknowledge potential limitations in absolute data
                      protection and encourage individuals to review our
                      partners' privacy policies. Our goal remains consistently
                      transparent communication about data handling practices.
                    </p>
                  </div>

                  <div>
                    <p>
                      <strong>Regulatory Alignment.</strong>
                    </p>
                    <p className="mt-2">
                      All data transfers comply with GDPR requirements, with
                      particular attention to consent mechanisms, processing
                      agreements, and individual rights preservation.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  6. Cookies and Website Functionality
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    Our Website utilises cookies to enhance user experience and
                    functionality. Cookies are small data files stored on your
                    device that enable website memory and personalisation.
                  </p>
                  <div>
                    <p>
                      <strong>Cookie Categories.</strong>
                    </p>
                    <p className="mt-2">
                      Necessary cookies ensure core website functionality and
                      security. Performance cookies enable analytics and
                      statistical improvements. Functional cookies support
                      navigation and feature access. Targeting cookies
                      facilitate personalised advertising based on browsing
                      behaviour.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  7. Data Subject Rights
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    We are committed to protecting your personal data and
                    ensuring your rights are respected. You have several key
                    rights regarding your personal information:
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                    <div>
                      <p>
                        <strong>Right of Access</strong> - request access to
                        your personal data by contacting our specified email. We
                        will provide a copy of processed data, potentially with
                        a reasonable administrative fee.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Right to Rectification</strong> - Update
                        inaccurate or incomplete personal data through
                        contacting us via email.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Right to Erasure</strong> - request deletion of
                        your personal data when no longer necessary, invoking
                        the "right to be forgotten".
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Right to Restrict Processing</strong> - limit
                        data processing under specific circumstances, such as
                        challenging data accuracy or objecting to processing.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Right to Data Portability</strong> - receive
                        your personal data in a structured, machine-readable
                        format for transmission to another controller.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Right to Object</strong> - challenge data
                        processing based on legitimate interests or marketing
                        purposes.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Right to Withdraw Consent</strong> - revoke
                        previously given consent for data processing.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Right to Lodge a Complaint</strong> - file a
                        complaint with the supervisory authority if you believe
                        data processing violates legislation.
                      </p>
                    </div>
                  </div>

                  <p>
                    Each right can be exercised by contacting us through the
                    designated communication channel.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  8. Child Data Protection Policy
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    We do not collect personal data from individuals under 16.
                    If we discover such data has been collected, we will
                    immediately delete it. Parents or guardians who believe we
                    may have inadvertently collected a child's personal
                    information should contact us using the provided email
                    address.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  9. Cross-Border Transfer
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    Wolja Digital recognizes the complexities of cross-border
                    data movement, particularly when transferring personal data
                    between our EU and Georgian entities. We are committed to
                    ensuring robust protection of personal data throughout such
                    transfers, adhering strictly to the General Data Protection
                    Regulation (GDPR) requirements.
                  </p>
                  <p>
                    When transferring personal data between our EU and Georgian
                    entities, we exclusively rely on European
                    Commission-approved Standard Contractual Clauses (SCCs),
                    which provide comprehensive legal safeguards for data
                    subjects. These clauses establish stringent obligations for
                    data protection, ensuring that personal information receives
                    equivalent levels of protection during and after
                    international transfer.
                  </p>
                  <p>
                    Our transfer mechanism includes multiple layers of security.
                    We implement end-to-end encryption during data transmission,
                    restrict access to transferred data through multi-factor
                    authentication, and maintain detailed logs of all
                    cross-border data movements. Prior to any transfer, we
                    conduct thorough transfer impact assessments to evaluate
                    potential risks and implement necessary mitigation
                    strategies.
                  </p>
                  <p>
                    Data subjects retain full rights under GDPR, including the
                    ability to request information about their data's location,
                    seek rectification, and lodge complaints about potential
                    mishandling. We provide transparent communication channels
                    for individuals to exercise these rights, regardless of
                    their data's geographical location.
                  </p>
                  <p>
                    Our internal processes mandate regular audits of
                    international data transfer practices, ensuring continuous
                    compliance with evolving regulatory standards. We document
                    each transfer's legal basis, whether it stems from explicit
                    consent, contractual necessity, or other lawful grounds
                    recognized under European data protection frameworks.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  10. Automated Decision-Making
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    We do not engage in any automated decision-making or
                    profiling using your personal data. All decisions that may
                    significantly affect you are made with human involvement. We
                    believe in preserving human judgement in matters that
                    concern our customers.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#2d3748] mb-4">
                  11. Changes To The Privacy Policy
                </h3>
                <div className="space-y-4 pl-4">
                  <p>
                    We may modify this Privacy Policy due to technological
                    changes, legal requirements, or other reasons. Continued
                    website usage indicates acceptance of updated terms.
                    Significant changes requiring personal data processing
                    consent will prompt explicit user approval.
                  </p>
                </div>
              </div>
            </div>

            {/* Agree Button */}
            <div className="flex justify-center">
              <button className="bg-[#9AE6B4] hover:bg-[#81D4A9] text-white font-semibold py-3 px-12 rounded-lg transition-colors">
                Agree
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
