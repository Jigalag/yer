
if ($('.navBurger').length > 0){
    $('.navBurger').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active').parents('.subNavigation').find('ul').first().slideToggle();
    });
}
if ($('[data-content="accordion"]').length > 0){
    $('[data-content="accordion"]').each(function(){
        $(this).find('.accTitle').on('click', function(){
            if ($(this).hasClass('active')){
                $(this).removeClass('active').parents('.accItem').find('.accBlock').slideUp('fast');
            }
            else{
                $(this).addClass('active').parents('.accItem').find('.accBlock').slideDown('fast');
            }
        })
    });
}
$('.subLink').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open').next().slideToggle();
});