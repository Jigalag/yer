
if ($('.navBurger').length > 0){
    $('.navBurger').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active').parents('.subNavigation').find('ul').slideToggle();
    });
}
$(window).resize(function(){
    if ($(window).width() > 992){
        $('.subNavigation ul').show();
    }
});