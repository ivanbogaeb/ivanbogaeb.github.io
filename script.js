window.onload = function(){

    // Variables
    const languages = document.getElementsByClassName("language");
    const menu = document.getElementsByClassName("menu")[0];
    const mainMenu = document.getElementsByClassName("main-menu")[0];
    const menuItems = document.getElementsByClassName("menu-items")[0];
    const menuItem = [...document.getElementsByClassName("menu-item")];
    const menuClose = document.getElementById("menu-close");

    const home = {
        single: document.getElementById("main-animated-text-container").children[0].children[1],
        multiple: document.getElementById("main-animated-text-container").children[0].children[0],
        container: document.getElementById("main-animated-text-container").children[0],
        textArray: ['UNIQUE', 'VISUALLY STUNNING', 'BRILLIANT', 'FUTURE PROOF', 'OPTIMIZED', 'POWERFUL', 'DESIGN DRIVEN', 'REFRESHING', 'USER CENTRIC'],
        animationControl: {
            frame: 0,
            debouceResize: setTimeout,
        }
    };

    function homeAnimationController() {

        function fillHomeAnimation() {
            window.clearTimeout(home.animationControl.debouceResize);
            home.animationControl.debouceResize = setTimeout(() => {
                let amountMultipleText = Math.round(window.innerWidth / home.single.clientWidth) * 2;
                amountMultipleText = Math.abs(amountMultipleText % 2) === 1 ? Math.round(amountMultipleText) : Math.round(amountMultipleText) + 1
                home.multiple.innerHTML = (`<span>${home.single.textContent}</span>`).repeat(amountMultipleText);
            }, 250);
        };

        home.container.addEventListener("animationend", () => {
            if (home.animationControl.frame < 4){
                if (home.animationControl.frame === 3){
                    let textOffset = home.textArray.indexOf(home.single.textContent);
                    home.single.innerHTML = textOffset + 1 < home.textArray.length ? home.textArray[textOffset+1] : home.single.innerHTML = home.textArray[0];
                    fillHomeAnimation();
                    setTimeout(() => {
                        home.container.className = "";
                        setTimeout(() => {
                            home.container.className = "animate";
                        }, 500);
                    }, 1500);
                };
                home.animationControl.frame++
            } else {
                home.animationControl.frame = 0;
            };
        }, false);

        
        window.addEventListener("resize", fillHomeAnimation);

        fillHomeAnimation();
        home.container.className = "animate";

    };

    homeAnimationController();

    /* EVENT LISTENERS */

    /*const toggleFunction = function(){
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
    }*/

    
};