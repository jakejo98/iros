export function footerCommon(){
  menuDropup();
  menuLinkHandler();
}

// footer 메뉴 드롭
function menuDropup(){
  const dropBtn = $('.footer_menu_wrap .footer_menu_link');
  const dropExpandedList = $('.footer_menu_wrap .footer_menu_dropup_list');

  $(dropBtn).click(function(event){
    // 링크 막기
    event.preventDefault();
    // 선택 요소가 비활성화 상태일 떄
    if($(this).attr('aria-expanded') === 'false') {
      // 선택 요소 드롭메뉴 활성화
      $(this).attr('aria-expanded', 'true');
      $(this).parent().find(dropExpandedList).attr('aria-hidden', 'false');
      // 선택 요소를 제외한 형제 요소 드롭메뉴 비활성화
      $(this).parent().siblings().find(dropBtn).attr('aria-expanded', 'false');
      $(this).parent().siblings().find(dropExpandedList).attr('aria-hidden', 'true');
      // 선택 요소가 활성화 상태일 때
    } else {
      // 선택 요소 드롭메뉴 비활성화
      $(this).attr('aria-expanded', 'false');
      $(this).parent().find(dropExpandedList).attr('aria-hidden', 'true');
    }
  })
}

// footer 메뉴 링크 막기
function menuLinkHandler(){
  const menuLink = $('.footer_menu .footer_menu_item > .footer_menu_link');

  $(menuLink).click(function(event){
    event.preventDefault();
  })
}

