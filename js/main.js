window.onload = () => {
    const burgerMenuBTN = document.querySelector(".burger-menu");
    const headerMenu = document.querySelector(".menu");

    burgerMenuBTN.addEventListener("click", () => {
        let activeBurgerIcon = document.querySelector(".burger-menu__icon[data-active='true']");
        let notActiveBurgerIcon = document.querySelector(".burger-menu__icon[data-active='false']");

        activeBurgerIcon.style.display = "none";
        notActiveBurgerIcon.style.display = "block";

        activeBurgerIcon.dataset.active = "false";
        notActiveBurgerIcon.dataset.active = "true";

        if (burgerMenuBTN.dataset.active == "false") {
            headerMenu.style.display = "flex";
            burgerMenuBTN.dataset.active = "true";
        } else {
            headerMenu.style.display = "none";
            burgerMenuBTN.dataset.active = "false";
        };
    });
};