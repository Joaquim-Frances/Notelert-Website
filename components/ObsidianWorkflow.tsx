'use client';

import Icon from './Icon';

const steps = [
  {
    number: 1,
    title: 'Write your note in Obsidian',
    description: 'Create your notes as you normally would in your Obsidian vault.'
  },
  {
    number: 2,
    title: 'Add a trigger with Notelert plugin',
    description: 'Use the plugin to add a time or location trigger to a specific line.'
  },
  {
    number: 3,
    title: 'Forget about it!',
    description: 'Notelert will ping you via Push or Email when the time comes or you arrive.'
  },
  {
    number: 4,
    title: 'Tap to open in Obsidian',
    description: 'Tap the notification to open the original note directly in Obsidian.'
  }
];

export default function ObsidianWorkflow() {
  return (
    <section className="workflow" id="workflow">
      <div className="container">
        <h2>🧠 Perfect for Obsidian Users</h2>
        <p className="section-subtitle">
          If you use Obsidian, Notelert is the missing piece of your workflow. Seamlessly integrate 
          reminders into your Second Brain and never forget to check your notes when it matters most.
        </p>
        
        <div className="timeline">
          {steps.map((step, i) => (
            <div key={step.number} className="step">
              <div className="step-number">
                <span>{step.number}</span>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {i < steps.length - 1 && <div className="connector"></div>}
            </div>
          ))}
        </div>

        <div className="workflow-highlight">
          <Icon name="link" size={24} color="var(--text-accent)" />
          <div className="highlight-text">
            <p className="highlight-main">One click bridges your desktop workflow with your mobile life</p>
            <p className="highlight-sub">
              Write your note in Obsidian, add a trigger with the Notelert plugin, and forget about it. 
              Notelert will ping you via Push or Email when the time comes or you arrive at the spot. 
              Tap the notification to open the original note directly in Obsidian.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .workflow {
          padding: 8rem 0;
          background: #000000;
          position: relative;
          overflow: hidden;
        }

        .workflow::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-normal);
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          font-size: 1.2rem;
          margin-bottom: 4rem;
        }

        .timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
          margin-bottom: 3rem;
        }

        .step {
          position: relative;
          text-align: center;
        }

        .step-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #111111;
          border: 1px solid #222222;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step:hover .step-number {
          transform: translateY(-5px);
          background: #7c3aed;
          border-color: #8b5cf6;
          box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
        }

        .step-number span {
          font-size: 1.5rem;
          font-weight: 500;
          color: white;
        }

        .connector {
          position: absolute;
          top: 30px;
          left: calc(50% + 30px);
          width: calc(100% - 60px);
          height: 1px;
          background: #222222;
        }

        .step-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          color: var(--text-normal);
        }

        .step-content p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .workflow-highlight {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 1.5rem;
          padding: 3rem;
          background: #0a0a0a;
          border: 1px solid #111111;
          border-radius: 24px;
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .highlight-text {
          flex: 1;
        }

        .workflow-highlight :global(.icon) {
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .highlight-main {
          color: var(--text-normal);
          font-size: 1.25rem;
          margin: 0 0 0.75rem 0;
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .highlight-sub {
          color: var(--text-muted);
          font-size: 1rem;
          margin: 0;
          line-height: 1.8;
          font-weight: 300;
        }

        @media (max-width: 1024px) {
          .timeline {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem 2rem;
          }

          .connector {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .timeline {
            grid-template-columns: 1fr;
          }

          .workflow {
            padding: 4rem 0;
          }
        }
      `}</style>
    </section>
  );
}
