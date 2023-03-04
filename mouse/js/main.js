var mouse=document.querySelector('img');
document.addEventListener('mousemove',function(e){
    mouse.style.top=e.clientY +"px";
    mouse.style.left=e.clientX +"px";
})
