document.addEventListener('DOMContentLoaded', function () {
  const buttons = Array.from(document.querySelectorAll('[aria-expanded]'));
  buttons.forEach(button => button.addEventListener('click', toggleSectionExpanded));
});

function toggleSectionExpanded(event) {
  const button = event.currentTarget;
  const expanded = button.getAttribute('aria-expanded') === 'true' || false;
  button.setAttribute('aria-expanded', !expanded);

  const heading = button.parentElement;
  const targetSection = heading.nextElementSibling;
  targetSection.hidden = expanded;
}
