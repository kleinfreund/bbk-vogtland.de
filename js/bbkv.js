/* document.addEventListener('DOMContentLoaded', function () {
  const animateTime = 500;

  const sectionLinks = Array.from(document.querySelectorAll('.member__link'));
  sectionLinks.forEach(sectionLink => sectionLink.addEventListener('click', function (event) {
    event.preventDefault();

    const sections = document.querySelectorAll('.member__content.visible');
    sections.forEach(section => section.classList.remove('visible'));

    const currentSection = sectionLink.nextElementSibling;
    currentSection.classList.add('visible');

    if (currentSection.height() === 0) {
      autoHeightAnimate(currentSection, animateTime);
    } else {
      currentSection.stop().animate({ height: '0' }, animateTime);
    }
  }));

  function autoHeightAnimate(element, time) {
    const currentHeight = element.outerHeight();
    const autoHeight = element.css('height', 'auto').outerHeight();

    element.outerHeight(currentHeight);

    element.stop().animate({ height: autoHeight }, parseInt(time));
  }
}); */

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
