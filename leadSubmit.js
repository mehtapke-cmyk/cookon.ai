import { trackLeadEvent } from '@/lib/analytics';

const CONTACT_EMAIL = 'contact@cookon.ai';

const createMailto = ({ formName, data }) => {
  const subject = encodeURIComponent(`Demande Cookon.ai - ${formName}`);
  const body = encodeURIComponent(
    Object.entries(data)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

export const submitLead = async ({ formName, data }) => {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formName, ...data }),
    });

    if (!response.ok) {
      throw new Error(`Lead endpoint failed with ${response.status}`);
    }
  } else {
    window.location.href = createMailto({ formName, data });
  }

  trackLeadEvent(formName);
};
