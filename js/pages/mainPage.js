export function mainPagecommon(){
  customMenuTabHandler();
}

export function mainPageDesktop(){
  desktopCustomMenuHoverHandler();
  desktopCustomerServicePopup();
  desktopResizeIcon();
}

export function mainPageResponsive(){
  responsiveResizeIcon();
  responsiveCustomerServicePopup();
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
function desktopCustomMenuHoverHandler(){
  realEstateHandler();
  corporationHandler();
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
  function corporationHandler(){
    const corporationItem = $('.section_custom_menu .corporation .content_grid_item');
    const corporationLink = $('.section_custom_menu .corporation .content_grid_link');
    const corporationIcon = $('.section_custom_menu .corporation .common_icon');

    // 마우스 오버시
    $(corporationLink).mouseenter(function(){
      // 인덱스
      const corporationIndex = $(this).parent().index();

      switch(corporationIndex) {
        case 0:
          $(corporationItem).eq(0).find(corporationIcon).removeClass('icon_registration_1_disabled').addClass('icon_registration_1_active');
          break;
        case 1:
          $(corporationItem).eq(1).find(corporationIcon).removeClass('icon_registration_2_disabled').addClass('icon_registration_2_active');
          break;
        case 2:
          $(corporationItem).eq(2).find(corporationIcon).removeClass('icon_registration_4_disabled').addClass('icon_registration_4_active');
          break;
        case 3:
          $(corporationItem).eq(3).find(corporationIcon).removeClass('icon_registration_6_disabled').addClass('icon_registration_6_active');
          break;
        case 4:
          $(corporationItem).eq(4).find(corporationIcon).removeClass('icon_registration_5_disabled').addClass('icon_registration_5_active');
          break;
        case 5:
          $(corporationItem).eq(5).find(corporationIcon).removeClass('icon_registration_7_disabled').addClass('icon_registration_7_active');
          break;
      }
    })

    // 마우스 오버아웃시
    $(corporationLink).mouseleave(function(){
      $(corporationItem).eq(0).find(corporationIcon).removeClass('icon_registration_1_active').addClass('icon_registration_1_disabled');
      $(corporationItem).eq(1).find(corporationIcon).removeClass('icon_registration_2_active').addClass('icon_registration_2_disabled');
      $(corporationItem).eq(2).find(corporationIcon).removeClass('icon_registration_4_active').addClass('icon_registration_4_disabled');
      $(corporationItem).eq(3).find(corporationIcon).removeClass('icon_registration_6_active').addClass('icon_registration_6_disabled');
      $(corporationItem).eq(4).find(corporationIcon).removeClass('icon_registration_5_active').addClass('icon_registration_5_disabled');
      $(corporationItem).eq(5).find(corporationIcon).removeClass('icon_registration_7_active').addClass('icon_registration_7_disabled');
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

// 데스크탑 이용자별 서비스 아이콘 사이즈 변화
function desktopResizeIcon(){
  const resizeIcon = $('.section_customer_service .common_icon');
  const smallSize = 'ty_32';
  const bigSize = 'ty_48';

  $(resizeIcon).removeClass(smallSize).addClass(bigSize);
}

// 반응형 이용자별 서비스 아이콘 사이즈 변화
function responsiveResizeIcon(){
  const resizeIcon = $('.section_customer_service .common_icon');
  const smallSize = 'ty_32';
  const bigSize = 'ty_48';

  $(resizeIcon).removeClass(bigSize).addClass(smallSize);
}

// 데스크탑 등록면허세 정액분 신고, 직권말소통지등 보기, 신용카드 매출전표 발행 클릭시 링크 이동 하지 않고 팝업 창 활성화
function desktopCustomerServicePopup(){
  licenseTax();
  exOfficio();
  creditCard();
  function licenseTax(){
    const item = $('.section_customer_service .content_grid_item').eq(5);
    const link = $('.section_customer_service .content_grid_link');

    $(item).find(link).click(function(event){
      event.preventDefault();

      let width = 500;
      let height = 500;
      let left = (window.outerWidth / 2) - (width / 2) + window.screenX; 
      let top = (window.outerHeight / 2) - (height / 2) + window.screenY; 
      
      window.open('/iros/html/prepare/etc/registration_license_tax.html', '등록면허세 정액분 신고 팝업 창', 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);
    })
  }
  function exOfficio(){
    const item = $('.section_customer_service .content_grid_item').eq(7);
    const link = $('.section_customer_service .content_grid_link');

    $(item).find(link).click(function(event){
      event.preventDefault();

      let width = 500;
      let height = 500;
      let left = (window.outerWidth / 2) - (width / 2) + window.screenX; 
      let top = (window.outerHeight / 2) - (height / 2) + window.screenY; 
      
      window.open('/iros/html/prepare/etc/ex_officio_notice_etc.html', '직권말소통지등 보기 팝업 창', 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);
    })
  }
  function creditCard(){
    const item = $('.section_customer_service .content_grid_item').eq(8);
    const link = $('.section_customer_service .content_grid_link');

    $(item).find(link).click(function(event){
      event.preventDefault();

      let width = 500;
      let height = 500;
      let left = (window.outerWidth / 2) - (width / 2) + window.screenX; 
      let top = (window.outerHeight / 2) - (height / 2) + window.screenY; 
      
      window.open('/iros/html/prepare/etc/ex_officio_notice_etc.html', '신용카드 매출전표 발행 팝업 창', 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);
    })
  }
}

// 반응형 등록면허세 정액분 신고, 직권말소통지등 보기, 신용카드 매출전표 발행 클릭시 링크 이동 하지 않고 팝업 창 활성화
function responsiveCustomerServicePopup(){
  licenseTax();
  exOfficio();
  creditCard();
  function licenseTax(){
    const item = $('.section_customer_service .content_grid_item').eq(5);
    const link = $('.section_customer_service .content_grid_link');

    $(item).find(link).click(function(event){
      event.preventDefault();

      let percentWidth = 50; 
      let percentHeight = 50; 
      let width = Math.floor(window.screen.width * (percentWidth / 100));
      let height = Math.floor(window.screen.height * (percentHeight / 100));
      let left = (window.screen.width / 2) - (width / 2);
      let top = (window.screen.height / 2) - (height / 2);
      
      window.open('/iros/html/prepare/etc/registration_license_tax.html', '등록면허세 정액분 신고 팝업 창', 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);
    })
  }
  function exOfficio(){
    const item = $('.section_customer_service .content_grid_item').eq(7);
    const link = $('.section_customer_service .content_grid_link');

    $(item).find(link).click(function(event){
      event.preventDefault();

      let percentWidth = 50; 
      let percentHeight = 50; 
      let width = Math.floor(window.screen.width * (percentWidth / 100));
      let height = Math.floor(window.screen.height * (percentHeight / 100));
      let left = (window.screen.width / 2) - (width / 2);
      let top = (window.screen.height / 2) - (height / 2);
      
      window.open('/iros/html/prepare/etc/ex_officio_notice_etc.html', '직권말소통지등 보기 팝업 창', 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);
    })
  }
  function creditCard(){
    const item = $('.section_customer_service .content_grid_item').eq(8);
    const link = $('.section_customer_service .content_grid_link');

    $(item).find(link).click(function(event){
      event.preventDefault();

      let percentWidth = 50; 
      let percentHeight = 50; 
      let width = Math.floor(window.screen.width * (percentWidth / 100));
      let height = Math.floor(window.screen.height * (percentHeight / 100));
      let left = (window.screen.width / 2) - (width / 2);
      let top = (window.screen.height / 2) - (height / 2);
      
      window.open('/iros/html/prepare/etc/ex_officio_notice_etc.html', '신용카드 매출전표 발행 팝업 창', 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);
    })
  }
}