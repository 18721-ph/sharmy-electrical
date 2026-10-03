import { ArrowLeft, ArrowUpRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../data/company';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="error-page" aria-labelledby="error-title">
      <div className="container error-grid">
        <div className="error-copy">
          <p className="eyebrow"><span />404 / PAGE NOT FOUND</p>
          <h1 id="error-title">A little<br />off circuit.</h1>
          <p>The page you’re looking for may have moved, or the address might be incorrect. Let’s get you connected again.</p>
          <div className="error-actions">
            <Link className="button" to="/"><ArrowLeft size={17} />Back to home</Link>
            <Link className="error-contact-link" to="/contact">Contact Sharmy <ArrowUpRight size={17} /></Link>
          </div>
          <div className="error-help">
            <span>Looking for a service?</span>
            <Link to="/services">Explore what we do <ArrowUpRight size={15} /></Link>
          </div>
        </div>

        <div className="error-art" aria-hidden="true">
          <span className="error-art-heading">CONNECTION STATUS <span>— OPEN</span></span>
          <svg className="error-circuit" viewBox="0 0 560 420" fill="none">
            <defs>
              <pattern id="error-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" stroke="currentColor" strokeOpacity=".08" />
              </pattern>
            </defs>
            <rect width="560" height="420" fill="url(#error-grid)" />
            <g stroke="currentColor" strokeWidth="2">
              <path d="M0 88h80l30 30h80M560 88h-60l-40 40h-78M0 328h100l36-36h44M560 328h-98l-38-38h-42" opacity=".35" />
              <path d="M40 0v44h204v47M520 420v-45H314v-44" opacity=".22" />
              <path d="M130 150v80h72m-18-80v138M428 150v80h72m-18-80v138" strokeWidth="6" strokeLinecap="square" />
              <rect x="250" y="150" width="106" height="138" rx="34" strokeWidth="6" />
              <path d="M303 96v41m0 163v46" />
              <circle cx="303" cy="89" r="5" fill="currentColor" stroke="none" />
              <circle cx="303" cy="354" r="5" />
            </g>
            <path d="M270 216h26m13 0h27" stroke="#142326" strokeWidth="18" />
            <path d="M272 216h20m5-5 15-17m2 22h20" stroke="currentColor" strokeWidth="3" />
            <circle cx="296" cy="216" r="4" fill="#142326" stroke="currentColor" strokeWidth="2" />
            <circle cx="310" cy="216" r="4" fill="#142326" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="error-art-caption"><span className="error-status-dot" />A new connection is one click away.</div>
        </div>
      </div>
      <div className="container error-bottom">
        <span>The right help is still within reach.</span>
        <a href={`tel:${company.phone}`}><Phone size={15} />{company.phoneDisplay}<ArrowUpRight size={14} /></a>
      </div>
    </section>
  );
}
