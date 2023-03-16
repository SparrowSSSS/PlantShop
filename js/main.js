function bodyClick() {

    function headerBurgerMenu(event) {
        const burgerMenuBTN = document.querySelector(".burger-menu");
        const headerMenu = document.querySelector(".menu");

        function headerMenuOff() {
            headerMenu.style.transform = "scale(0)";
            burgerMenuBTN.dataset.active = "false";
        };

        function headerMenuOnn() {
            headerMenu.style.transform = "scale(1)"
            burgerMenuBTN.dataset.active = "true";
        };

        if (burgerMenuBTN.dataset.active == "true" & document.documentElement.clientWidth <= 769) {
            headerMenuOff();

            let menuXmarkIcon = document.querySelector(".burger-menu__icon._xmark");
            let menuBurgerIcon = document.querySelector(".burger-menu__icon._hamburger");

            menuXmarkIcon.style.display = "none";
            menuBurgerIcon.style.display = "block";

            menuXmarkIcon.dataset.active = "false";
            menuBurgerIcon.dataset.active = "true";

        } else if (event.target.closest(".burger-menu")) {

            let activeBurgerIcon = document.querySelector(".burger-menu__icon[data-active='true']");
            let notActiveBurgerIcon = document.querySelector(".burger-menu__icon[data-active='false']");

            activeBurgerIcon.style.display = "none";
            notActiveBurgerIcon.style.display = "block";

            activeBurgerIcon.dataset.active = "false";
            notActiveBurgerIcon.dataset.active = "true";

            if (burgerMenuBTN.dataset.active == "false") {
                headerMenuOnn();
            } else {
                headerMenuOff();
            };

        };

    }

    document.body.addEventListener("click", (event) => {
        headerBurgerMenu(event);
    });
};

function headerPlantInfo() {
    const headerPlantInfoContainer = document.querySelector(".header__plant-info-container");

    headerPlantInfoContainer.addEventListener("click", (event) => {
        let btnPlantInfo = event.target;
        if (btnPlantInfo.closest(".plant-info__btn")) {
            let plantInfoBlock = btnPlantInfo.nextElementSibling;

            if (btnPlantInfo.dataset.active == "false") {
                plantInfoBlock.style.transform = "scale(1)";
                btnPlantInfo.dataset.active = "true";
            } else {
                plantInfoBlock.style.transform = "scale(0)";
                btnPlantInfo.dataset.active = "false";
            };
        };
    });
};

function windowResize() {
    function headerMenuResize() {
        const burgerMenuBTN = document.querySelector(".burger-menu");
        const headerMenu = document.querySelector(".menu");

        if (document.documentElement.clientWidth > 769) {
            headerMenu.style.transform = "scale(1)"
        } else if (burgerMenuBTN.dataset.active == "false") {
            headerMenu.style.transform = "scale(0)";
        };

    };

    window.addEventListener('resize', () => {
        headerMenuResize();
    });
}

window.onload = () => {
    bodyClick();
    headerPlantInfo();
    windowResize();
};