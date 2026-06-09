// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const showing = nav.style.display === 'block';
      nav.style.display = showing ? '' : 'block';
      navToggle.setAttribute('aria-expanded', String(!showing));
    });

    // Close nav when clicking outside (mobile)
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && e.target !== navToggle && window.innerWidth <= 700) {
        nav.style.display = '';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Contact form submission (unobtrusive)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Sending...';
      const data = new FormData(form);
      const action = form.getAttribute('action') || '';
      try {
        // Use fetch to submit to Formspree or your endpoint
        const res = await fetch(action, {
          method: form.method || 'POST',
          headers: { 'Accept': 'application/json' },
          body: data
        });
        if (res.ok) {
          status.textContent = 'Thanks — your message was sent.';
          form.reset();
        } else {
          const json = await res.json().catch(()=>null);
          status.textContent = (json && json.error) ? ('Error: ' + json.error) : 'Oops, there was a problem sending your message.';
        }
      } catch (err) {
        status.textContent = 'Network error — please try again later.';
      }
    });
  }
});
