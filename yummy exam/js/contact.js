const nav_width = $("nav").outerWidth();
const white_bar_width = $(".white_bar").outerWidth();
const xmark = $(".bars");
const bars = $(".bars");
const _name = $("#name");
const mail = $("#mail");
const phone = $("#phone");
const age = $("#age");
const password = $("#password");
const Repassword = $("#Repassword");
let bool;
const age_pattern = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;

const phone_pattern = /^01[0-2,5]{1}[0-9]{8}$/;

//   /^\+?(\d{1,3})?[-.\s]?(\d{1,4})?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;

const name_pattern = /^[A-Za-z]+$/;

const pass_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

Repassword.keyup(function () {
  if (password.val() != Repassword.val()) {
    $(".repassword").fadeIn(500);
  } else {
    $(".repassword").fadeOut(500);
  }
  if (
    password.val() == Repassword.val() &&
    age_pattern.test(age.val()) == true &&
    pass_pattern.test(password.val()) == true &&
    email_pattern.test(mail.val()) == true &&
    name_pattern.test(_name.val()) == true &&
    phone_pattern.test(phone.val()) == true
  ) {
    $(".btn").removeClass("disabled");
  } else {
    $(".btn").addClass("disabled");
  }
});

age.keyup(function () {
  bool = age_pattern.test(age.val());
  if (bool == false) {
    $(".age").fadeIn(500);
  } else {
    $(".age").fadeOut(500);
  }

  if (
    password.val() == Repassword.val() &&
    age_pattern.test(age.val()) == true &&
    pass_pattern.test(password.val()) == true &&
    email_pattern.test(mail.val()) == true &&
    name_pattern.test(_name.val()) == true &&
    phone_pattern.test(phone.val()) == true
  ) {
    $(".btn").removeClass("disabled");
  } else {
    $(".btn").addClass("disabled");
  }
});

password.keyup(function () {
  bool = pass_pattern.test(password.val());
  if (bool == false) {
    $(".password").fadeIn(500);
  } else {
    $(".password").fadeOut(500);
  }

  if (
    password.val() == Repassword.val() &&
    age_pattern.test(age.val()) == true &&
    pass_pattern.test(password.val()) == true &&
    email_pattern.test(mail.val()) == true &&
    name_pattern.test(_name.val()) == true &&
    phone_pattern.test(phone.val()) == true
  ) {
    $(".btn").removeClass("disabled");
  } else {
    $(".btn").addClass("disabled");
  }
});

phone.keyup(function () {
  bool = phone_pattern.test(phone.val());
  if (bool == false) {
    $(".phone").fadeIn(500);
  } else {
    $(".phone").fadeOut(500);
  }

  if (
    password.val() == Repassword.val() &&
    age_pattern.test(age.val()) == true &&
    pass_pattern.test(password.val()) == true &&
    email_pattern.test(mail.val()) == true &&
    name_pattern.test(_name.val()) == true &&
    phone_pattern.test(phone.val()) == true
  ) {
    $(".btn").removeClass("disabled");
  } else {
    $(".btn").addClass("disabled");
  }
});

_name.keyup(function () {
  bool = name_pattern.test(_name.val());
  if (bool == false) {
    $(".name").fadeIn(500);
  } else {
    $(".name").fadeOut(500);
  }

  if (
    password.val() == Repassword.val() &&
    age_pattern.test(age.val()) == true &&
    pass_pattern.test(password.val()) == true &&
    email_pattern.test(mail.val()) == true &&
    name_pattern.test(_name.val()) == true &&
    phone_pattern.test(phone.val()) == true
  ) {
    $(".btn").removeClass("disabled");
  } else {
    $(".btn").addClass("disabled");
  }
});

mail.keyup(function () {
  bool = email_pattern.test(mail.val());
  if (bool == false) {
    $(".mail").fadeIn(500);
  } else {
    $(".mail").fadeOut(500);
  }

  if (
    password.val() == Repassword.val() &&
    age_pattern.test(age.val()) == true &&
    pass_pattern.test(password.val()) == true &&
    email_pattern.test(mail.val()) == true &&
    name_pattern.test(_name.val()) == true &&
    phone_pattern.test(phone.val()) == true
  ) {
    $(".btn").removeClass("disabled");
  } else {
    $(".btn").addClass("disabled");
  }
});

if (window.innerWidth >= "400" && window.innerWidth <= "700") {
  $("nav").animate({ left: "-24%" }, 600);
  //   console.log("hello");
}

$(".fa-xmark ").on("click", function () {
  // $(".bars_xmark").removeClass("d-none");
  $(".bars").removeClass("d-none");
  $(".xmark").addClass("d-none");
  $("nav").animate({ left: -nav_width + white_bar_width }, 600);
  $("nav ul li").animate({ top: "300px" }, 1000);

  if (window.innerWidth <= "600") {
    $("nav").animate({ left: "-31%" }, 600);
    // console.log("hello");
  }
});

$(".fa-bars").on("click", function () {
  $("nav").animate({ left: 0 }, 600);

  if (window.innerWidth >= "400" && window.innerWidth <= "700") {
    $("nav").animate({ width: "38%" }, 600);
    console.log("hello");
  }

  $(".bars").addClass("d-none");
  $(".xmark").removeClass("d-none");
  $("nav ul li").eq(0).animate({ top: 0 }, 700);
  $("nav ul li").eq(1).animate({ top: 0 }, 800);
  $("nav ul li").eq(2).animate({ top: 0 }, 900);
  $("nav ul li").eq(3).animate({ top: 0 }, 1000);
  $("nav ul li").eq(4).animate({ top: 0 }, 1100);
  $("nav ul li").eq(5).animate({ top: 0 }, 1200);
});
