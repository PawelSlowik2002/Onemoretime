window.onload = () => {

const navigationButton = document.querySelector(".navigation__button--js");

navigationButton.addEventListener("click" , handleClick);

function handleClick() {
    const navigationList = document.querySelector(".navigation__list")
    navigationList.classList.toggle(".navigation__list--visible");
}
}
