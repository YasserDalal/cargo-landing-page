export default function openGmail() {
  const subject = 'Inquiry'
  const body = 'Hello! I want to ask about...'

  const mailtoLink = `mailto:${import.meta.env.VITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  window.location.href = mailtoLink
}
