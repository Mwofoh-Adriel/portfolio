var savedTheme = localStorage.getItem('theme');
if(savedTheme){
    document.body.className = savedTheme;
    var icon = document.querySelector('#theme-switcher i');
    if(savedTheme === 'light-mode'){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    else{
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

document.getElementById('theme-switcher').addEventListener('click', function() {
    var body = document.body;
    var icon = document.querySelector('#theme-switcher i');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    // Save the theme to local storage
    localStorage.setItem('theme', body.className);
});
window.onload = function(){
    var body = document.body;
    var dot = document.getElementsByClassName('dot');
    dot[0].classList.add('visible');
    if(!localStorage.getItem('theme')){
        body.classList.add('light-mode');
    }
};


