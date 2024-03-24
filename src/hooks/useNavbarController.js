import { useEffect } from 'react'

const useNavbarController = () => {

    useEffect(() => {

        const home = document.getElementsByTagName('main')[0];
        const footer = document.getElementsByTagName('footer')[0];
        const headerMenuIcon = document.getElementById("menu-header-icon");

        const navbar = {
            container: document.getElementsByTagName('nav')[0],
            animationControl: {
                frame: 0,
                debouceResize: setTimeout,
            }
        };

        function fillNavAnimation() {
            window.clearTimeout(navbar.animationControl.debouceResize);
            navbar.animationControl.debouceResize = setTimeout(() => {
                for (let i = 0; i < navbar.container.children.length; i++){
                    let single = navbar.container.children[i].children[2];
                    let multiple1 = navbar.container.children[i].children[0];
                    let multiple2 = navbar.container.children[i].children[1];
                    let amountMultipleText = Math.round(window.innerWidth / single.clientWidth);
                    amountMultipleText = Math.abs(amountMultipleText % 2) === 1 ? Math.round(amountMultipleText) : Math.round(amountMultipleText);
                    navbar.container.children[i].style.width = `${single.clientWidth}px`;
                    multiple1.innerHTML = (`<span>${single.textContent}</span>`).repeat(amountMultipleText + 2);
                    multiple2.innerHTML = (`<span>${single.textContent}</span>`).repeat(amountMultipleText + 2);
                }
            }, 250);
        };

        function iconClick() {
            navbar.container.classList.toggle('active');
            footer.classList.toggle('hide');
            home.classList.toggle('hide');
            if (headerMenuIcon.classList.contains('active')){
                setTimeout(() => {
                    headerMenuIcon.classList.toggle('active');
                }, 600);
            } else {
                headerMenuIcon.classList.toggle('active');
            };
        }

        headerMenuIcon.addEventListener("click", iconClick);
        window.addEventListener('resize', fillNavAnimation);

        fillNavAnimation();

        return () => {
            headerMenuIcon.removeEventListener("click", iconClick);
            window.removeEventListener('resize', fillNavAnimation);
        }

    }, []);

};

export default useNavbarController;