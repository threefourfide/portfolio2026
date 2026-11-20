import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './certificate-lightbox.css';

export default function CertificateLightbox() {
  const [preview, setPreview] = useState(null);
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    const section = document.getElementById('certification');
    if (!section) return;
    const selector = '.cert-grid img';
    const enhance = () => section.querySelectorAll(selector).forEach(img => {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', `Enlarge ${img.alt || 'certificate'}`);
    });
    enhance();
    const observer = new MutationObserver(enhance);
    observer.observe(section, { childList: true, subtree: true });
    const open = e => {
      const img = e.target.closest?.(selector);
      if (!img || !section.contains(img)) return;
      if (e.type === 'keydown' && !['Enter', ' '].includes(e.key)) return;
      e.preventDefault();
      setClosing(false);
      setPreview({ src: img.currentSrc || img.src, alt: img.alt || 'Certificate', trigger: img });
    };
    section.addEventListener('click', open);
    section.addEventListener('keydown', open);
    return () => { observer.disconnect(); section.removeEventListener('click', open); section.removeEventListener('keydown', open); };
  }, []);
  useEffect(() => {
    if (!preview) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const dialog = document.getElementById('certificate-preview');
    dialog?.focus();
    const key = e => { if (e.key === 'Escape') setClosing(true); if (e.key === 'Tab') { e.preventDefault(); dialog?.focus(); } };
    document.addEventListener('keydown', key);
    return () => { document.body.style.overflow = old; document.removeEventListener('keydown', key); preview.trigger?.focus(); };
  }, [preview]);
  useEffect(() => {
    if (!closing) return;
    const timer = setTimeout(() => { setPreview(null); setClosing(false); }, 220);
    return () => clearTimeout(timer);
  }, [closing]);
  return preview ? createPortal(
    <div id="certificate-preview" role="dialog" aria-modal="true" aria-label={preview.alt} tabIndex={-1}
      className={`certificate-lightbox${closing ? ' is-closing' : ''}`} onClick={() => setClosing(true)}>
      <img src={preview.src} alt={preview.alt} />
      <span className="certificate-preview-hint">Click anywhere to close · Esc</span>
    </div>, document.body) : null;
}
