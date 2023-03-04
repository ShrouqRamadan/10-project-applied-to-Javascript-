$('.item').click(function(e){
    $('.see-photo').removeClass('d-none');
var imgSrc= $(e.target).css('backgroundImage');
$('.bg-img').css('backgroundImage',imgSrc)
})

$('.fa-rectangle-xmark').click(function(){
    $('.see-photo').addClass('d-none');

})
