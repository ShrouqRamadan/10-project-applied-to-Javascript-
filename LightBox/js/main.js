
var allImg=Array.from(document.querySelectorAll('img'));
var lightBox=document.querySelector('.light-box');
var lightBoxImg=document.querySelector('.lightbox-img');
var nextBtn = document.getElementById('next-btn');
var prevBtn = document.getElementById('prev-btn');
var closeBtn = document.getElementById('close-btn');
// console.log(nextBtn);
var indexOfImg;
for (let i = 0 ; i< allImg.length; i++){
allImg[i].addEventListener('click',function(e){
    lightBox.classList.remove('d-none');
    var imgSrc =e.target.getAttribute('src');
    lightBoxImg.style.backgroundImage= `url(${imgSrc})`;

    indexOfImg=allImg.indexOf(e.target);

     console.log(indexOfImg);
})
}

function nextfun(){
    indexOfImg++
    if(indexOfImg > allImg.length-1){
        indexOfImg=0
    }
    var newSrc =allImg[ indexOfImg].getAttribute('src');
    // console.log(imgSrc);
    lightBoxImg.style.backgroundImage= `url(${newSrc})`;


}

nextBtn.addEventListener('click', nextfun)

function prevfun(){
    indexOfImg--
    if(indexOfImg < 0){
        indexOfImg=allImg.length-1
    }
    var newSrc =allImg[ indexOfImg].getAttribute('src');
    lightBoxImg.style.backgroundImage= `url(${newSrc})`;


}

prevBtn.addEventListener('click',prevfun)


closeBtn.addEventListener('click',function(){
    lightBox.classList.add('d-none');

})