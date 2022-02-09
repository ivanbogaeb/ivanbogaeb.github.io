window.onload = function(){

    // Variables
    const languages = document.getElementsByClassName("language");
    const menu = document.getElementsByClassName("menu")[0];
    const mainMenu = document.getElementsByClassName("main-menu")[0];
    const menuItems = document.getElementsByClassName("menu-items")[0];
    const menuItem = [...document.getElementsByClassName("menu-item")];
    const menuClose = document.getElementById("menu-close");

    /* EVENT LISTENERS */

    const toggleFunction = function(){
        document.getElementsByTagName("main")[0].classList.toggle("active");
        mainMenu.classList.toggle("open");
        menuItems.classList.toggle("open");
    }

    // Menu event listener for opening and closing
    menu.addEventListener("click", toggleFunction);
    // Menu event listener to close it from the X button
    menuClose.addEventListener("click", toggleFunction);
    // Reading menu options and scrolling
    menuItem.forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault();
            let attribute = this.getAttribute('href');
            toggleFunction();
            setTimeout(function(){
                document.querySelector(attribute).scrollIntoView({behavior: 'smooth'});
            },550);
        });
    })
    // Language selection toggle
    for(let i = 0; i < languages.length; i++){
        languages[i].addEventListener("click", function(){
            languages[1].classList.toggle("language-selected");
            languages[0].classList.toggle("language-selected");
        });
    }
};