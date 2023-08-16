// import { user } from "./script.js";

let dashboardWelcome = document.getElementById("welcome");
// dashboardWelcome.innerHTML = `<h1 class="dashboard-welcome"> Welcome, ${user.username}! <h1>`;


// Get the welcome div and the logout button
let welcomeDiv = document.getElementById("welcome");
let logoutBtn = document.getElementById("logout-btn");

// Get the current user information from localStorage
let user = JSON.parse(localStorage.getItem("CU"));

// If there is no current user, redirect to the login page
if (!user) {
    window.location.href = "index.html";
  }

// Display the welcome message with the current user's name
dashboardWelcome.innerHTML = `Welcome <strong>${user.username}</strong>, Kindly fill appropriately to generate and recharge your Airtime`;

let display = document.getElementById('airtimeGenerated');
let network = document.getElementById("netWork");
let price = document.getElementById("amount");
let recharge = document.getElementById("recharge")
let randomNumber = Math.floor(Math.random() * 1000000000000000);
let usedRandomNumbers = []; // Array to store used generated random numbers


// Airtime Recharge Function

function generateAirtime() {
    if (network.value === 'none' && price.value === 'empty') {
        alert('Plaese select a network provider and airtime amount');
    } 
    else if 
     (network.value === 'none') {
            alert('Plaese select a network provider');
    } 
    else if (price.value === 'empty') {
        alert('Plaese select an Airtime amount');
} 
    else {
        display.value = randomNumber

    }  
}

function loadAirtime() {
    if (network.value === "mtn" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        if (usedRandomNumbers.includes(display.value)) {
            alert('Airtime has already been used');
        } else {
            alert("#" + amount.value + " " + network.value.toUpperCase() + " Recharge is Successful");
            usedRandomNumbers.push(display.value);
        }
    } else if (network.value === "mtn" && recharge.value.startsWith('*311*') != '*311*' && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert("Invalid Recharge Code");
    } else if (network.value === "mtn" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) != randomNumber && recharge.value.endsWith('#')) {
        alert("Invalid Recharge Pin");
    } else if (network.value === "glo" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        if (usedRandomNumbers.includes(display.value)) {
            alert('Airtime has already been used');
        } else {
            alert("#" + amount.value + " " + network.value.toUpperCase() + " Recharge is Successful");
            usedRandomNumbers.push(display.value);
        }
    } else if (network.value === "glo" && recharge.value.startsWith('*311*') != '*311*' && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert("Invalid Recharge Code");
    } else if (network.value === "glo" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) != randomNumber && recharge.value.endsWith('#')) {
        alert("Invalid Recharge Pin");
    } else if (network.value === "airtel" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        if (usedRandomNumbers.includes(display.value)) {
            alert('Airtime has already been used');
        } else {
            alert("#" + amount.value + " " + network.value.toUpperCase() + " Recharge is Successful");
            usedRandomNumbers.push(display.value);
        }
    } else if (network.value === "airtel" && recharge.value.startsWith('*311*') != '*311*' && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert("Invalid Recharge Code");
    } else if (network.value === "airtel" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) != randomNumber && recharge.value.endsWith('#')) {
        alert("Invalid Recharge Pin");
    } else if (network.value === "9mobile" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        if (usedRandomNumbers.includes(display.value)) {
            alert('Airtime has already been used');
        } else {
            alert("#" + amount.value + " " + network.value.toUpperCase() + " Recharge is Successful");
            usedRandomNumbers.push(display.value);
        }
    } else if (network.value === "9mobile" && recharge.value.startsWith('*311*') != '*311*' && recharge.value.includes(randomNumber) && recharge.value.endsWith('#')) {
        alert("Invalid Recharge Code");
    } else if (network.value === "9mobile" && recharge.value.startsWith('*311*') && recharge.value.includes(randomNumber) != randomNumber && recharge.value.endsWith('#')) {
        alert("Invalid Recharge Pin");
    } else {
        alert("Recharge failed");
    }
}


// function loadAirtime(params) {
    
// }

