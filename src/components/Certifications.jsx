import React from 'react';
import CertificateLightbox from './CertificateLightbox.jsx';
export default function Certifications(){return <section className="certifications" id="certification"><h2>CERTIFICATIONS</h2><div className="cert-grid">{Array.from({length:11},(_,i)=><img key={i} src={'./images/certificate-'+String(i+1).padStart(2,'0')+'.png'} alt={'Certificate '+(i+1)} loading="lazy"/>)}</div><CertificateLightbox /></section>}
