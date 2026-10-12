export function trackLead(action: 'call' | 'whatsapp' | 'email' | 'form_submit', source: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'generate_lead', {
      event_category: 'Lead',
      event_label: `${action} - ${source}`,
      value: 1,
    })
  }
}