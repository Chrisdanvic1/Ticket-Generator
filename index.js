const inputEmail = document.getElementById("inputEmail");
const inputGithub = document.getElementById("inputGithub");
const inputName = document.getElementById("inputName");
const fullName = document.getElementById("fullName");
let fullName2 = document.getElementById("fullName2");
const fullEmail = document.getElementById("fullEmail");
const fullGithub = document.getElementById("fullGithub");
const btn = document.getElementById("inputsBtn");
const msg = document.getElementById("nameError");
const eMsg = document.getElementById("emailError");
const gMsg = document.getElementById("gitError");
const inputBox = inputName.parentElement;
const inputBoxE = inputEmail.parentElement;
const inputBoxG = inputGithub.parentElement;
const container = document.getElementById("container");
const container1 = document.getElementById("container1");
const randomNum = document.getElementById("randomNum");

btn.onclick = function () {
  const min = 100000;
  const max = 999999;
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  const value = inputName.value.trim();
  const emailValue = inputEmail.value.trim();
  const githubValue = inputGithub.value.trim();

  let isNameValid = false;
  let isEmailValid = false;
  let isGithubValid = false;

  msg.textContent = "";
  eMsg.textContent = "";
  gMsg.textContent = "";

  const forbidden = ["@", ",", " ", "_", "."];
  const hasForbidden = forbidden.some((char) => githubValue.includes(char));

  inputBox.classList.remove("error", "success", "shake");
  inputBoxE.classList.remove("error", "success", "shake");
  inputBoxG.classList.remove("error", "success", "shake");
  // msg.classList.remove("show");
  // eMsg.classList.remove("show");
  // gMsg.classList.remove("show");

  if (value === "") {
    msg.textContent = "Please enter your full name.";
    inputBox.classList.add("error", "shake");
    msg.classList.add("show");
  } else if (value.length < 8) {
    msg.textContent = "Full name must be at least 8 characters long.";
    inputBox.classList.add("error", "shake");
    msg.classList.add("show");
  } else if (value.length > 15) {
    msg.textContent = "Full name must cannot be more than 15 characters";
    inputBox.classList.add("error", "shake");
    msg.classList.add("show");
  } else {
    inputBox.classList.add("success");
    fullName.textContent = value;
    fullName2.textContent = fullName.textContent;
    isNameValid = true;
  }

  if (emailValue === "") {
    eMsg.textContent = "Please enter a valid email address";
    inputBoxE.classList.add("error", "shake");
    eMsg.classList.add("show");
  } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
    eMsg.textContent = "Please enter a valid email address";
    inputBoxE.classList.add("error", "shake");
    eMsg.classList.add("show");
  } else {
    inputBox.classList.add("success");
    fullEmail.textContent = emailValue;
    isEmailValid = true;
  }

  if (githubValue === "") {
    gMsg.textContent = "Please enter your GitHub username";
    inputBoxG.classList.add("error", "shake");
    gMsg.classList.add("show");
  } else if (hasForbidden) {
    gMsg.textContent = "Please enter your GitHub username";
    inputBoxG.classList.add("error", "shake");
    gMsg.classList.add("show");
  } else {
    isGithubValid = true;
    fullGithub.textContent = "@" + githubValue;
    inputBoxG.classList.add("success");
  }

  if (isNameValid && isEmailValid && isGithubValid) {
    container.style.display = "none";
    container1.style.display = "block";
    randomNum.textContent = "#" + random;
  } else {
    container.style.display = "block";
    container1.style.display = "none";
  }
};
