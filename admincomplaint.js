let dashboard=document.getElementById('btn1');
let items=document.getElementById('btn2');
let users=document.getElementById('btn3');
let logout=document.getElementById('btn5')

// got to dashboard page
dashboard.addEventListener('click',function(){
    window.location.href='admindashboard.html';
})
// got to user page
users.addEventListener('click',function(){
    window.location.href='adminuser.html';
})
// got to item page
items.addEventListener('click',function(){
    window.location.href='admincomplaint.html';
})
// logout
logout.addEventListener('click',function(){
    window.location.href='login.html';
})

//Search
let searchbutton = document.getElementById('searchcomplaint');
let searchinput = document.getElementById('searchinput');

searchbutton.addEventListener('click',searchComplaint);
searchinput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {
        searchComplaint();
    }
});

function searchComplaint() {

 searchinput = document.getElementById('searchinput');
let rows = document.querySelectorAll('#complainttablebody tr');

    let searchvalue = searchinput.value.toLowerCase();
    
    //Temporary variables 
    let id='9302';
    let user='Hamid';
    let subject='Account issue';
    let date='12 nov';
    let status='Resolved'
    
    if (searchvalue === "") {
        return;
    }

    if(searchvalue===user.toLowerCase()){
    rows[0].innerHTML =
        "<td>" + id + "</td>" +
        "<td>" + user + "</td>" +
        "<td>" + subject + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + status + "</td>" +
        "<td class='complaintaction'>" +
            "<button class='complaintviewbtn'>View</button>" +
        "</td>";
         rows[0].style.color = "black";

    }
    else{

        rows[0].innerHTML = "<td colspan='5'>No Complaints Found</td>";
        rows[0].style.color = "red";
    }

    }

//View
let complaintviewbtn=document.querySelector('.complaintviewbtn');
let viewcomplaintbackground = document.getElementById("viewcomplaintbackground");
let cancelresolvecomplaint = document.getElementById("cancelresolvecomplaint");

complaintviewbtn.addEventListener('click', function() {

    viewcomplaintbackground.style.display = "flex";
});

cancelresolvecomplaint.addEventListener('click', function() {

    viewcomplaintbackground.style.display = "none";

});

//Add Complaint

let addcomplaintbtn = document.getElementById("addcomplaintbtn");
let addcomplaintbackground = document.getElementById("addcomplaintbackground");
let cancelcomplaint = document.getElementById("cancelcomplaint");

addcomplaintbtn.addEventListener('click', function() {

    addcomplaintbackground.style.display = "flex";

});

cancelcomplaint.addEventListener('click', function() {

    addcomplaintbackground.style.display = "none";

});

//submit form will be done later

//Remove
let complaintremovebtn=document.querySelector(".complaintremovebtn")
let popupbackground = document.getElementById("popupbackground");
let cancelremove = document.getElementById("cancelremove");
let confirmremove = document.getElementById("confirmremove");

complaintremovebtn.addEventListener('click',function(){
    popupbackground.style.display="flex";
});

cancelremove.addEventListener('click',function(){
 popupbackground.style.display="none";
});


