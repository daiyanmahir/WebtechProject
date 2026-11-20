let items=document.getElementById('btn2');
let users=document.getElementById('btn3');
let complaints=document.getElementById('btn4');
let logout=document.getElementById('btn5')

let items2=document.getElementById('viewallitemsbtn');
let users2=document.getElementById('viewalluserbtn');
let complaints2=document.getElementById('viewallcomplaintbtn');


// go to item page2
items2.addEventListener('click',function(){
    window.location.href='adminitem.html';
})
// go to user page2
users2.addEventListener('click',function(){
    window.location.href='adminuser.html';
})
// go to complaint page2
complaints2.addEventListener('click',function(){
    window.location.href='admincomplaint.html';
})

// go to item page
items.addEventListener('click',function(){
    window.location.href='adminitem.html';
})
// go to user page
users.addEventListener('click',function(){
    window.location.href='adminuser.html';
})
// go to complaint page
complaints.addEventListener('click',function(){
    window.location.href='admincomplaint.html';
})
// logout
logout.addEventListener('click',function(){
    window.location.href='login.html';
})