export default function openGmail() {
  const gmailLink = `https://mail.google.com/mail/u/0/#inbox?compose=${import.meta.env.VITE_EMAIL_ID}`;

  window.open(gmailLink, '_blank');
}
