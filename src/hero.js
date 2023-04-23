// new Swiper("#swiper", {
//   effect: "fade"
// })

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
    // renderFraction: function (currentClass, totalClass) {
    //   return '<span class="' + currentClass + '"></span>' +
    //    '___' +
    //   '<span class="' + totalClass + '"></span>';
    // }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },


effect: "cube"
// cubeEffect: {
// slideShadows: true;
// shadow: true;
// shadowOffset: 20;
// shadowScale: 0.94; 
//   }

 

});
