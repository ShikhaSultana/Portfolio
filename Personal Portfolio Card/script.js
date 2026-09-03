// ============================
// CONTACT BUTTON
// ============================

const contactBtn = document.getElementById("contactBtn");

const contactInfo = document.getElementById("contactInfo");


contactBtn.addEventListener("click", function () {

    contactInfo.classList.toggle("show");


    if (contactInfo.classList.contains("show")) {

        contactBtn.textContent = "Hide Contact Information";

    } else {

        contactBtn.textContent = "Show Contact Information";

    }

});


// ============================
// DARK / LIGHT MODE
// ============================

const themeBtn = document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});