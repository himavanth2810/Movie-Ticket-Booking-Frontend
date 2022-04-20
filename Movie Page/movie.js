const body = document.querySelector("body");
const container= document.querySelector(".container-2");
const logout= document.querySelector(".logout");
const input = document.querySelector("input");
const poster3 = document.querySelector(".poster3");

window.addEventListener("load", () => {
    body.classList.add("visible");
});

const token = localStorage.getItem("jwt");

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

poster3.addEventListener('click', function(){
    alert("Movie Coming Soon In Theatres.....");
});

const card1= document.querySelector('.card-1-inner');

card1.addEventListener('click', function() {
    card1.classList.toggle('is-flipped');
});

const card2= document.querySelector('.card-2-inner');

card2.addEventListener('click', function() {
    card2.classList.toggle('is-flipped');
});

const card3= document.querySelector('.card-3-inner');

card3.addEventListener('click', function() {
    card3.classList.toggle('is-flipped');
});

const card4= document.querySelector('.card-4-inner');

card4.addEventListener('click', function() {
    card4.classList.toggle('is-flipped');
});

const card5= document.querySelector('.card-5-inner');

card5.addEventListener('click', function() {
    card5.classList.toggle('is-flipped');
});

const card6= document.querySelector('.card-6-inner');

card6.addEventListener('click', function() {
    card6.classList.toggle('is-flipped');
});

const card7= document.querySelector('.card-7-inner');

card7.addEventListener('click', function() {
    card7.classList.toggle('is-flipped');
});


const card8= document.querySelector('.card-8-inner');

card8.addEventListener('click', function() {
    card8.classList.toggle('is-flipped');
});


const card9= document.querySelector('.card-9-inner');

card9.addEventListener('click', function() {
    card9.classList.toggle('is-flipped');
});