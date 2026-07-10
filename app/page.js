export default function Home() {
  return (
    <>
      {/* 1. Header */}
      <header className="header">
        <div className="container header-content">
          <a href="#" className="logo">
            Local Prospect Audit
          </a>
          <a href="#sample-request" className="btn btn-secondary">
            Request Free Sample
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Find Local Businesses Your Agency Can Actually Pitch
          </h1>
          <p className="hero-subtitle">
            Get verified local prospect packs showing specific SEO, tracking, and conversion gaps — with pitch angles and first-line hooks your team can use for outreach.
          </p>
          <div style={{ marginBottom: '35px' }}>
            <a href="#sample-request" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '12px 28px' }}>
              Request Free Sample
            </a>
          </div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="section section-grey">
        <div className="container">
          <h2 className="section-title">The Prospecting Bottleneck</h2>
          <p className="section-subtitle">Why standard lead lists fail to convert prospects into clients</p>
          <div className="problem-box">
            Most local prospecting workflows produce messy lists filled with dead domains, wrong locations, and generic hooks. You waste hours filtering out garbage, only to send generic pitches that get ignored. Complimenting a prospect doesn't close deals; showing them exactly what is broken does.
          </div>
        </div>
      </section>

      {/* 4. What You Get Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What You Get</h2>
          <p className="section-subtitle">High-fidelity data designed to help you start warm sales conversations</p>
          <div className="grid grid-2">
            <div className="card">
              <div className="card-title">Website Status Checks</div>
              <div className="card-text">
                We flag dead domains, SSL issues, redirects, and location mismatches before leads reach your list.
              </div>
            </div>
            <div className="card">
              <div className="card-title">Verifiable Technical Gaps</div>
              <div className="card-text">
                Instant identification of missing Google Analytics (GA/GTM) tags, Meta Pixel trackers, and organic SEO errors.
              </div>
            </div>
            <div className="card">
              <div className="card-title">Actionable Pitch Angles</div>
              <div className="card-text">
                We translate raw technical missing scripts into business problems that local business owners actually care about.
              </div>
            </div>
            <div className="card">
              <div className="card-title">Suggested First-Line Hooks</div>
              <div className="card-text">
                Ready-to-use, personalized first sentences tailored specifically to the gaps found on each business's homepage.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What We Check Section */}
      <section className="section section-grey">
        <div className="container">
          <h2 className="section-title">What We Check</h2>
          <p className="section-subtitle">We inspect homepages for common optimization and tracking gaps</p>
          <ul className="checklist">
            <li className="checklist-item"><span className="checklist-icon">✓</span> Weak or missing SEO title tags</li>
            <li className="checklist-item"><span className="checklist-icon">✓</span> Missing meta descriptions</li>
            <li className="checklist-item"><span className="checklist-icon">✓</span> Missing Google Analytics / GTM</li>
            <li className="checklist-item"><span className="checklist-icon">✓</span> Missing Meta Pixel</li>
            <li className="checklist-item"><span className="checklist-icon">✓</span> Weak appointment or contact CTAs</li>
            <li className="checklist-item"><span className="checklist-icon">✓</span> Missing phone visibility</li>
            <li className="checklist-item"><span className="checklist-icon">✓</span> Website/domain status issues</li>
            <li className="checklist-item"><span className="checklist-icon">✓</span> Location mismatch / low confidence</li>
          </ul>
        </div>
      </section>

      {/* 6. Sample Preview Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Inspect Our Data Quality</h2>
          <p className="section-subtitle">
            Preview a few rows from our Texas dental prospect pack. Each lead is checked for website status, audit confidence, visible SEO/tracking gaps, and a usable outreach hook.
          </p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Clinic</th>
                  <th>City</th>
                  <th>Priority</th>
                  <th>Main Problem</th>
                  <th>Suggested First Line</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Inwood Family Dental</strong></td>
                  <td>San Antonio</td>
                  <td><span className="badge badge-high">High</span></td>
                  <td>Missing GA/GTM and Meta Pixel</td>
                  <td>"I noticed your website is missing standard Google Analytics and Meta Pixel trackers, which means you may not be able to track website conversions clearly or retarget visitors."</td>
                </tr>
                <tr>
                  <td><strong>Katy Dental Experts</strong></td>
                  <td>Katy</td>
                  <td><span className="badge badge-medium">Medium</span></td>
                  <td>Missing GA/GTM and Meta Pixel</td>
                  <td>"I noticed your website is missing standard Google Analytics and Meta Pixel trackers, which means you may not be able to track website conversions clearly or launch social retargeting."</td>
                </tr>
                <tr>
                  <td><strong>ATX Family Dental</strong></td>
                  <td>Austin</td>
                  <td><span className="badge badge-medium">Medium</span></td>
                  <td>Weak title tag, missing meta description, no GA/GTM, no Meta Pixel</td>
                  <td>"I noticed your website has a generic title tag and is missing both Google Analytics and Meta Pixel tracking, which makes it harder to monitor and retarget prospective patients."</td>
                </tr>
                <tr>
                  <td><strong>Parkfield Dental Care</strong></td>
                  <td>Austin</td>
                  <td><span className="badge badge-medium">Medium</span></td>
                  <td>Weak title tag, no GA/GTM, no Meta Pixel</td>
                  <td>"I noticed your website is missing standard Google Analytics and Meta Pixel trackers, which means website visitors may not be available for Meta retargeting campaigns."</td>
                </tr>
                <tr>
                  <td><strong>Round Rock Family Dental</strong></td>
                  <td>Round Rock</td>
                  <td><span className="badge badge-low">Low</span></td>
                  <td>Missing Meta Pixel</td>
                  <td>"I noticed your website has a great structure but is missing a Meta Pixel, meaning you are unable to run retargeting ads to patients on Facebook or Instagram."</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="#sample-request" className="btn btn-primary">
              Request Free Sample
            </a>
          </div>
        </div>
      </section>

      {/* 7. How It Works Section */}
      <section className="section section-grey">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Get custom prospect sheets tailored to your target criteria in 3 steps</p>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="card-title">Define Niche & Location</div>
              <div className="card-text">Choose the local service vertical and geographical region your agency targets.</div>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="card-title">Audit Sweep & Verify</div>
              <div className="step-card-text" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                We check live domain loading status, filter out low-confidence listings, and scan homepages for tracking pixels.
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="card-title">Receive Leads</div>
              <div className="card-text">Receive a clean, verified prospect spreadsheet containing direct hooks and pitch directions.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Form Section */}
      <section className="section" id="sample-request">
        <div className="container">
          <div className="form-box">
            <h2 className="card-title" style={{ fontSize: '1.75rem', marginBottom: '10px' }}>Request Free Sample</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Submit your request to receive the full verified Texas dental lead pack.
            </p>
            
            {/* Tally Form Embed */}
            <div style={{ marginTop: '20px', minHeight: '680px' }}>
              <iframe
                src="https://tally.so/embed/gDrK1P?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="680"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Free Sample Lead Pack Request"
              ></iframe>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '20px' }}>
              Beta pricing coming soon. Early users can request custom monthly packs by niche and location.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="section section-grey">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Answers to common questions about our prospect packs</p>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-question">How are these leads verified?</div>
              <div className="faq-answer">
                We check whether each website loads, whether the domain appears active, whether the location matches the prospect, and whether the audit result has high or low confidence.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">What niches do you support?</div>
              <div className="faq-answer">
                We support local service niches such as dentists, chiropractors, plumbers, roofing contractors, and law practices.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">Can I customize my list?</div>
              <div className="faq-answer">
                Yes. During our beta phase, you can request custom sweeps targeting specific local cities and niches.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">Are these emails and phone numbers verified?</div>
              <div className="faq-answer">
                Our focus is providing high-fidelity audits of website, SEO, and tracking gaps to give you a compelling "hook." We do not scrape personal contact details, ensuring you can use our findings alongside your existing enrichment stack.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Local Prospect Audit. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
