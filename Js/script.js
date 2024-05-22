const mobileBtn = document.querySelector(".mobile-btn");
const closeBtn = document.querySelector(".close-menu");
const formBtn = document.querySelector(".form-btn");
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const inputTel = document.querySelector("#inputTel");
const textArea = document.querySelector("#textArea");

// Whatsapp
document.getElementById('whatsapp-button').addEventListener('click', function() {
    var phoneNumber = '5522998495622'; // Replace with your phone number
    var message = 'Hello, I have a query!'; // Customize your default message
    var url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

// Funções

function toggleMenuMobile() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

function closeMenu() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

function Submit() {
    formBtn.preventDefault();
    inputName.innerText = "";
    inputEmail.innerText = "";
    inputTel.innerText = "";
    textArea.innerText = "";
}

// Eventos

mobileBtn.addEventListener("click", toggleMenuMobile);
closeBtn.addEventListener("click", closeMenu);
formBtn.addEventListener("click", Submit);