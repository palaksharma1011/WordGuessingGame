let settingicon = document.querySelector('.setting');
let settingMenu = document.querySelector('.setting-menu');
let closebtn=document.querySelector("#close");

settingicon.addEventListener('click', function() {
    console.log('settingicon clicked');
    settingicon.classList.add('spin');
    settingMenu.style.visibility = 'visible';

});
closebtn.addEventListener('click', function() {
    console.log('settingicon clicked');
    settingicon.classList.remove('spin');
    settingMenu.style.visibility = 'hidden';
});


let restartbtn=document.querySelector("#restartbtn");

restartbtn.addEventListener("click",function(){
    window.location.reload();;
})

