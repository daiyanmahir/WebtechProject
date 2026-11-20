let dashboard=document.getElementById('btn1');
let items=document.getElementById('btn2');
let complaints=document.getElementById('btn4');
let logout=document.getElementById('btn5')

// got to dashboard page
dashboard.addEventListener('click',function(){
    window.location.href='admindashboard.html';
})
// got to item page
items.addEventListener('click',function(){
    window.location.href='adminitem.html';
})
// got to complaint page
complaints.addEventListener('click',function(){
    window.location.href='admincomplaint.html';
})
// logout
logout.addEventListener('click',function(){
    window.location.href='login.html';
})

//Search
let searchbutton = document.getElementById('searchuser');
let searchinput = document.getElementById('searchinput');

searchbutton.addEventListener('click',searchUser);
searchinput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {
        searchUser();
    }
});

function searchUser() {

searchinput = document.getElementById('searchinput');
let rows = document.querySelectorAll('#usertablebody tr');

    let searchvalue = searchinput.value.toLowerCase();
    
    //Temporary variables 
    let id='008';
    let name='Siam';
    let email='siam@gmail.com';
    let date='12 nov';
    let status='Suspend'
    if(status.toLowerCase==="suspend"){
        status.style.backgoroundColor='red';
    }
        
    
    if (searchvalue === "") {
        return;
    }

    if(searchvalue===name.toLowerCase()){
    rows[0].innerHTML =
        "<td>" + id + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + email + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + status + "</td>" +
        "<td class='itemaction'>" +
            "<button class='userviewbtn'>View</button>" +
        "</td>";
         rows[0].style.color = "black";

    }
    else{

        rows[0].innerHTML = "<td colspan='5'>No User Found</td>";
        rows[0].style.color = "red";
    }

    }

//View
let userviewbtn=document.querySelector('.userviewbtn');
let viewuserbackground = document.getElementById("viewuserbackground");
let canceledituser = document.getElementById("canceledituser");

userviewbtn.addEventListener('click', function() {

    viewuserbackground.style.display = "flex";
});

canceledituser.addEventListener('click', function() {

    viewuserbackground.style.display = "none";

});


//Add Item
let adduser = document.getElementById("adduser");
let adduserbtn = document.getElementById("adduserbtn");
let adduserbackground = document.getElementById("adduserbackground");
let canceluser = document.getElementById("canceluser");

adduserbtn.addEventListener('click', function() {

    adduserbackground.style.display = "flex";

});

canceluser.addEventListener('click', function() {

    adduserbackground.style.display = "none";

});

//submit form will be done later

//Remove
let removebutton= document.querySelector(".userremovebtn");
let popupbackground = document.getElementById("popupbackground");
let cancelremove = document.getElementById("cancelremove");
let confirmremove = document.getElementById("confirmremove");

removebutton.addEventListener('click',function(){
    popupbackground.style.display="flex";
});

cancelremove.addEventListener('click',function(){
 popupbackground.style.display="none";
});


