jQuery(document).ready(function($){
  $('.menu-burger').on('click', function(e) {
    e.preventDefault();

    if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

    $('body').toggleClass('navigation-is-open');
  });
});