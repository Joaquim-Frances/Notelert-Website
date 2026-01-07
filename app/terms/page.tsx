'use client';

import { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Service - Notelert';
  }, []);

  return (
    <main className="legal-page">
      <div className="container">
        <div className="back-link">
          <a href="/">← Back to Home</a>
        </div>
        <article className="legal-content">
          <h1>Notelert Terms and Conditions</h1>
          <p className="last-updated"><strong>Last Updated:</strong> December 2024</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, accessing, or using the Notelert mobile application ("the Application" or "the Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you must not use the Application.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you ("User", "you" or "your") and Notelert ("we", "our", "the Company").
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>Notelert is a mobile application that allows users to:</p>
            <ul>
              <li>Create and manage reminders and notifications</li>
              <li>Schedule time-based notifications</li>
              <li>Create location-based notifications (geofencing)</li>
              <li>Synchronize reminders with Google Calendar (Premium feature)</li>
              <li>Receive email notifications (Premium feature)</li>
              <li>Integrate with the Obsidian plugin to create reminders from Obsidian Mobile</li>
            </ul>
            <p>The Application is available for iOS and Android devices.</p>
          </section>

          <section>
            <h2>3. Eligibility</h2>
            <p>To use Notelert, you must:</p>
            <ul>
              <li>Be at least 13 years of age (or the minimum age required in your jurisdiction)</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using the Application under applicable laws</li>
              <li>Provide accurate and complete information when registering</li>
            </ul>
            <p>If you are a minor, you must have permission from your parent or legal guardian to use the Application.</p>
          </section>

          <section>
            <h2>4. User Account</h2>
            
            <h3>4.1. Registration</h3>
            <p>To use Notelert, you must create an account using Google Sign-In. You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
            </ul>

            <h3>4.2. Account Information</h3>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information when necessary</li>
              <li>Not provide false or misleading information</li>
              <li>Not create multiple accounts to evade limits or restrictions</li>
            </ul>

            <h3>4.3. Account Security</h3>
            <p>You are responsible for maintaining the security of your account. Do not share your credentials with third parties. Notelert will not be liable for any loss or damage resulting from your failure to maintain account security.</p>
          </section>

          <section>
            <h2>5. Plans and Subscriptions</h2>

            <h3>5.1. Free Plan</h3>
            <p>Notelert offers a free plan that includes:</p>
            <ul>
              <li>Unlimited push notifications</li>
              <li>Time-based notifications</li>
              <li>Up to 100 simultaneous active notifications</li>
              <li>Basic Obsidian integration</li>
            </ul>
            <p>The free plan <strong>does NOT include</strong>:</p>
            <ul>
              <li>Email notifications</li>
              <li>Location-based notifications</li>
              <li>Google Calendar synchronization</li>
            </ul>

            <h3>5.2. Premium Plan</h3>
            <p>Notelert Premium is a paid subscription that includes all free plan features, plus:</p>
            <ul>
              <li>Email notifications</li>
              <li>Location-based notifications (geofencing)</li>
              <li>Google Calendar synchronization</li>
              <li>Up to 100 simultaneous active notifications</li>
              <li>14-day free trial period (when available)</li>
            </ul>

            <h3>5.3. Trial Period</h3>
            <p>If available, you may receive a 14-day free trial period for Notelert Premium. At the end of the trial period, you will be automatically charged for the Premium subscription unless you cancel before the end of the trial period.</p>

            <h3>5.4. Pricing and Billing</h3>
            <ul>
              <li>Subscription prices are displayed in the application and may vary based on your location</li>
              <li>Payments are processed through Google Play Store (Android) or Apple App Store (iOS)</li>
              <li>Subscriptions automatically renew at the end of each billing period</li>
              <li>Prices may change with reasonable notice</li>
            </ul>

            <h3>5.5. Automatic Renewal</h3>
            <p>Premium subscriptions automatically renew unless:</p>
            <ul>
              <li>You cancel the subscription before the end of the current billing period</li>
              <li>Your payment method cannot be processed</li>
              <li>You cancel your account</li>
            </ul>
            <p>You can manage and cancel your subscriptions through Google Play Store or Apple App Store settings.</p>

            <h3>5.6. Refunds</h3>
            <p>Refunds are governed by Google Play Store and Apple App Store policies:</p>
            <ul>
              <li><strong>Google Play Store</strong>: You may request a refund within 48 hours after purchase</li>
              <li><strong>Apple App Store</strong>: Refunds are subject to Apple's policy</li>
            </ul>
            <p>Notelert does not process refunds directly. You must contact Google Play Store or Apple App Store for refund requests.</p>

            <h3>5.7. Plan Changes</h3>
            <p>We reserve the right to:</p>
            <ul>
              <li>Modify, suspend, or discontinue any plan at any time</li>
              <li>Change prices with reasonable notice</li>
              <li>Add or remove features from any plan</li>
            </ul>
            <p>If we make significant changes that negatively affect your experience, we will notify you in advance.</p>
          </section>

          <section>
            <h2>6. Acceptable Use</h2>

            <h3>6.1. Permitted Use</h3>
            <p>You may use Notelert only for lawful purposes and in accordance with these Terms. You agree to:</p>
            <ul>
              <li>Use the Application responsibly</li>
              <li>Respect the rights of other users</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not interfere with the Application's operation</li>
            </ul>

            <h3>6.2. Prohibited Use</h3>
            <p>You are strictly prohibited from:</p>
            <ul>
              <li><strong>Illegal use</strong>: Using the Application for any illegal or unauthorized purpose</li>
              <li><strong>Rights violation</strong>: Infringing intellectual property, privacy, or other rights of third parties</li>
              <li><strong>Offensive content</strong>: Creating notifications with illegal, defamatory, harassing, abusive, obscene, discriminatory, or otherwise offensive content</li>
              <li><strong>Spam or abuse</strong>: Sending spam, unsolicited, or bulk messages</li>
              <li><strong>Manipulation</strong>: Attempting to manipulate, hack, exploit, or compromise the Application's security</li>
              <li><strong>Reverse engineering</strong>: Reverse engineering, decompiling, or disassembling the Application</li>
              <li><strong>Bots or automation</strong>: Using bots, scripts, or automated methods to access or use the Application</li>
              <li><strong>Multiple accounts</strong>: Creating multiple accounts to evade limits, restrictions, or bans</li>
              <li><strong>Unauthorized commercialization</strong>: Reselling, redistributing, or commercializing the Application without authorization</li>
              <li><strong>Interference</strong>: Interfering with or disrupting the Application's operation or servers</li>
            </ul>

            <h3>6.3. User Content</h3>
            <p>You are solely responsible for content you create, post, or share through Notelert, including:</p>
            <ul>
              <li>Notification titles and messages</li>
              <li>Saved locations</li>
              <li>Any other content you provide</li>
            </ul>
            <p>You warrant that:</p>
            <ul>
              <li>You have all necessary rights to the content</li>
              <li>The content does not infringe third-party rights</li>
              <li>The content complies with these Terms and applicable laws</li>
            </ul>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>

            <h3>7.1. Notelert's Ownership</h3>
            <p>All rights, titles, and interests in and to the Application, including but not limited to:</p>
            <ul>
              <li>Source code and software</li>
              <li>Design, graphics, logos, and trademarks</li>
              <li>Documentation and marketing materials</li>
              <li>Features and functionalities</li>
            </ul>
            <p>Are the exclusive property of Notelert and are protected by copyright, trademark, and other intellectual property laws.</p>

            <h3>7.2. License to Use</h3>
            <p>Notelert grants you a limited, non-exclusive, non-transferable, and revocable license to:</p>
            <ul>
              <li>Download and install the Application on your personal devices</li>
              <li>Use the Application in accordance with these Terms</li>
            </ul>
            <p>This license does not include the right to:</p>
            <ul>
              <li>Copy, modify, or create derivative works of the Application</li>
              <li>Distribute, sublicense, rent, or lease the Application</li>
              <li>Reverse engineer or decompile the Application</li>
            </ul>

            <h3>7.3. User Content</h3>
            <p>You retain all rights to content you create through Notelert. By using the Application, you grant Notelert a worldwide, non-exclusive, royalty-free license to:</p>
            <ul>
              <li>Store, process, and display your content in the Application</li>
              <li>Provide the notification service</li>
              <li>Synchronize with third-party services (such as Google Calendar) when you authorize it</li>
            </ul>
            <p>This license terminates when you delete your content or account, except where retention is necessary to comply with legal obligations.</p>
          </section>

          <section>
            <h2>8. Third-Party Services</h2>

            <h3>8.1. Integration with Third-Party Services</h3>
            <p>Notelert may integrate with third-party services, including:</p>
            <ul>
              <li><strong>Google Sign-In</strong>: For authentication</li>
              <li><strong>Google Calendar</strong>: For event synchronization (Premium feature)</li>
              <li><strong>Google Maps</strong>: For geocoding and mapping services</li>
              <li><strong>Obsidian</strong>: For integration with the Obsidian plugin</li>
              <li><strong>Firebase</strong>: For backend services and storage</li>
            </ul>

            <h3>8.2. Third-Party Terms</h3>
            <p>By using third-party services through Notelert, you are also subject to those services' terms and conditions. Notelert is not responsible for:</p>
            <ul>
              <li>Privacy practices of third-party services</li>
              <li>Content or functionality of third-party services</li>
              <li>Any issues arising from the use of third-party services</li>
            </ul>

            <h3>8.3. Authorization</h3>
            <p>By connecting your Google Calendar or other third-party service accounts, you authorize Notelert to:</p>
            <ul>
              <li>Access your account according to the permissions you grant</li>
              <li>Perform actions on your behalf (such as creating events in Google Calendar)</li>
              <li>Store access tokens necessary for integration</li>
            </ul>
            <p>You can revoke this authorization at any time from the Application settings or from the third-party service settings.</p>
          </section>

          <section>
            <h2>9. Service Availability and Modifications</h2>

            <h3>9.1. Availability</h3>
            <p>We strive to keep the Application available, but we do not guarantee:</p>
            <ul>
              <li>Uninterrupted or error-free availability</li>
              <li>That the Application is free of viruses, malware, or other harmful components</li>
              <li>That errors will be corrected</li>
            </ul>

            <h3>9.2. Modifications</h3>
            <p>We reserve the right to:</p>
            <ul>
              <li>Modify, update, or discontinue any aspect of the Application at any time</li>
              <li>Add or remove features</li>
              <li>Change subscription prices or plans</li>
              <li>Perform scheduled or emergency maintenance</li>
            </ul>
            <p>We will notify you of significant changes when possible.</p>

            <h3>9.3. Interruptions</h3>
            <p>The Application may experience interruptions due to:</p>
            <ul>
              <li>Scheduled maintenance</li>
              <li>System updates</li>
              <li>Technical issues</li>
              <li>Acts of third parties beyond our control</li>
            </ul>
            <p>We will not be liable for any loss or inconvenience caused by service interruptions.</p>
          </section>

          <section>
            <h2>10. Limitation of Liability</h2>

            <h3>10.1. Disclaimer of Warranties</h3>
            <p>THE APPLICATION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
            <ul>
              <li>WARRANTIES OF MERCHANTABILITY</li>
              <li>FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>NON-INFRINGEMENT</li>
              <li>ACCURACY OR RELIABILITY</li>
            </ul>

            <h3>10.2. Limitation of Damages</h3>
            <p>IN NO EVENT SHALL NOTELERT, ITS AFFILIATES, PROVIDERS, OR LICENSORS BE LIABLE FOR:</p>
            <ul>
              <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
              <li>LOSS OF DATA, PROFITS, OPPORTUNITIES, OR REPUTATION</li>
              <li>DAMAGES RESULTING FROM USE OR INABILITY TO USE THE APPLICATION</li>
              <li>SERVICE INTERRUPTIONS OR TECHNICAL ERRORS</li>
            </ul>
            <p>NOTELERT'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU HAVE PAID FOR THE PREMIUM SUBSCRIPTION IN THE LAST 12 MONTHS, OR $10 USD, WHICHEVER IS GREATER.</p>

            <h3>10.3. Exceptions</h3>
            <p>Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for incidental or consequential damages. In such jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>

            <h3>10.4. Notifications and Reminders</h3>
            <p>Notelert does not guarantee that:</p>
            <ul>
              <li>Notifications will always be delivered on time or at all</li>
              <li>Location-based notifications will trigger with absolute accuracy</li>
              <li>Third-party services (such as Google Calendar) will function correctly</li>
            </ul>
            <p>You are responsible for verifying important information and should not rely solely on Notelert notifications for critical matters.</p>
          </section>

          <section>
            <h2>11. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Notelert, its affiliates, directors, employees, and agents from and against all claims, demands, losses, liabilities, damages, costs, and expenses (including attorney fees) arising from or related to:</p>
            <ul>
              <li>Your use of the Application</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of third-party rights</li>
              <li>Any content you provide through the Application</li>
            </ul>
          </section>

          <section>
            <h2>12. Termination</h2>

            <h3>12.1. Termination by User</h3>
            <p>You may terminate your account at any time by:</p>
            <ul>
              <li>Deleting the Application from your device</li>
              <li>Deleting your account from the Application settings</li>
              <li>Contacting us to request account deletion</li>
            </ul>

            <h3>12.2. Termination by Notelert</h3>
            <p>We reserve the right to suspend or terminate your access to the Application immediately, without prior notice, if:</p>
            <ul>
              <li>You violate these Terms</li>
              <li>You use the Application illegally or fraudulently</li>
              <li>You engage in activities that may harm the Application or other users</li>
              <li>You fail to pay subscription fees when due</li>
            </ul>

            <h3>12.3. Effects of Termination</h3>
            <p>Upon termination of your account:</p>
            <ul>
              <li>You will lose access to all Application features</li>
              <li>All your data will be deleted from our servers (as described in our Privacy Policy)</li>
              <li>Any active Premium subscription may continue until the end of the paid billing period</li>
            </ul>

            <h3>12.4. Survival</h3>
            <p>The following provisions shall survive termination:</p>
            <ul>
              <li>Intellectual property</li>
              <li>Limitation of liability</li>
              <li>Indemnification</li>
              <li>Dispute resolution</li>
            </ul>
          </section>

          <section>
            <h2>13. Dispute Resolution</h2>

            <h3>13.1. Governing Law</h3>
            <p>These Terms are governed by and construed in accordance with the laws of Spain, without regard to its conflict of law provisions.</p>

            <h3>13.2. Dispute Resolution</h3>
            <p>Any dispute arising from or related to these Terms or the Application shall be resolved through:</p>
            <ol>
              <li><strong>Negotiation</strong>: The parties will attempt to resolve the dispute through good faith negotiation</li>
              <li><strong>Mediation</strong>: If negotiation fails, the parties will participate in mediation</li>
              <li><strong>Arbitration</strong>: If mediation fails, the dispute shall be resolved through binding arbitration in accordance with the rules of [arbitration organization]</li>
            </ol>

            <h3>13.3. Exceptions</h3>
            <p>Dispute resolution through arbitration does not apply to:</p>
            <ul>
              <li>Disputes related to intellectual property</li>
              <li>Claims that may be brought in small claims court</li>
              <li>Any action to obtain injunctive or equitable relief</li>
            </ul>
          </section>

          <section>
            <h2>14. General Provisions</h2>

            <h3>14.1. Entire Agreement</h3>
            <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and Notelert regarding the use of the Application.</p>

            <h3>14.2. Modifications</h3>
            <p>We may modify these Terms at any time. We will notify you of significant changes by:</p>
            <ul>
              <li>Posting the updated Terms in the Application</li>
              <li>Sending a push notification (if enabled)</li>
              <li>Updating the "Last Updated" date</li>
            </ul>
            <p>Your continued use of the Application after changes constitutes your acceptance of the revised Terms.</p>

            <h3>14.3. Waiver</h3>
            <p>Our failure to exercise any right or provision of these Terms shall not constitute a waiver of that right or provision.</p>

            <h3>14.4. Severability</h3>
            <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>

            <h3>14.5. Assignment</h3>
            <p>You may not transfer or assign these Terms or your rights under these Terms without our prior written consent. We may assign these Terms without restriction.</p>

            <h3>14.6. Force Majeure</h3>
            <p>We shall not be liable for any failure or delay in performance due to causes beyond our reasonable control, including natural disasters, wars, terrorism, strikes, Internet failures, or third-party service failures.</p>
          </section>

          <section>
            <h2>15. Contact</h2>
            <p>If you have questions about these Terms and Conditions, you can contact us:</p>
            <p>
              <strong>Email</strong>: <a href="mailto:joaquim.frances@protonmail.com">joaquim.frances@protonmail.com</a>
            </p>
            <p>We will make our best effort to respond to your inquiry as soon as possible.</p>
          </section>

          <section>
            <h2>16. Additional Information</h2>

            <h3>16.1. Language</h3>
            <p>These Terms are available in English. If there is a discrepancy between the English version and any translation, the English version shall prevail.</p>

            <h3>16.2. Notifications</h3>
            <p>By using Notelert, you agree to receive electronic communications from us, including:</p>
            <ul>
              <li>Notifications about your account</li>
              <li>Updates about the service</li>
              <li>Information about changes to these Terms or the Privacy Policy</li>
            </ul>

            <h3>16.3. Legal Compliance</h3>
            <p>Notelert complies with:</p>
            <ul>
              <li>European Union General Data Protection Regulation (GDPR)</li>
              <li>California Consumer Privacy Act (CCPA)</li>
              <li>Other applicable data protection laws</li>
            </ul>
          </section>
        </article>
      </div>
      <style jsx>{`
        .legal-page {
          padding: 8rem 2rem 4rem;
          min-height: 100vh;
          background: var(--bg-primary);
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        .legal-content {
          background: var(--bg-secondary);
          border-radius: 16px;
          padding: 3rem;
          border: 1px solid var(--border-subtle);
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text-normal);
          background: linear-gradient(to right, var(--primary-color), var(--accent-color));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .last-updated {
          color: var(--text-muted);
          margin-bottom: 3rem;
          font-size: 0.95rem;
        }

        section {
          margin-bottom: 3rem;
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          margin-top: 2rem;
          color: var(--text-normal);
        }

        h3 {
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          margin-top: 1.5rem;
          color: var(--text-normal);
        }

        p {
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        ul, ol {
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1rem;
          padding-left: 2rem;
        }

        li {
          margin-bottom: 0.5rem;
        }

        a {
          color: var(--primary-color);
          text-decoration: none;
          transition: color 0.2s;
        }

        a:hover {
          color: var(--accent-color);
          text-decoration: underline;
        }

        strong {
          color: var(--text-normal);
        }

        .back-link {
          margin-bottom: 2rem;
        }

        .back-link a {
          color: var(--text-accent);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .back-link a:hover {
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .legal-page {
            padding: 6rem 1rem 2rem;
          }

          .legal-content {
            padding: 2rem 1.5rem;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </main>
  );
}
