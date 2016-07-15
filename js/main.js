
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
                $(this).removeClass('active').parents('.accItem').find('.accBlock').slideUp();
            }
            else{
                $('.accTitle').removeClass('active').parents('.accItem').find('.accBlock').slideUp();
                $(this).addClass('active').parents('.accItem').find('.accBlock').slideDown();
            }
        })
    });
}
$('.subLink').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open').next().slideToggle();
});
$('#imagesUpload').enscroll({
    showOnHover: false,
    verticalTrackClass: 'track3',
    verticalHandleClass: 'handle3'
});