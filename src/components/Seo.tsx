import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// A deployment origin must be explicitly configured; the old domain is not assumed.
export function CanonicalUrl() {
  const { pathname } = useLocation();
  useEffect(() => {
    const configured = import.meta.env.VITE_SITE_URL;
    if (!configured) return;
    let url: URL;
    try { url = new URL(pathname, configured); } catch { return; }
    if (!['https:', 'http:'].includes(url.protocol)) return;
    const canonical = document.createElement('link');
    canonical.rel = 'canonical'; canonical.href = url.href;
    const social = document.createElement('meta');
    social.setAttribute('property', 'og:url'); social.content = url.href;
    document.head.append(canonical, social);
    return () => { canonical.remove(); social.remove(); };
  }, [pathname]);
  return null;
}
