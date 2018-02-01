document.addEventListener('DOMContentLoaded', function () {
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
});
