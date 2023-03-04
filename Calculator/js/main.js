var inputValue= document.querySelector('.input-number')

$('#zero').click(function(){
inputValue.value+="0"
})
$('#two-zero').click(function(){
inputValue.value+="00"
})
$('#one').click(function(){
inputValue.value+="1"
})
$('#two').click(function(){
inputValue.value+="2"
})
$('#three').click(function(){
inputValue.value+="3"
})
$('#four').click(function(){
inputValue.value+="4"
})
$('#five').click(function(){
inputValue.value+="5"
})
$('#six').click(function(){
inputValue.value+="6"
})
$('#seven').click(function(){
inputValue.value+="7"
})
$('#eight').click(function(){
inputValue.value+="8"
})
$('#nine').click(function(){
inputValue.value+="9"
})
$('#subtract').click(function(){
    inputValue.value += '-'; 
   
})
$('#pluse').click(function(){
inputValue.value +='+' 
})
$('#multi').click(function(){
inputValue.value +='*' 
})
$('#divided').click(function(){
inputValue.value +='/' 
})
$('#dot').click(function(){
inputValue.value +='.' 
})

$('#equal').click(function(){
   var result= eval(inputValue.value);
  inputValue.value =result;
})
$('#AC').click(function(){

inputValue.value=""
})
$('#DE').click(function(){
    var de= inputValue.value;
    var result= de.slice(0,-1);
    inputValue.value=result;
})
