import { loadFile } from "/iros/js/common/include.js";
import { swiper } from "/iros/js/common/swiper.js";
import { headerDesktop, headerResponsive } from "/iros/js/common/header.js";
import { mainPagecommon, mainPageDesktop, mainPageResponsive } from "/iros/js/pages/mainPage.js";
import { footerCommon } from "/iros/js/common/footer.js";
import { remoteDesktop } from "/iros/js/pages/remote.js";

let windowWidth = 0;

// 윈도우 너비 업데이트 함수
function updateWidth(){
  return $(window).width();
}
// 윈도우 리사이즈 너비 값 재설정
$(window).resize(function(){
  windowWidth = updateWidth();
  checkWidth();
});
// 윈도우 너비에 조건부로 작동하는 함수
function checkWidth() {
  windowWidth = updateWidth();
  if(windowWidth > 1023) {
    headerDesktop();
    mainPageDesktop();
    remoteDesktop();
  } else {
    headerResponsive();
    mainPageResponsive();
  }
}
// 공통 함수
$(document).ready(function(){
  loadFile(function(){
    checkWidth();
    swiper();
    mainPagecommon();
    footerCommon();
  });
});


