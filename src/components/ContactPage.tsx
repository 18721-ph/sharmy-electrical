import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, Download, Mail, Phone } from 'lucide-react';
import { company, services } from '../data/company';
import { useEnquirySelection } from './EnquirySelection';

export function ContactPage() {
  const location = useLocation();
  const chosen = new URLSearchParams(location.search).get('service') || '';
  const { selected, toggle } = useEnquirySelection();
  const [service, setService] = useState(() => services.some(s => s.slug === chosen) ? chosen : selected[0] || '');
  const [draft, setDraft] = useState('');
  const [error, setError] = useState('');
  const result = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (services.some(s => s.slug === chosen)) setService(chosen);
    setDraft('');
  }, [chosen]);
  useEffect(() => { if (draft) result.current?.focus(); }, [draft]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    for (const name of ['Name', 'Location', 'Message']) {
      const value = String(data.get(name) || '').trim();
      if (value.length < (name === 'Message' ? 10 : 2)) {
        setError(name === 'Message' ? 'Please describe your project in at least 10 characters.' : `Please enter your ${name.toLowerCase()} (at least 2 characters).`);
        (form.elements.namedItem(name) as HTMLElement)?.focus();
        return;
      }
    }
    if (String(data.get('Phone')).replace(/\D/g, '').length < 7) {
      setError('Please enter a phone number with at least 7 digits.');
      (form.elements.namedItem('Phone') as HTMLElement)?.focus();
      return;
    }
    const additional = services.filter(s => selected.includes(s.slug) && s.slug !== service).map(s => s.title);
    const body = ['Enquiry for Sharmy Electro System', '', ...Array.from(data.entries()).map(([key, value]) => `${key}: ${String(value).trim()}`), ...(additional.length ? [`Additional services: ${additional.join(', ')}`] : [])].join('\n');
    setError('');
    setDraft(body);
  }
  function download() {
    const url = URL.createObjectURL(new Blob([draft], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url; link.download = 'sharmy-project-enquiry.txt'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <>
    <section className="page-intro"><div className="container"><p className="eyebrow"><span/>PROJECT ENQUIRIES</p><h1>Let’s get the details right.</h1><p>A project, a repair, or a question. Tell us what you need and start a conversation with Sharmy.</p></div></section>
    <section className="section container contact-grid">
      <aside><p className="eyebrow"><span/>A DIRECT CONNECTION</p><h2>Talk to Sharmy.</h2><p>Discuss your requirements, project location, and service availability directly with the business.</p>
        <a className="contact-method" href={`tel:${company.phone}`}><Phone/><span><small>CALL US</small>{company.phoneDisplay}</span><ArrowUpRight size={18}/></a>
        <a className="contact-method" href={`mailto:${company.email}`}><Mail/><span><small>EMAIL US</small>{company.email}</span><ArrowUpRight size={18}/></a>
        <div className="contact-guidance"><h3>Useful to have ready</h3><p>Your location, a description of the issue, equipment details, and preferred timing.</p><p>Have photos or drawings? Attach them in your email app after opening the draft.</p></div>
      </aside>
      <div className="form-panel"><p className="eyebrow"><span/>YOUR PROJECT BRIEF</p><h2>Tell us about your project</h2><p>Prepare your enquiry, review the details, then send it from your email app.</p>
        <form onSubmit={submit} onChange={() => { setDraft(''); setError(''); }}>
          <div className="form-grid">
            <label>Your name <span>*</span><input name="Name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Full name"/></label>
            <label>Phone number <span>*</span><input type="tel" name="Phone" autoComplete="tel" required pattern="[+0-9 \(\)\-]{7,25}" title="Enter a phone number with 7 or more digits." placeholder="+254 …"/></label>
            <label className="span-2">Email address <span>*</span><input type="email" name="Email" autoComplete="email" required maxLength={150} placeholder="you@example.com"/></label>
            <label>Service required <span>*</span><select name="Service" value={service} onChange={e => setService(e.target.value)} required><option value="" disabled>Select a service</option>{services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}<option value="general">General enquiry</option></select></label>
            <label>Project location <span>*</span><input name="Location" autoComplete="address-level2" required minLength={2} maxLength={200} placeholder="Town or area"/></label>
            <fieldset className="additional-services span-2"><legend>Also discuss <span>(optional)</span></legend>{services.filter(s => s.slug !== service).map(s => <label key={s.slug}><input type="checkbox" checked={selected.includes(s.slug)} onChange={() => toggle(s.slug)}/>{s.title}</label>)}</fieldset>
            <label className="span-2">How can we help? <span>*</span><textarea name="Message" rows={5} required minLength={10} maxLength={3000} placeholder="Describe the work, equipment, and your preferred timing."/></label>
          </div>
          <p className="small-note">* Required fields. This form prepares an email; it does not send or store your contact details. Only selected service categories are saved in this browser tab.</p>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button" type="submit">Prepare your enquiry <ArrowUpRight size={17}/></button>
        </form>
        {draft && <div className="form-result" role="status" ref={result} tabIndex={-1}><h3>Your enquiry is ready.</h3><p>Nothing has been sent yet. Review the draft below, open your email app, and press send. If your email app does not open, download the copy and email it to {company.email}.</p><pre className="draft-preview">{draft}</pre><div><a className="button" href={`mailto:${company.email}?subject=${encodeURIComponent('Project enquiry — Sharmy Electro System')}&body=${encodeURIComponent(draft)}`}>Open email app <Mail size={17}/></a><button className="text-link" onClick={download}>Download copy <Download size={16}/></button></div></div>}
      </div>
    </section>
  </>;
}
