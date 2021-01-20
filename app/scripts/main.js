console.log('\'Allo \'Allo!');

// service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(serviceWorker => {
      console.log('Service Worker registered: ', serviceWorker);
    })
    .catch(error => {
      console.error('Error registering the Service Worker: ', error);
    });
}

// image lazy load
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Dynamically import the LazySizes library
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
  document.body.appendChild(script);
}


// menu transition and action on click
const
  body = document.body,
  headerMenu = gsap.timeline({
    paused: true
  }),
  headerMenu2 = gsap.timeline({
    paused: true
  });

headerMenu.to('.menu--item__content', 0.3, {
  top: 0,
  visibility: 'visible',
  height: 'auto',
  x: 0,
  y: 0,
  opacity: 1,
  ease: Expo.Power3,
});

headerMenu.staggerFrom(
  '.menu--item__content-link',
  0.3, {
    y: -30,
    opacity: 0,
    ease: Expo.easeIn,
  },
  '-=0.35'
);

headerMenu.staggerFrom(
  '.menu--secondary',
  0.3, {
    y: -30,
    opacity: 0,
    ease: Expo.easeIn,
  },
  '+=0.35'
);

headerMenu.staggerFrom(
  '.lead-me-out__link li',
  0.3, {
    y: 30,
    opacity: 0,
    ease: Expo.easeIn,
  }, {
    y: 0,
    opacity: 1,
    ease: Expo.easeIn,
  }
);

headerMenu.reverse();
$(document).on('click', '.trigger-menu', function () {
  // alert('0');
  body.classList.toggle('menu--open');
  headerMenu.reversed(!headerMenu.reversed());
});

  // click move
  $('#participate-button').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
    }, 2000);
  });
