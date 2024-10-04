export function remoteDesktop(){
  desktopRemoteViewIssueHandler();
  desktopRemoteDataHandler();
}

// 등기열람/발급
function desktopRemoteViewIssueHandler(){
  const currentPageUrl = window.location.pathname.split('/').pop();
  const firstDepItem = $('.common_remote_lnb .first_list > .common_remote_lnb_item');
  const firstDepLink = $('.common_remote_lnb .first_list > .common_remote_lnb_item .common_remote_lnb_link');
  const secondDepList = $('.common_remote_lnb .first_list > .common_remote_lnb_item > .second_list');
  const secondDepItem = $('.common_remote_lnb .first_list > .common_remote_lnb_item > .second_list > .common_remote_lnb_item');
  const secondDepLink = $('.common_remote_lnb .first_list > .common_remote_lnb_item > .second_list > .common_remote_lnb_item > .common_remote_lnb_link');
  const isActive = 'active';
  
  
  switch(currentPageUrl){
    // 부동산
    case 'view_issue_real_estate_view.html':
      $(firstDepItem).eq(0).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');;
      $(firstDepItem).eq(0).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(0).children(secondDepList).children(secondDepItem).eq(0).children(secondDepLink).addClass(isActive);
      break;
    case 'view_issue_real_estate_issue.html':
      $(firstDepItem).eq(0).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(0).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(0).children(secondDepList).children(secondDepItem).eq(1).children(secondDepLink).addClass(isActive);
      break;
    case 'view_issue_real_estate_state.html':
      $(firstDepItem).eq(0).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(0).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(0).children(secondDepList).children(secondDepItem).eq(2).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_real_estate_forwarding.html':
      $(firstDepItem).eq(0).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(0).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(0).children(secondDepList).children(secondDepItem).eq(3).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_real_estate_issuance_confirmation.html':
      $(firstDepItem).eq(0).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(0).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(0).children(secondDepList).children(secondDepItem).eq(4).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_real_estate_processing.html':
      $(firstDepItem).eq(0).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(0).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(0).children(secondDepList).children(secondDepItem).eq(5).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_real_estate_closed_register_issuance_reservation.html':
      $(firstDepItem).eq(0).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(0).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(0).children(secondDepList).children(secondDepItem).eq(6).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_real_estate_check_list.html':
      $(firstDepItem).eq(0).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(0).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(0).children(secondDepList).children(secondDepItem).eq(7).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_real_estate_ownership_status.html':
      $(firstDepItem).eq(0).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(0).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(0).children(secondDepList).children(secondDepItem).eq(8).children(secondDepLink).addClass(isActive); 
      break;

    // 법인
    case 'view_issue_corporation_view.html':
      $(firstDepItem).eq(1).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(1).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(1).children(secondDepList).children(secondDepItem).eq(0).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_corporation_issue.html':
      $(firstDepItem).eq(1).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(1).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(1).children(secondDepList).children(secondDepItem).eq(1).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_corporation_state.html':
      $(firstDepItem).eq(1).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(1).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(1).children(secondDepList).children(secondDepItem).eq(2).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_corporation_forwarding.html':
      $(firstDepItem).eq(1).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(1).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(1).children(secondDepList).children(secondDepItem).eq(3).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_corporation_issuance_confirmation.html':
      $(firstDepItem).eq(1).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(1).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(1).children(secondDepList).children(secondDepItem).eq(4).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_corporation_issuance_reservation.html':
      $(firstDepItem).eq(1).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(1).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(1).children(secondDepList).children(secondDepItem).eq(5).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_corporation_processing.html':
      $(firstDepItem).eq(1).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(1).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(1).children(secondDepList).children(secondDepItem).eq(6).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_corporation_seal_information.html':
      $(firstDepItem).eq(1).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(1).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(1).children(secondDepList).children(secondDepItem).eq(7).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_corporation_closed_register_issuance_reservation.html':
      $(firstDepItem).eq(1).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(1).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(1).children(secondDepList).children(secondDepItem).eq(8).children(secondDepLink).addClass(isActive); 
      break;

    // 동산·채권담보
    case 'view_issue_pawn_view.html':
      $(firstDepItem).eq(2).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(2).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(2).children(secondDepList).children(secondDepItem).eq(0).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_pawn_issue.html':
      $(firstDepItem).eq(2).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(2).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(2).children(secondDepList).children(secondDepItem).eq(1).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_pawn_state.html':
      $(firstDepItem).eq(2).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(2).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(2).children(secondDepList).children(secondDepItem).eq(2).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_pawn_issuance_confirmation.html':
      $(firstDepItem).eq(2).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(2).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(2).children(secondDepList).children(secondDepItem).eq(3).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_pawn_processing.html':
      $(firstDepItem).eq(2).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(2).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(2).children(secondDepList).children(secondDepItem).eq(4).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_pawn_bailiff.html':
      $(firstDepItem).eq(2).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(2).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(2).children(secondDepList).children(secondDepItem).eq(5).children(secondDepLink).addClass(isActive); 
      break;

    // 기타
    case 'view_issue_etc_issuance_confirmation.html':
      $(firstDepItem).eq(3).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(3).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(3).children(secondDepList).children(secondDepItem).eq(0).children(secondDepLink).addClass(isActive); 
      break;
    case 'view_issue_etc_processing.html':
      $(firstDepItem).eq(3).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(3).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(3).children(secondDepList).children(secondDepItem).eq(1).children(secondDepLink).addClass(isActive); 
      break;
  }
}

