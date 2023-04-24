

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

 // Navigation arrows
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  //   formatFractionCurrent: function (number) {
  //     return ('0' + number).slice(-2);
  // },
  // formatFractionTotal: function (number) {
  //     return ('0' + number).slice(-2);
  // },
    // renderCustom: function (currentClass, totalClass) {
    //   return '<span class="' + currentClass + '"></span>' + ' --- ' +
    //   '<span class="' + totalClass + '"></span>';
    // }
  },


effect: "cube"
// cubeEffect: {
// slideShadows: true;
// shadow: true;
// shadowOffset: 20;
// shadowScale: 0.94; 
//   }


});
