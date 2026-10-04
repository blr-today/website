// Any [data-feedback] element opens the Netlify feedback form, posted with fetch
const TITLES = { 'tag-filter': 'Feedback on the filter', event: 'Feedback on the event popup' }

const dialog = document.querySelector('dialog.blr-feedback')
const form = dialog?.querySelector('form')
const status = dialog?.querySelector('.blr-feedback__status')

function vote(value) {
  form.elements.vote.value = value
  for (let b of dialog.querySelectorAll('.blr-feedback__vote button')) b.setAttribute('aria-pressed', String(b.value === value))
}

function open(trigger) {
  let from = trigger.dataset.feedback
  dialog.querySelector('h2').textContent = TITLES[from] || 'Feedback on blr.today'
  form.elements.from.value = from
  form.elements.about.value = trigger.dataset.feedbackAbout || ''
  form.elements.page.value = location.href
  status.textContent = ''
  dialog.showModal()
}

async function send(e) {
  e.preventDefault()
  if (!form.elements.vote.value && !form.elements.message.value.trim()) {
    status.textContent = 'Pick a thumb or write a few words.'
    return
  }
  let button = form.querySelector('[type=submit]')
  button.disabled = true
  status.textContent = 'Sending…'
  try {
    let res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
    if (!res.ok) throw new Error(res.status)
    form.reset()
    vote('')
    status.textContent = 'Thanks! Your feedback was sent.'
    setTimeout(() => dialog.close(), 1500)
  } catch {
    status.textContent = 'Could not send that. Please try again in a bit.'
  } finally {
    button.disabled = false
  }
}

if (dialog) {
  document.addEventListener('click', e => {
    let trigger = e.target.closest?.('[data-feedback]')
    if (!trigger) return
    e.preventDefault()
    open(trigger)
  })
  dialog.addEventListener('click', e => {
    if (e.target === dialog || e.target.closest('.blr-feedback__cancel')) dialog.close()
    let thumb = e.target.closest('.blr-feedback__vote button')
    if (thumb) vote(thumb.getAttribute('aria-pressed') === 'true' ? '' : thumb.value)
  })
  form.addEventListener('submit', send)
}
