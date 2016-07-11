
if ($('.navBurger').length > 0){
    $('.navBurger').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active').parents('.subNavigation').find('ul').slideToggle();
    });
}