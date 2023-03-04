var colors =$('.item-color')
var colorCode =$('p')
// console.log(colors);
for(var i=0;i<colors.length;i++){
let red =Math.round(Math.random()*255);
let green =Math.round(Math.random()*255);
let blue=Math.round(Math.random()*255);
 colors.eq(i).css({ backgroundColor:`rgb(${red}, ${green}, ${blue})`})

 
}
$('.btn').click(function(){
    location.reload();
})

$(".item").click(function(e)
{
   navigator.clipboard.writeText($(e.target).css('backgroundColor'));
   alert('Color Copyed')
 })





  






 


  

