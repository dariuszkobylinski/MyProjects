document.addEventListener("DOMContentLoaded", () => {
    let activeMenuElement=document.querySelectorAll(".classLinkHref");
    // console.log(activeMenuElement);
    activeMenuElement[3].style.color="darkorange";

    let contactBox=document.querySelectorAll(".pClassContactDetail");
    console.log(contactBox);
    contactBox[0].style.fontSize="26px";
    contactBox[3].style.fontSize="26px";
    contactBox[4].style.fontSize="26px";
    // contactBox[5].style.fontSize="26px";
    contactBox[7].style.fontSize="26px";

});