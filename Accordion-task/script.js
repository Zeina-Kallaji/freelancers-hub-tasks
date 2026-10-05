document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const currentItem = header.parentElement;
      const isCurrentlyActive = currentItem.classList.contains('active');

      accordionHeaders.forEach((otherHeader) => {
        const otherItem = otherHeader.parentElement;
        if (otherItem !== currentItem && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherHeader.setAttribute('aria-expanded', 'false');
        }
      });

      if (isCurrentlyActive) {
        currentItem.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
      } else {
        currentItem.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
});