document.addEventListener("DOMContentLoaded", () => {
    let activeMenuElement = document.querySelectorAll(".classLinkHref");
    // console.log(activeMenuElement);
    activeMenuElement[2].style.color = "darkorange";

    let h2TextPricing = document.querySelector(".h2Text");
    console.log(h2TextPricing);
    // h2TextPricing.style.backgroundColor="#F5F5F5";
    h2TextPricing.style.padding = "10px";
    h2TextPricing.style.display = "none";

    let mainPricing = document.querySelector(".mainPricing");
    //mainPricing.style.padding="0px";

});