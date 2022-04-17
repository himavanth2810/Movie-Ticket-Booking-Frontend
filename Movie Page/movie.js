const body = document.querySelector("body");
const container= document.querySelector(".container-2");
const input = document.querySelector("input");
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

window.addEventListener("load", () => {
    body.classList.add("visible");
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

document.querySelector(".logout").addEventListener("click",function(){
    location.href = "/index.html";
})