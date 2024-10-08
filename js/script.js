document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.my-detail');

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check in case items are already in view
  checkVisibility();
});


document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.my-services');

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check in case items are already in view
  checkVisibility();
});


document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.contents');

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check in case items are already in view
  checkVisibility();
});


document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.sr-vc');

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check in case items are already in view
  checkVisibility();
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.hero-first-col');

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check in case items are already in view
  checkVisibility();
});


document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.hero-second-col');

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check in case items are already in view
  checkVisibility();
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.skills-container');

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check in case items are already in view
  checkVisibility();
});