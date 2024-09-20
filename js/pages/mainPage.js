export function mainPagecommon(){
  customMenuTabHandler();
}

export function mainPageDesktop(){
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
  courtHouseHandler();
  pawnHandler();

  // 부동산등기
  function realEstateHandler(){
    const realEstateItem = $('.section_custom_menu .real_estate .content_grid_item');
    const realEstateLink = $('.section_custom_menu .real_estate .content_grid_link');
    const realEstateIcon = $('.section_custom_menu .real_estate .common_icon');

    // 마우스 오버시
    $(realEstateLink).mouseenter(function(){
      // 인덱스
      const realEstateIndex = $(this).parent().index();
    
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
      $(realEstateItem).eq(1).find(realEstateIcon).removeClass('icon_registration_2_active').addClass('icon_registration_2_disabled');
      $(realEstateItem).eq(2).find(realEstateIcon).removeClass('icon_registration_4_active').addClass('icon_registration_4_disabled');
      $(realEstateItem).eq(3).find(realEstateIcon).removeClass('icon_registration_5_active').addClass('icon_registration_5_disabled');
      $(realEstateItem).eq(4).find(realEstateIcon).removeClass('icon_registration_7_active').addClass('icon_registration_7_disabled');
      $(realEstateItem).eq(5).find(realEstateIcon).removeClass('icon_registration_8_active').addClass('icon_registration_8_disabled');
    })
  }

  // 법인등기
  function courtHouseHandler(){
    const courtHouseItem = $('.section_custom_menu .court_house .content_grid_item');
    const courtHouseLink = $('.section_custom_menu .court_house .content_grid_link');
    const courtHouseIcon = $('.section_custom_menu .court_house .common_icon');

    // 마우스 오버시
    $(courtHouseLink).mouseenter(function(){
      // 인덱스
      const courtHouseIndex = $(this).parent().index();

      switch(courtHouseIndex) {
        case 0:
          $(courtHouseItem).eq(0).find(courtHouseIcon).removeClass('icon_registration_1_disabled').addClass('icon_registration_1_active');
          break;
        case 1:
          $(courtHouseItem).eq(1).find(courtHouseIcon).removeClass('icon_registration_2_disabled').addClass('icon_registration_2_active');
          break;
        case 2:
          $(courtHouseItem).eq(2).find(courtHouseIcon).removeClass('icon_registration_4_disabled').addClass('icon_registration_4_active');
          break;
        case 3:
          $(courtHouseItem).eq(3).find(courtHouseIcon).removeClass('icon_registration_6_disabled').addClass('icon_registration_6_active');
          break;
        case 4:
          $(courtHouseItem).eq(4).find(courtHouseIcon).removeClass('icon_registration_5_disabled').addClass('icon_registration_5_active');
          break;
        case 5:
          $(courtHouseItem).eq(5).find(courtHouseIcon).removeClass('icon_registration_7_disabled').addClass('icon_registration_7_active');
          break;
      }
    })

    // 마우스 오버아웃시
    $(courtHouseLink).mouseleave(function(){
      $(courtHouseItem).eq(0).find(courtHouseIcon).removeClass('icon_registration_1_active').addClass('icon_registration_1_disabled');
      $(courtHouseItem).eq(1).find(courtHouseIcon).removeClass('icon_registration_2_active').addClass('icon_registration_2_disabled');
      $(courtHouseItem).eq(2).find(courtHouseIcon).removeClass('icon_registration_4_active').addClass('icon_registration_4_disabled');
      $(courtHouseItem).eq(3).find(courtHouseIcon).removeClass('icon_registration_6_active').addClass('icon_registration_6_disabled');
      $(courtHouseItem).eq(4).find(courtHouseIcon).removeClass('icon_registration_5_active').addClass('icon_registration_5_disabled');
      $(courtHouseItem).eq(5).find(courtHouseIcon).removeClass('icon_registration_7_active').addClass('icon_registration_7_disabled');
    })
  }

  // 동산·채권담보등기
  function pawnHandler(){
    const pawnItem = $('.section_custom_menu .pawn .content_grid_item');
    const pawnLink = $('.section_custom_menu .pawn .content_grid_link');
    const pawnIcon = $('.section_custom_menu .pawn .common_icon');

    // 미우스 오버시
    $(pawnLink).mouseenter(function(){
      // 인덱스
      const pawnIndex = $(this).parent().index();
    
      switch(pawnIndex) {
        case 0:
          $(pawnItem).eq(0).find(pawnIcon).removeClass('icon_registration_1_disabled').addClass('icon_registration_1_active');
          break;
        case 1:
          $(pawnItem).eq(1).find(pawnIcon).removeClass('icon_registration_3_disabled').addClass('icon_registration_3_active');
          break;
        case 2:
          $(pawnItem).eq(2).find(pawnIcon).removeClass('icon_registration_4_disabled').addClass('icon_registration_4_active');
          break;
        case 3:
          $(pawnItem).eq(3).find(pawnIcon).removeClass('icon_registration_6_disabled').addClass('icon_registration_6_active');
          break;
        case 4:
          $(pawnItem).eq(4).find(pawnIcon).removeClass('icon_registration_5_disabled').addClass('icon_registration_5_active');
          break;
        case 5:
          $(pawnItem).eq(5).find(pawnIcon).removeClass('icon_registration_7_disabled').addClass('icon_registration_7_active');
          break;
      }
    })

    // 마우스 오버아웃시
    $(pawnLink).mouseleave(function(){
      $(pawnItem).eq(0).find(pawnIcon).removeClass('icon_registration_1_active').addClass('icon_registration_1_disabled');
      $(pawnItem).eq(1).find(pawnIcon).removeClass('icon_registration_3_active').addClass('icon_registration_3_disabled');
      $(pawnItem).eq(2).find(pawnIcon).removeClass('icon_registration_4_active').addClass('icon_registration_4_disabled');
      $(pawnItem).eq(3).find(pawnIcon).removeClass('icon_registration_6_active').addClass('icon_registration_6_disabled');
      $(pawnItem).eq(4).find(pawnIcon).removeClass('icon_registration_5_active').addClass('icon_registration_5_disabled');
      $(pawnItem).eq(5).find(pawnIcon).removeClass('icon_registration_7_active').addClass('icon_registration_7_disabled');
    })
  }
}