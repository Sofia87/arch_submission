let swiper1 = new Swiper('.slideshow1', {
    effect: 'cube',
    zoom: true,
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    autoplay: {
    delay: 10000,
    disableOnInteraction: false,
    },

    loop: true,
    keyboard: true,
    pagination: {
    el: '.swiper-pagination',
    },
});

let swiper2 = new Swiper('.slideshow2', {
    direction: 'vertical',
    pagination: {
    el: '.swiper-pagination',
    },
    loop: true,
    keyboard: true,
});


document.addEventListener('gest', function(gesture) {
  if (gesture.left) {
    swiper1.slideNext()
    console.log("left")
  }
  else if(gesture.right){
    swiper1.slidePrev()
    console.log("right")
  }
}, false)
gest.start();
gest.options.sensitivity(100);
gest.options.skinFilter(true);
document.addEventListener('gest', function(gesture) {
  if (gesture.up) {
    swiper2.slideNext()
    console.log("up")
  }
  else if(gesture.down){
    swiper2.slidePrev()
    console.log("down")
  }
}, false)
gest.start();
gest.options.sensitivity(100);
gest.options.skinFilter(true);