// 자료센터
function desktopRemoteDataHandler(){
  const currentPageUrl = window.location.pathname.split('/').pop();
  const firstDepItem = $('.common_remote_lnb .first_list > .common_remote_lnb_item');
  const firstDepLink = $('.common_remote_lnb .first_list > .common_remote_lnb_item .common_remote_lnb_link');
  const secondDepList = $('.common_remote_lnb .first_list > .common_remote_lnb_item > .second_list');
  const secondDepItem = $('.common_remote_lnb .first_list > .common_remote_lnb_item > .second_list > .common_remote_lnb_item');
  const secondDepLink = $('.common_remote_lnb .first_list > .common_remote_lnb_item > .second_list > .common_remote_lnb_item > .common_remote_lnb_link');
  const isActive = 'active';
  
  switch(currentPageUrl) {
    case 'data_registration_apply_form.html':
      $(firstDepItem).eq(0).children(firstDepLink).addClass(isActive);
      break;
    case 'data_attached_written_form.html':
      $(firstDepItem).eq(1).children(firstDepLink).addClass(isActive);
      break;
    case 'data_explain_of_registration_term.html':
      $(firstDepItem).eq(2).children(firstDepLink).addClass(isActive);
      break;
    case 'data_program_install_security.html':
      $(firstDepItem).eq(3).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(3).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(3).children(secondDepList).children(secondDepItem).eq(0).children(secondDepLink).addClass(isActive); 
      break;
    case 'data_program_install_java_runtime.html':
      $(firstDepItem).eq(3).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(3).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(3).children(secondDepList).children(secondDepItem).eq(1).children(secondDepLink).addClass(isActive); 
      break;
    case 'data_program_install_register_verification.html':
      $(firstDepItem).eq(3).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(3).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(3).children(secondDepList).children(secondDepItem).eq(2).children(secondDepLink).addClass(isActive); 
      break;
    case 'data_program_install_electronic_certificate.html':
      $(firstDepItem).eq(3).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(3).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(3).children(secondDepList).children(secondDepItem).eq(3).children(secondDepLink).addClass(isActive); 
      break;
    case 'data_program_install_scan.html':
      $(firstDepItem).eq(3).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(3).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(3).children(secondDepList).children(secondDepItem).eq(4).children(secondDepLink).addClass(isActive); 
      break;
    case 'data_program_install_document_verification_registration.html':
      $(firstDepItem).eq(3).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(3).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(3).children(secondDepList).children(secondDepItem).eq(5).children(secondDepLink).addClass(isActive); 
      break;
    case 'data_program_install_edge.html':
      $(firstDepItem).eq(3).children(firstDepLink).addClass(isActive).attr('aria-expanded', 'true');
      $(firstDepItem).eq(3).children(secondDepList).attr('aria-hidden', 'false');
      $(firstDepItem).eq(3).children(secondDepList).children(secondDepItem).eq(6).children(secondDepLink).addClass(isActive); 
      break;
    case 'data_registration-related_law_regulation.html':
      $(firstDepItem).eq(4).children(firstDepLink).addClass(isActive);
      break;
    case 'data_small_tenant.html':
      $(firstDepItem).eq(5).children(firstDepLink).addClass(isActive);
      break;
    case 'data_computerized_white_paper.html':
      $(firstDepItem).eq(6).children(firstDepLink).addClass(isActive);
      break;
  }

  

  
}

