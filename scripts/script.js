// JavaScript Document
console.log("hi");

var MenuButton = document.querySelector("header button:first-of-type");
var NavEl = document.querySelector('nav');
var SluitButton = document.querySelector('nav div button')

var LeftButtonGamepass = document.querySelector('article:nth-of-type(4) article:first-of-type div ul li:first-of-type')
var RightButtonGamepass = document.querySelector('article:nth-of-type(4) article:first-of-type div ul li:last-of-type')
var Gamepass = document.querySelector('article:nth-of-type(4) article:last-of-type')

var LeftButtonDiscover = document.querySelector('article:nth-of-type(4) article:last-of-type div ul li:first-of-type')
var RightButtonDiscover = document.querySelector('article:nth-of-type(4) article:last-of-type div ul li:last-of-type')
var Discover = document.querySelector('article:nth-of-type(4) article:first-of-type')

var CheckedButton = document.querySelector('input:first-of-type')

MenuButton.addEventListener("click", OpenMenu);
SluitButton.addEventListener("click", SluitMenu);

LeftButtonGamepass.addEventListener("click", VorigElement);
RightButtonGamepass.addEventListener("click", VolgendElement);
LeftButtonDiscover.addEventListener("click", VorigElement);
RightButtonDiscover.addEventListener("click", VolgendElement);

function OpenMenu() {
    NavEl.classList.add('ToonMenu')
}

function SluitMenu() {
    NavEl.classList.remove('ToonMenu')
}

function VorigElement(){
    Gamepass.classList.toggle('next')
    
}

function VolgendElement(){
    Gamepass.classList.toggle('next')
}

