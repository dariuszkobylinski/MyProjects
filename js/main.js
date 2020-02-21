document.addEventListener("DOMContentLoaded", () => {

    let btnSendEmail=document.querySelector(".classBtn_footer");

    let formInputField=document.querySelector(".message-footer");
    btnSendEmail.addEventListener("click", () => {
        console.log(formInputField);
        console.log("dziłaam");
        if (formInputField.children[1].value==="") {
            formInputField.children[6].style.visibility="visible";
            console.log("brak");
        }
        else {
            formInputField.children[6].style.visibility="hidden";
        }
    });


    let btnBurger = document.querySelector(".burger");
    let pageNavigation = document.querySelector(".classItem");
    console.log(pageNavigation);
    btnBurger.addEventListener("click", () => {
        pageNavigation.classList.toggle("visible");
    });
    pageNavigation.addEventListener("mouseleave", () => {
        pageNavigation.classList.toggle("visible");
    });




});