export default function navigateToWhatsapp() {
  const message = 'Hello! I want to inquire'

  const appLink = `whatsapp://send?phone=${import.meta.env.VITE_WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`

  window.location.href = appLink
}
