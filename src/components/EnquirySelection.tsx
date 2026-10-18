import { createContext, useContext, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, ArrowUpRight } from 'lucide-react';
import { services } from '../data/company';

const Selection = createContext<{ selected: string[]; toggle: (slug: string) => void }>({ selected: [], toggle: () => {} });

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string[]>(() => {
    try {
      const saved: unknown = JSON.parse(sessionStorage.getItem('sharmy-services') || '[]');
      return Array.isArray(saved) ? services.filter(s => saved.includes(s.slug)).map(s => s.slug) : [];
    } catch { return []; }
  });
  function toggle(slug: string) {
    setSelected(previous => {
      const next = previous.includes(slug) ? previous.filter(s => s !== slug) : [...previous, slug];
      try { sessionStorage.setItem('sharmy-services', JSON.stringify(next)); } catch { /* Selection still works in memory. */ }
      return next;
    });
  }
  return <Selection.Provider value={{ selected, toggle }}>{children}</Selection.Provider>;
}

export function useEnquirySelection() { return useContext(Selection); }

export function SelectService({ slug }: { slug: string }) {
  const { selected, toggle } = useEnquirySelection();
  const added = selected.includes(slug);
  return <button type="button" className="select-service" aria-label={`${added ? 'Added to enquiry' : 'Add to enquiry'}: ${services.find(s => s.slug === slug)?.title}`} aria-pressed={added} onClick={() => toggle(slug)}>{added ? <Check size={16}/> : <Plus size={16}/>} {added ? 'Added to enquiry' : 'Add to enquiry'}</button>;
}

export function EnquirySummary() {
  const { selected, toggle } = useEnquirySelection();
  if (!selected.length) return null;
  return <aside className="enquiry-summary" aria-label="Your service shortlist"><div><strong>Your enquiry · {selected.length} {selected.length === 1 ? 'service' : 'services'}</strong><p>Discuss several requirements in one conversation.</p><div className="selection-tags">{services.filter(s => selected.includes(s.slug)).map(s => <button key={s.slug} onClick={() => toggle(s.slug)} aria-label={`Remove ${s.title}`}>{s.title} ×</button>)}</div></div><Link className="button" to="/contact">Continue enquiry <ArrowUpRight size={16}/></Link></aside>;
}
