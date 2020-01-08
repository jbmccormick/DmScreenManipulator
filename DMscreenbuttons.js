// ==UserScript==
// @name         DM Screen Manipulator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://5e.tools/dmscreen.html
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
const buttonsDM = [
    ["Button1","Btn1"],
    ["Button2","Btn2"],
    ["Button3","Btn3"],
];
var divNew = document.createElement('div');
var pageHeader = document.getElementsByClassName("hidden-xs hidden-sm page__header")[0];
    divNew.id = "buttonPaneOne";
var buttonDivOne = document.getElementById("buttonPaneOne");
    pageHeader.insertAdjacentElement("afterend", divNew);
for(let i = 0; i < buttonsDM.length; i++){
	let btnDM = document.createElement('button');
	btnDM.style = "z-index: 1100 !important;"
	btnDM.innerHTML = buttonsDM[i][0];
	btnDM.id = buttonsDM[i][0];
	btnDM.type = 'button';
	divNew.appendChild(btnDM);
	btnDM.addEventListener("click", window[this.id]());
};
    function Button1() {
        alert("Button1 pushed");
    }
    function Button2() {
        alert("Button2 pushed");
    }
    function Button3() {
        alert("Button3 pushed");
    }
();
