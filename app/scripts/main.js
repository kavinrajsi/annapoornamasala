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

$(document).ready(function () {

  // menu transition and action on click
  /**
   * Show menu in mobile
   *
   */
  var $body = $('body'),
    $menuLeft = $('#navbar'),
    $burgermenu = $('#nav-burgermenu'),
    $burgermenuIcon = $('.buger-menu-icon');

  $burgermenu.click(function () {
    $burgermenuIcon.toggleClass('active');
    $menuLeft.toggleClass('menu-drawer-open');
    $body.toggleClass('menu-open');
  });

  // click move
  $('#participate-button').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
    }, 2000);
  });
});
