import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// ========================== FAQ
new Accordion('.faq-accordion-container', {
  showMultiple: true,
});

// ========================== ABOUT ME

new Accordion('.accordion-container', {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
});
