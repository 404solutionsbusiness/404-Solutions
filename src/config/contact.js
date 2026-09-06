/*
  Web3Forms — https://web3forms.com

  The access key comes from VITE_WEB3FORMS_KEY (see .env.example). It is a
  PUBLIC, client-side key by design: it names the destination inbox, it is not
  a credential, and Vite inlines it into the built bundle where anyone can read
  it. Keeping it in .env is about configurability — pointing a staging build at
  a different inbox — not secrecy. If it is ever abused, rotate it in the
  Web3Forms dashboard.

  Submissions are delivered to: 404solutions.business@gmail.com
*/
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "";

/*
  Guard against a build where .env was never created — without this the form
  would POST an empty key and fail with an opaque server error.
*/
export const isFormConfigured = Boolean(WEB3FORMS_ACCESS_KEY);

/* Shown as the email subject line in the inbox that receives the enquiry. */
export const buildSubject = ({ name, service }) =>
  `New enquiry${service ? ` — ${service}` : ""}${name ? ` from ${name}` : ""}`;
