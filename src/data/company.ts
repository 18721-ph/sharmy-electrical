export const company = {
  name: 'Sharmy Electro System',
  descriptor: 'Electrical · Plumbing · Refrigeration',
  verified: true,
  phone: '+254712796333',
  phoneDisplay: '+254 712 796 333',
  whatsapp: null as string | null,
  email: 'Sharmyelectro@gmail.com',
  location: null as string | null,
  hours: null as string | null,
  website: null as string | null,
  about: null as string | null,
  sourceLinks: ['https://www.facebook.com/share/1eSZhotXMc/', 'https://www.facebook.com/share/p/18M4vSvQf2/'],
};
// Categories verified in the supplied screenshot. Descriptions are newly written.
// Detailed technical scope, credentials, coverage, and history still require confirmation.
export const services = [
  { slug: 'electrical', title: 'Electrical services', label: '01', description: 'Electrical work for the spaces you depend on. Tell us what you need, and let’s discuss the right next step.', detail: 'Start with a conversation about your electrical requirements. Share the site details and the work you have in mind so Sharmy Electro System can confirm the scope.', scope: ['Describe the electrical work required', 'Share your project location and any drawings', 'Discuss scope, timing, and a quotation'] },
  { slug: 'plumbing', title: 'Plumbing repairs', label: '02', description: 'Practical help with plumbing repairs. Get in touch to discuss the issue and arrange the next steps.', detail: 'Explain what has happened, where the problem is, and any useful details or photographs. The team can discuss your plumbing repair requirements before providing a quotation.', scope: ['Describe the plumbing problem', 'Share photographs and access details', 'Confirm repair requirements with the team'] },
  { slug: 'refrigeration', title: 'Refrigeration', label: '03', description: 'A direct point of contact for your refrigeration requirements. Talk through your equipment and what it needs.', detail: 'Include the equipment type, its location, and the issue or project you want to discuss. Specific equipment compatibility and scope are confirmed on enquiry.', scope: ['Identify your equipment and model', 'Explain the issue or requirement', 'Discuss suitability, availability, and costs'] },
];
// No project photographs or completed projects have been supplied. These are explicitly labeled layout previews.
export const projects = [
  { id: '01', title: 'Spaces, thoughtfully connected.', subtitle: 'Architectural concept · project photographs to follow', variant: 'building' },
  { id: '02', title: 'Precision in the details.', subtitle: 'Technical illustration · not completed work', variant: 'circuit' },
  { id: '03', title: 'Every connection considered.', subtitle: 'Concept drawing · not completed work', variant: 'plan' },
];
// Enquiry preparation guidance; not a claim about a documented operating process.
export const process = [
  ['Tell us what you need', 'Describe the work you have in mind and where your project is located.'],
  ['Discuss the details', 'Share drawings, photographs, or any questions you would like to work through.'],
  ['Request a quotation', 'Ask for a clear scope, proposed timing, and a quotation for your project.'],
  ['Agree on the next steps', 'Confirm the details with the company before any work begins.'],
];
