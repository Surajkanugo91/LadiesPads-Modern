const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));

document.querySelector('.enquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const body = [
    `Name: ${data.get('name') || ''}`,
    `Company: ${data.get('company') || ''}`,
    `Phone: ${data.get('phone') || ''}`,
    `Email: ${data.get('email') || ''}`,
    `Product: ${data.get('product') || ''}`,
    '',
    `Requirement: ${data.get('requirement') || ''}`,
  ].join('\n');
  location.href = `mailto:madhav@ladiespads.com?subject=${encodeURIComponent('Product enquiry from LadiesPads website')}&body=${encodeURIComponent(body)}`;
});
