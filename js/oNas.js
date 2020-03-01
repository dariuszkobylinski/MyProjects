document.addEventListener("DOMContentLoaded", () => {
    let activeMenuElement=document.querySelectorAll(".classLinkHref");
    // console.log(activeMenuElement);
    activeMenuElement[0].style.color="darkorange";

    let h2Text=document.querySelector(".h2Text");
    // console.log(h2Text);
    h2Text.style.margin="10px 0px";
    // h2Text.style.marginTop="10px";
    // h2Text.style.marginBottom="10px";
});