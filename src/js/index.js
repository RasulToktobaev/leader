$('.question__list') .on('click','li',function() {
    $(this)  .toggleClass('active').siblings().removeClass('active')

})