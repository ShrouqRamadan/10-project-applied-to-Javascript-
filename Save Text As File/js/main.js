var text =document.querySelector('textarea');
var saveBtn =document.getElementById('saveText');
var selectFile =document.getElementById('select-file');
var fileName =document.getElementById('file-name');
var alertError =document.querySelector('.alert')

saveBtn.addEventListener('click',function(){
    if(text.value==""){
text.classList.add('error');
alertError.classList.remove('d-none');
    }

    else if(fileName.value==""){
        fileName.classList.add('error');
        alertError.classList.remove('d-none');
        alertError.innerHTML="Enter File Name"


    }
    else{
        alertError.classList.add('d-none');
        text.classList.remove('error');
        fileName.classList.remove('error');
        var blob = new Blob([text.value] , {type: selectFile.value});
        var urlBlob=URL.createObjectURL(blob)
        var link =document.createElement('a');
        link.download=fileName.value;
        link.setAttribute('href', urlBlob);
        link.click();
        
    }

})
