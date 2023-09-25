const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navItem = document.querySelectorAll(".nav__item"),
    header = document.getElementById("header");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeIcon();
});

navItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (navMenu.classList.contains("nav__menu--open")) {
            navMenu.classList.remove("nav__menu--open");
        }
        changeIcon();
    });
});

function changeIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

function sendmail() {
    let email = document.getElementById("sender_email");
    let name = document.getElementById("sender_name");
    let sub = document.getElementById("subject");
    let msg = document.getElementById("msg");
    let submit = document.getElementById("email_btn");
    submit.addEventListener("click", () => {
        if (email.value == "" || name.value == "" || sub.value == "" || msg.value == "") {
            error();
        } else {
            sendEmail();
            alert("Message sent successfully!")
            let form = document.getElementById("formm");
            form.reset();
        }
    });
}
sendmail();
function error() {
    alert("Please fill all the details");
}
function sendEmail() {
    var templateParams = {
        from_name: document.getElementById("sender_name").value,
        sub: document.getElementById("subject").value,
        mesg: document.getElementById("msg").value,
        from_email: document.getElementById("sender_email").value,
    };

    emailjs.send("service_cpgpyxl", "template_472vvle", templateParams).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
            console.log("FAILED...", error);
        }
    );
}


