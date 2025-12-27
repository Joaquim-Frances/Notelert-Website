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
          <h1>Notelert Terms of Service</h1>
          <p className="last-updated"><strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, accessing, or using the Notelert mobile application ("the Application" or "the Service") or the Obsidian plugin, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Application or plugin.
            </p>
          </section>

          <section>
            <h2>2. Service Description</h2>
            <p>
              Notelert is a mobile application that allows users to create time and location-based reminders, receive push notifications and emails, and integrate with Obsidian through a plugin to create reminders directly from their notes.
            </p>
            <p>
              The service includes:
            </p>
            <ul>
              <li>Mobile application for Android (com.quim79.notelert)</li>
              <li>Obsidian plugin for vault integration</li>
              <li>Backend service for notification processing</li>
              <li>Email service for scheduled reminders</li>
            </ul>
          </section>

          <section>
            <h2>3. Eligibility</h2>
            <p>To use Notelert, you must:</p>
            <ul>
              <li>Be at least 16 years of age (or the minimum age required in your jurisdiction)</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
            </ul>
          </section>

          <section>
            <h2>4. User Account</h2>
            <h3>4.1. Registration</h3>
            <ul>
              <li>You must register using Google Sign-In</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h3>4.2. Accurate Information</h3>
            <ul>
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for all activity that occurs under your account</li>
            </ul>
          </section>

          <section>
            <h2>5. Acceptable Use</h2>
            <h3>5.1. Permitted Use</h3>
            <p>You may use Notelert to:</p>
            <ul>
              <li>Create personal time and location-based reminders</li>
              <li>Receive push notifications and emails</li>
              <li>Integrate with Obsidian to manage reminders from your notes</li>
              <li>Manage your reminders and saved locations</li>
            </ul>

            <h3>5.2. Prohibited Use</h3>
            <p>You must not use Notelert to:</p>
            <ul>
              <li>Any illegal or unauthorized purpose</li>
              <li>Violate applicable laws or regulations</li>
              <li>Infringe intellectual property rights</li>
              <li>Send spam, malware, or malicious content</li>
              <li>Attempt unauthorized access to systems or data</li>
              <li>Interfere with the Service's operation</li>
              <li>Create reminders containing illegal, defamatory, harassing, abusive, or inappropriate content</li>
              <li>Use the service to send unsolicited notifications or spam</li>
              <li>Attempt to access other users' data</li>
            </ul>
          </section>

          <section>
            <h2>6. Subscriptions and Payments</h2>
            <h3>6.1. Plans</h3>
            <ul>
              <li><strong>Free Plan:</strong> Unlimited push notifications based on date and time. Does not include email notifications or location-based notifications.</li>
              <li><strong>Premium Plan:</strong> Unlimited notifications (push, email, and location), up to 100 active notifications simultaneously.</li>
            </ul>

            <h3>6.2. In-App Purchases</h3>
            <ul>
              <li>Purchases are made through Google Play Store</li>
              <li>Prices are displayed in your region's currency</li>
              <li>Payments are processed according to Google Play's terms</li>
              <li>Package name: com.quim79.notelert</li>
            </ul>

            <h3>6.3. Automatic Renewal</h3>
            <ul>
              <li>Premium subscriptions renew automatically</li>
              <li>You can cancel automatic renewal at any time from Google Play settings</li>
              <li>Cancellation does not refund the current paid period</li>
            </ul>

            <h3>6.4. Refunds</h3>
            <ul>
              <li>Refunds are governed by Google Play's refund policy</li>
              <li>We do not offer direct refunds, except as required by law</li>
            </ul>
          </section>

          <section>
            <h2>7. Service Limits</h2>
            <h3>7.1. Technical Limits</h3>
            <ul>
              <li><strong>Free Plan:</strong> Unlimited push notifications (date/time only). Does not include emails or location notifications.</li>
              <li><strong>Premium Plan:</strong> Maximum 100 active notifications simultaneously (push + email + location combined). Unlimited total notifications.</li>
              <li>Limits are applied to ensure service performance</li>
            </ul>

            <h3>7.2. Availability</h3>
            <ul>
              <li>We do not guarantee uninterrupted Service availability</li>
              <li>We may perform scheduled or emergency maintenance</li>
              <li>We are not responsible for service interruptions due to factors beyond our control</li>
              <li>We do not guarantee that notifications will be delivered at exact times due to operating system, network, or device configuration limitations</li>
            </ul>
          </section>

          <section>
            <h2>8. User Content</h2>
            <h3>8.1. Ownership</h3>
            <ul>
              <li>You retain all rights to the content you create (notification titles and messages)</li>
              <li>By using the Service, you grant us a limited license to store and process your content to provide the Service</li>
            </ul>

            <h3>8.2. Responsibility</h3>
            <ul>
              <li>You are responsible for the content you create</li>
              <li>You must not create content that violates third-party rights or applicable laws</li>
              <li><strong>Important about Obsidian:</strong> We do not store or access the content of your Obsidian notes. We only process the information you explicitly select to create reminders. We do not scan your complete vault.</li>
            </ul>

            <h3>8.3. Deletion</h3>
            <ul>
              <li>You can delete your notifications at any time</li>
              <li>We automatically delete notifications after they are sent</li>
              <li>We may delete content that violates these Terms without prior notice</li>
            </ul>
          </section>

          <section>
            <h2>9. Privacy</h2>
            <p>
              Your use of the Service is also subject to our <a href="https://notelert.com/privacy/">Privacy Policy</a>, which you can view on our website. By using the Service, you consent to the collection and use of your information as described in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2>10. Intellectual Property</h2>
            <h3>10.1. Our Rights</h3>
            <ul>
              <li>Notelert and all its content (code, design, logos, etc.) are our property or that of our licensors</li>
              <li>It is protected by copyright, trademark, and other intellectual property laws</li>
            </ul>

            <h3>10.2. Limited License</h3>
            <ul>
              <li>We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Application and plugin according to these Terms</li>
              <li>You may not copy, modify, distribute, sell, or rent any part of the Service</li>
            </ul>
          </section>

          <section>
            <h2>11. Third-Party Services</h2>
            <p>Notelert uses third-party services, including:</p>
            <ul>
              <li><strong>Google:</strong> For authentication (Google Sign-In) and data storage</li>
              <li><strong>Firebase:</strong> For backend, processing, and storage (Firestore, Cloud Functions)</li>
              <li><strong>Resend:</strong> For reminder email delivery</li>
              <li><strong>Google Play:</strong> For in-app purchases and application distribution</li>
            </ul>
            <p>Your use of these services is subject to their respective terms and privacy policies.</p>
          </section>

          <section>
            <h2>12. Service Modifications</h2>
            <ul>
              <li>We may modify, suspend, or discontinue any aspect of the Service at any time</li>
              <li>We are not responsible to you or third parties for any modification, suspension, or discontinuation of the Service</li>
              <li>We will attempt to notify of significant changes when possible</li>
            </ul>
          </section>

          <section>
            <h2>13. Termination</h2>
            <h3>13.1. By You</h3>
            <ul>
              <li>You may stop using the Service at any time</li>
              <li>You may delete your account and data from the application or by contacting us</li>
            </ul>

            <h3>13.2. By Us</h3>
            <p>We may suspend or terminate your access to the Service if:</p>
            <ul>
              <li>You violate these Terms</li>
              <li>You use the Service fraudulently or illegally</li>
              <li>You do not pay applicable fees (if applicable)</li>
              <li>For any other reason at our sole discretion</li>
            </ul>
          </section>

          <section>
            <h2>14. Limitation of Liability</h2>
            <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong></p>
            <ul>
              <li>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE"</li>
              <li>WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE</li>
              <li>WE ARE NOT RESPONSIBLE FOR:
                <ul>
                  <li>Loss of data or content</li>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits or business opportunities</li>
                  <li>Technical problems beyond our control</li>
                  <li>Failures in notification delivery due to device, network, or user configuration issues</li>
                  <li>Problems with Obsidian integration due to changes in the plugin or Obsidian</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2>15. Warranty Disclaimer</h2>
            <p>
              THE SERVICE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2>16. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Notelert, its affiliates, directors, employees, and agents from any claim, damage, obligation, loss, liability, cost, or debt, and expenses (including attorney fees) arising from:
            </p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you create or transmit through the Service</li>
            </ul>
          </section>

          <section>
            <h2>17. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of Spain, without regard to its conflict of law provisions. Any dispute related to these Terms or the Service will be resolved in the competent courts of Spain.
            </p>
          </section>

          <section>
            <h2>18. Dispute Resolution</h2>
            <h3>18.1. Negotiation</h3>
            <p>
              Before initiating any legal proceedings, the parties will attempt to resolve any dispute through good faith negotiation.
            </p>
          </section>

          <section>
            <h2>19. General Provisions</h2>
            <h3>19.1. Complete Terms</h3>
            <p>
              These Terms constitute the complete agreement between you and Notelert regarding the use of the Service.
            </p>

            <h3>19.2. Modifications</h3>
            <p>
              We may modify these Terms at any time. Modifications will take effect when published on this page. Your continued use of the Service after modifications constitutes your acceptance of the new Terms.
            </p>

            <h3>19.3. Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
            </p>

            <h3>19.4. Waiver</h3>
            <p>
              Our failure to exercise or enforce any right or provision of these Terms will not constitute a waiver of such right or provision.
            </p>

            <h3>19.5. Assignment</h3>
            <p>
              You may not assign or transfer these Terms or your rights under these Terms without our prior written consent.
            </p>
          </section>

          <section>
            <h2>20. Contact</h2>
            <p>If you have questions about these Terms of Service, you can contact us at:</p>
            <p>
              <strong>Email:</strong> <a href="mailto:contact@notelert.com">contact@notelert.com</a><br/>
              <strong>Subject:</strong> Terms of Service Inquiry
            </p>
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
