/*
  Web3Forms — https://web3forms.com

  The access key is public by design: it names the destination inbox, it is not
  a credential, and Vite inlines it into the built bundle where anyone can read
  it. If it is ever abused, rotate it in the Web3Forms dashboard.

  Submissions are delivered to: 404solutions.business@gmail.com
*/
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const WEB3FORMS_ACCESS_KEY = "dfde4581-22ea-4fba-bc07-099cc1a9c4fa";

/* Shown as the email subject line in the inbox that receives the enquiry. */
export const buildSubject = ({ name, service }) =>
  `New enquiry${service ? ` — ${service}` : ""}${name ? ` from ${name}` : ""}`;