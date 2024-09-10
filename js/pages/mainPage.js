export function mainPagecommon(){
  customMenuTabHandler();
  customMenuHoverHandler();
}

// 등기별 맞춤메뉴 버튼 클릭시 컨텐츠 변경
function customMenuTabHandler(){
  const tabBtn = $('.section_custom_menu .common_tab .common_tab_btn');
  const tabContentBox = $('.section_custom_menu .custom_menu_box');

  $(tabBtn).click(function(){
    const tabIndex = $(this).parent().index();
    
    // 버튼 제어
    $(this).parent().children(tabBtn).attr('aria-selected', 'true');
    $(this).parent().siblings().children(tabBtn).attr('aria-selected', 'false');

    // 컨텐츠 제어
    $(tabContentBox).eq(tabIndex).attr('aria-hidden', 'false');
    $(tabContentBox).eq(tabIndex).siblings().attr('aria-hidden', 'true');
  })
}

// 등기별 맞춤메뉴 마우스 이벤트
function customMenuHoverHandler(){
  realEstateHandler();
  function realEstateHandler(){
    const realEstateItem = $('.section_custom_menu .real_estate .section_grid_item');
    const realEstateLink = $('.section_custom_menu .real_estate .section_grid_link');
    const realEstateIcon = $('.section_custom_menu .real_estate .common_icon');

    $(realEstateLink).mouseenter(function(){
      const realEstateIndex = $(this).parent().index();
      
      // 마우스 오버시
      switch(realEstateIndex) {
        case 0:
          $(realEstateItem).eq(0).find(realEstateIcon).removeClass('icon_registration_1_disabled').addClass('icon_registration_1_active');
          break;
        case 1:
          $(realEstateItem).eq(1).find(realEstateIcon).removeClass('icon_registration_2_disabled').addClass('icon_registration_2_active');
          break;
        case 2:
          $(realEstateItem).eq(2).find(realEstateIcon).removeClass('icon_registration_4_disabled').addClass('icon_registration_4_active');
          break;
        case 3:
          $(realEstateItem).eq(3).find(realEstateIcon).removeClass('icon_registration_5_disabled').addClass('icon_registration_5_active');
          break;
        case 4:
          $(realEstateItem).eq(4).find(realEstateIcon).removeClass('icon_registration_7_disabled').addClass('icon_registration_7_active');
          break;
        case 5:
          $(realEstateItem).eq(5).find(realEstateIcon).removeClass('icon_registration_8_disabled').addClass('icon_registration_8_active');
          break;
      }
    })

    // 마우스 오버아웃시
    $(realEstateLink).mouseleave(function(){
      $(realEstateItem).eq(0).find(realEstateIcon).removeClass('icon_registration_1_active').addClass('icon_registration_1_disabled');
      $(realEstateItem).eq(1).find(realEstateIcon).removeClass('icon_registration_1_active').addClass('icon_registration_2_disabled');
      $(realEstateItem).eq(2).find(realEstateIcon).removeClass('icon_registration_1_active').addClass('icon_registration_4_disabled');
      $(realEstateItem).eq(3).find(realEstateIcon).removeClass('icon_registration_1_active').addClass('icon_registration_5_disabled');
      $(realEstateItem).eq(4).find(realEstateIcon).removeClass('icon_registration_1_active').addClass('icon_registration_7_disabled');
      $(realEstateItem).eq(5).find(realEstateIcon).removeClass('icon_registration_1_active').addClass('icon_registration_8_disabled');
    })
  }

  function courthouseHandler(){

  }
  function pawnHandler(){

  }
}