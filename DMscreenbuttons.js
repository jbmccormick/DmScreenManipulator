// ==UserScript==
// @name         DM Screen Manipulator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://5e.tools/dmscreen.html
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
const buttonsDM = [
    ["Button1","Btn1"],
    ["Button2","Btn2"],
    ["Button3","Btn3"],
];
var divNew = document.createElement('div');
var mainViewport = document.getElementsByClassName("viewport-wrapper")[0];
var controlsElement = document.getElementsByClassName("dm-init-wrp-controls")[0];
//console.log(controlsElement);
    divNew.id = "buttonPaneOne";
var buttonDivOne = document.getElementById("buttonPaneOne");
//    mainViewport.insertAdjacentElement("beforebegin", divNew);
    controlsElement.insertAdjacentElement("beforebegin", divNew);
for(let i = 0; i < buttonsDM.length; i++){ //creating buttons for each program area
	let btnDM = document.createElement('button');
	btnDM.style = "z-index: 1100 !important;"
	btnDM.innerHTML = buttonsDM[i][0];
	btnDM.id = buttonsDM[i][1];
	btnDM.type = 'button';
	divNew.appendChild(btnDM);
	btnDM.addEventListener("click", function() { buttonsDM[i][0] });
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
})();
