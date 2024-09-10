export function swiper(){
  mainBannerSwiper();
}

function mainBannerSwiper(){
  const isContent = $('.section_main_banner').length;

  if(isContent > 0) {
    const swiper = new Swiper(".main_banner", {
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      a11y: { 
        enabled: true,
        slideLabelMessage: '총 {{slidesLength}}장의 이벤트 배너 중 {{index}}번 이벤트 배너 입니다.',
      },
    });
  }
}