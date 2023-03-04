$('.container-fluid').animate({width:'95%'},2000);
$('.container-fluid').animate({ height:'100vh'},2000,function(){
    $('h1').show(1000,function(){
        $('.container-fluid > p').fadeIn(1000,function(){
            $('.col-lg-4').slideDown(3000);
        })
    })
});



