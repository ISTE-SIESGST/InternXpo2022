//SMTP

let email = "";
let fname = "";
let phone = "";
let fmessage = "";

document.querySelector("form.myform").addEventListener("submit", function (e) {
  email = document.getElementById("email").value;
  fname = document.getElementById("fname").value;
  phone = document.getElementById("phone").value;
  fmessage = document.getElementById("message").value;

  //prevent the normal submission of the form
  e.preventDefault();

  console.log(fmessage + fname + phone + email);

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: email ,
    Subject: "New Registration",
    Body: "Name: " + fname + "<br> Email: " + email + "<br> Phone no: " + phone + "<br> Message: " + fmessage ,
  }).then((message) => alert(message + "Details Sent Successfully !"));

});

// SCROLL-EFFECT

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop(),
      dh = $(document).height(),
      wh = $(window).height();
    let scrollpercent = (scroll / (dh - wh)) * 100;
    $("#progressbar").css("height", scrollpercent + "%");
  });
});

// SCROLL-NAVBARBG
$(document).ready(function () {
  var $navbar = $("nav");
  $(window).scroll(function () {
    var current = $(this).scrollTop();
    if (current > 0) {
      $navbar.addClass("active-scroll");
    } else {
      $navbar.removeClass("active-scroll");
    }
  });
});

// PRELOADER

var loader = document.getElementById("loading");

function preloader() {
  loader.style.display = "none";
}

// MOBILE-NAVIGATION

function toggle() {
  var sec = document.getElementById("sec");
  var nav = document.getElementById("navigation");
  sec.classList.toggle("active");
  nav.classList.toggle("active");
}

// RIPPLE EFFECT

const btn = document.querySelector(".active");
btn.onmousemove = function (e) {
  const x = e.pageX - btn.offsetLeft;
  const y = e.pageY - btn.offsetTop;

  btn.style.setProperty("--x", x + "px");
  btn.style.setProperty("--y", y + "px");
};

// TIMER

const days = document.getElementById("days");
const hours = document.getElementById("Hours");
const minutes = document.getElementById("Minutes");
const seconds = document.getElementById("Seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`November 20 ${currentYear} 00:00:00`);

function updateTimer() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateTimer, 1000);

//SMTP-FORM

// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "rajpawa2944@gmail.com",
//     Password: "#raj29112002",
//     To: "avadark2944@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "New Entry",
//     Body:
//       "Name: " +
//       document.getElementById("name").value +
//       "<br> Email: " +
//       document.getElementById("email").value +
//       "<br> Phone no: " +
//       document.getElementById("phone").value +
//       "<br> Message: " +
//       document.getElementById("message").value,
//   }).then((message) => alert("Details Send Succesfully!"));
// }
