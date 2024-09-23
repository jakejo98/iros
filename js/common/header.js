export function headerDesktop(){
  desktopGnbHandler();
}

export function headerResponsive(){
  responsiveGnbHandler();
  responsiveGnbListHandler();
}

// 반응형 gnb 핸들러
function responsiveGnbHandler(){
  const gnb = $('.responsive_gnb_wrap .responsive_gnb')
  const gnbActiveBtn = $('.responsive_gnb_wrap .responsive_gnb_menu_btn');
  const gnbDisabledBtn = $('.responsive_gnb_wrap .responsive_gnb_close_btn');

  // 반응형 gnb 활성화
  $(gnbActiveBtn).click(function(){
    $(this).attr('aria-expanded', 'true');
    $(gnbDisabledBtn).attr('aria-expanded', 'true');
    $(gnb).attr('aria-hidden', 'false');
  })

  // 반응형 gnb 비활성화
  $(gnbDisabledBtn).click(function(){
    $(this).attr('aria-expanded', 'false');
    $(gnbActiveBtn).attr('aria-expanded', 'false');
    $(gnb).attr('aria-hidden', 'true');
  })
}

// 반응형 gnb 리스트 핸들러
function responsiveGnbListHandler(){
  const firstItem = $('.responsive_gnb .first_depth_list > .depth_item');
  const firstLink = $('.responsive_gnb .first_depth_list > .depth_item > .depth_link');
  const secondList = $('.responsive_gnb .first_depth_list > .depth_item > .second_depth_list');
  const secondLink = $('.responsive_gnb .first_depth_list > .depth_item > .second_depth_list > .depth_item > .depth_link');
  const thirdList = $('.responsive_gnb .first_depth_list > .depth_item > .second_depth_list > .depth_item > .third_depth_list');

  // 1depth 버튼 클릭이벤트
  $(firstLink).click(function(){
    // Index
    const index = $(this).parent().index();
    // 1depth 확장 활성화 / 비활성화
    $(this).attr('aria-expanded', 'true');
    $(this).parent().siblings().find(firstLink).attr('aria-expanded', 'false');
    // 2depth 활성화 / 비활성화
    $(firstItem).eq(index).find(secondList).attr('aria-hidden', 'false');
    $(firstItem).eq(index).siblings().find(secondList).attr('aria-hidden', 'true');
    // 2depth 버튼 비활성화
    $(secondLink).filter(function(){
      return $(this).attr('aria-expanded') !== undefined;
    }).attr('aria-expanded', 'false');
    // 3depth 숨김 처리
    $(thirdList).attr('aria-hidden', 'true');
  })

  // 2dpth 버튼 이벤트 - 리사이즈시 버튼이 클릭되지 않는 현상 해결
  $(secondLink).off('click');

  // 2depth 버튼 클릭이벤트
  $(secondLink).click(function(){
    // aria-expanded 속성이 적용되어 있는지 유무와 aria-expanded에 현재 속성 확인
    if($(this).attr('aria-expanded') === 'false' && $(this).attr('aria-expanded') !== undefined) {
      // 2depth 활성화
      $(this).attr('aria-expanded', 'true');
      // 2dpeth 형제요소 비활성화
      $(this).parent().siblings().find(secondLink).filter(function(){
        return $(this).attr('aria-expanded') !== undefined;
      }).attr('aria-expanded', 'false');
      // 3depth 활성화
      $(this).parent().find(thirdList).attr('aria-hidden', 'false');
      // 3depth 형제요소 비활성화
      $(this).parent().siblings().find(thirdList).attr('aria-hidden', 'true');
    }
    // aria-expanded 속성이 적용되어 있는지 유무와 aria-expanded에 현재 속성 확인
    else if($(this).attr('aria-expanded') === 'true' && $(this).attr('aria-expanded') !== undefined) {
      // 2depth 비활성화
      $(this).attr('aria-expanded', 'false');
      // 3depth 비활성화
      $(thirdList).attr('aria-hidden', 'true');
    }
  })
}

function desktopGnbHandler(){
  const gnbWrap = $('.header_gnb_wrap');

  // 데스크탑 gnb 활성화
  $(gnbWrap).mouseenter(function(){
    $(this).attr('aria-expanded', 'true');
  })

  // 데스크탑 gnb 비활성화
  $(gnbWrap).mouseleave(function(){
    $(this).attr('aria-expanded', 'false');
  })
}