

var userName=document.getElementById('name')
var userCountry=document.getElementById('country')
var userSalary=document.getElementById('salary')
var userEmail=document.getElementById('email')
// alerts
var alertName=document.getElementById('alertName');
var alertCountry=document.getElementById('alertCountry');
var alertSalary=document.getElementById('alertSalary');
var alertEmail=document.getElementById('alertEmail');
 var allUsers=[];
 
//Storage data
if(localStorage.getItem('addUser')!=null){
    allUsers=JSON.parse(localStorage.getItem('addUser'))
    display()
}
// Function to Add User
function addUser(){
    users={
        name:userName.value,
        country:userCountry.value,
        salary:userSalary.value,
        email:userEmail.value,
    }
    allUsers.push(users)
    localStorage.setItem('addUser',JSON.stringify(allUsers));
    // clearInputs();
    display();
}

// Function Display All User Data

function display(){
    var cartona =``
    for (let i = 0; i < allUsers.length; i++) {
        cartona+=`<tr>
        <td>${allUsers[i].name}</td>
        <td>${allUsers[i].country}</td>
        <td>${allUsers[i].salary}</td>
        <td>${allUsers[i].email}</td>
        <td><button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button></td>
        <td><button class="btn btn-info" onclick="update(${i})">Edit</button></td>
    </tr>`
        
    }
    document.getElementById('userdata').innerHTML=cartona;

}
// function to Delete user by id

function deleteUser(id){
allUsers.splice(id,1);
localStorage.setItem('addUser',JSON.stringify(allUsers));
display()
}

// function to search by name of user

function search(item){
    var cartona =``
    for (let i = 0; i < allUsers.length; i++) {
      if(allUsers[i].name.toUpperCase().includes(item.toUpperCase())==true){
        cartona+=`<tr>
        <td>${allUsers[i].name}</td>
        <td>${allUsers[i].country}</td>
        <td>${allUsers[i].salary}</td>
        <td>${allUsers[i].email}</td>
        <td><button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button></td>
        <td><button class="btn btn-info">Edit</button></td>
    </tr>`  
      }
    document.getElementById('userdata').innerHTML=cartona;
        
    }
}

// function Update Data
var globalItem;
function update(item){
    globalItem=item;
    userName.value=allUsers[item].name;
    userCountry.value = allUsers[item].country;
    userSalary.value=allUsers[item].salary;
    userEmail.value=allUsers[item].email;
    document.getElementById('saveChange').classList.remove('d-none');
    document.getElementById('save').classList.add('d-none');
    document.querySelector('.add-user').classList.remove('d-none')

}

function changeData(){
    allUsers[globalItem].name=userName.value;
    allUsers[globalItem].country=userCountry.value;
    allUsers[globalItem].salary=userSalary.value;
    allUsers[globalItem].email=userEmail.value;
    localStorage.setItem('addUser',JSON.stringify(allUsers));
    document.getElementById('saveChange').classList.add('d-none');
    document.getElementById('save').classList.remove('d-none');
    clearInputs();
    display();
}

// clear inputs
function clearInputs(){
    userName.value="";
    userCountry.value="";
    userSalary.value="";
    userEmail.value="";
}

// Regular Eexpretion
// Regular Eexpretion Of name
function validationName(){
    var regex =/^[A-Z]?[a-z]{3,}/
    
    if(regex.test(userName.value)==true)
    {
    return true;
    }

    else
    {
    return false;

    }
}
// Regular Eexpretion Of country
function validationCountry(){
    var regex =/^[A-Z]?[a-z]{3,}/
    if(regex.test(userCountry.value)==true)
    {
    return true;
    }

    else
    {
    return false;

    }
}
// Regular Eexpretion Of Email
function validationEmail(){
    var regex =/^[A-Z]{0,}[a-z]{0,}?[0-9]{0,}@(yahoo|gmail)\.com$/
    if(regex.test(userEmail.value)==true)
    {
    return true;
    }

    else
    {
    return false;

    }
}


// save buttom
document.getElementById('save').addEventListener('click',function(){ 
    if(userName.value=="" ||userCountry.value==""||userSalary.value==""||userEmail.value==""){
        document.getElementById('alertAll').classList.remove('d-none')
        document.getElementById('alertAll').innerHTML="All inputs is required!"  
    } 
    else if(validationName()==false){
        alertName.classList.remove('d-none')
        alertName.innerHTML="Not match!"  
    }
    else if(validationCountry()==false){
        alertCountry.classList.remove('d-none')
        alertCountry.innerHTML="Not match!"  
    }
    else if(validationEmail()==false){
        alertEmail.classList.remove('d-none')
        alertEmail.innerHTML="Not match! EX:shrouq@gmail.com"  
    }
   
    else{
        alertName.classList.add('d-none')

        document.getElementById('alertAll').classList.add('d-none')
        addUser();

    }

})

// Dark Mode
var darkMode=document.getElementById('darkmode');

darkMode.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    document.querySelector('table').classList.toggle('dark-mode');
    document.querySelector('.dark-mode-btn').classList.toggle('bg-white');
    document.querySelector('.circle').classList.toggle('dark-mode-circle');

})

// Add More User
var addMoreUser= document.querySelector('.add-more-user');
addMoreUser.addEventListener('click',function(){
    document.querySelector('.add-user').classList.remove('d-none')
})

// Cancel
var Cancel= document.querySelector('.Cancel-btn');
Cancel.addEventListener('click',function(){
    document.querySelector('.add-user').classList.add('d-none');
    document.getElementById('saveChange').classList.add('d-none');
    document.getElementById('save').classList.remove('d-none');

    clearInputs();
})
