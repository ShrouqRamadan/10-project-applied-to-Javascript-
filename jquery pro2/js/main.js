$('.main-img').click(function(e){
var imgSrc=$(e.target).attr('src');
$('.big-img').attr('src', imgSrc)
})