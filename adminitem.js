let dashboard=document.getElementById('btn1');
let users=document.getElementById('btn3');
let complaints=document.getElementById('btn4');
let logout=document.getElementById('btn5')

// got to item page
dashboard.addEventListener('click',function(){
    window.location.href='admindashboard.html';
})
// got to user page
users.addEventListener('click',function(){
    window.location.href='adminuser.html';
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
let searchbutton = document.getElementById('searchitem');
let searchinput = document.getElementById('searchinput');

searchbutton.addEventListener('click',searchItems);
searchinput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {
        searchItems();
    }
});

function searchItems() {

   searchinput = document.getElementById('searchinput');
let rows = document.querySelectorAll('#itemtablebody tr');

    let searchvalue = searchinput.value.toLowerCase();
    
    //Temporary variables 
    let title='Bike';
    let location='Chittagong';
    let date='12 nov';
    let status='Lost'
    
    if (searchvalue === "") {
        return;
    }

    if(searchvalue===title.toLowerCase()){
    rows[0].innerHTML =
        "<td>" + title + "</td>" +
        "<td>" + location + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + status + "</td>" +
        "<td class='itemaction'>" +
            "<button class='itemviewbtn'>View</button>" +
        "</td>";
         rows[0].style.color = "black";

    }
    else{

        rows[0].innerHTML = "<td colspan='5'>No Items Found</td>";
        rows[0].style.color = "red";
    }

    }

//View
let itemviewbtn=document.querySelector('.itemviewbtn');
let viewitembackground = document.getElementById("viewitembackground");
let canceledititem = document.getElementById("canceledititem");

itemviewbtn.addEventListener('click', function() {

    viewitembackground.style.display = "flex";
});

canceledititem.addEventListener('click', function() {

    viewitembackground.style.display = "none";

});

//Add Item

let additembtn = document.getElementById("additembtn");
let additembackground = document.getElementById("additembackground");
let cancelitem = document.getElementById("cancelitem");

additembtn.addEventListener('click', function() {

    additembackground.style.display = "flex";

});

cancelitem.addEventListener('click', function() {

    additembackground.style.display = "none";

});

//submit form will be done later

//Remove
let itemremovebtn=document.querySelector(".itemremovebtn")
let popupbackground = document.getElementById("popupbackground");
let cancelremove = document.getElementById("cancelremove");
let confirmremove = document.getElementById("confirmremove");

itemremovebtn.addEventListener('click',function(){
    popupbackground.style.display="flex";
});

cancelremove.addEventListener('click',function(){
 popupbackground.style.display="none";
});


