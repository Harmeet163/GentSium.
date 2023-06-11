let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");

let but1 = document.getElementById("btn1");
let but2 = document.getElementById("btn2");
let but3 = document.getElementById("btn3");
let but4 = document.getElementById("btn4");
let but5 = document.getElementById("btn5");
let but6 = document.getElementById("btn6");

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");

console.log();



but1.setAttribute("style", "color:#E9204F ! important;");
but1.setAttribute("class", "fa fa-circle");
but4.setAttribute("style", "color:#E9204F ! important;");
but4.setAttribute("class", "fa fa-circle");


function btn1() {

    img1.setAttribute("src", "pics/work1.jpeg");
    img2.setAttribute("src", "pics/work2.jpeg");
    img3.setAttribute("src", "pics/work3.jpeg");
    but1.setAttribute("class", "fa fa-circle");
    but2.setAttribute("class", "fa fa-circle-o");
    but3.setAttribute("class", "fa fa-circle-o");
    but1.setAttribute("style", "color:#E9204F ! important;");
    but2.setAttribute("style", "color:white ! important;");
    but3.setAttribute("style", "color:white ! important;");

    p1.children[0].innerText = "Product Design";
    p1.children[1].innerText = "Design / Marketing ";

    p2.children[0].innerText = "Woody";
    p2.children[1].innerText = "Architecture / Concept ";

    p3.children[0].innerText = "Interior Design";
    p3.children[1].innerText = "Architecture / Concept ";

}

function btn2() {
    img1.setAttribute("src", "pics/work4.jpeg");
    img2.setAttribute("src", "pics/work5.jpeg");
    img3.setAttribute("src", "pics/work6.jpeg");
    but1.setAttribute("class", "fa fa-circle-o");
    but2.setAttribute("class", "fa fa-circle");
    but3.setAttribute("class", "fa fa-circle-o");
    but2.setAttribute("style", "color:#E9204F ! important;");
    but1.setAttribute("style", "color:white ! important;");
    but3.setAttribute("style", "color:white ! important;");

    p1.children[0].innerText = "Electica";
    p1.children[1].innerText = "App";

    p2.children[0].innerText = "Home Design";
    p2.children[1].innerText = "Architecture / Concept ";

    p3.children[0].innerText = "Bikeer";
    p3.children[1].innerText = "Concept / Design";


}

function btn3() {
    img1.setAttribute("src", "pics/work6.jpeg");
    img2.setAttribute("src", "pics/work3.jpeg");
    img3.setAttribute("src", "pics/work4.jpeg");
    but1.setAttribute("class", "fa fa-circle-o");
    but2.setAttribute("class", "fa fa-circle-o");
    but3.setAttribute("class", "fa fa-circle");
    but3.setAttribute("style", "color:#E9204F ! important;");
    but1.setAttribute("style", "color:white ! important;");
    but2.setAttribute("style", "color:white ! important;");

    p1.children[0].innerText = "Bikeer";
    p1.children[1].innerText = "Concept / Design";

    p2.children[0].innerText = "Interior Design";
    p2.children[1].innerText = "Architecture / Concept ";


    p3.children[0].innerText = "Electica";
    p3.children[1].innerText = "App";
}

function btn4() {
    img4.setAttribute("src", "pics/blog1.jpeg");
    img5.setAttribute("src", "pics/blog2.jpeg");
    img6.setAttribute("src", "pics/blog3.jpeg");
    but4.setAttribute("class", "fa fa-circle");
    but5.setAttribute("class", "fa fa-circle-o");
    but6.setAttribute("class", "fa fa-circle-o");
    but4.setAttribute("style", "color:#E9204F ! important;");
    but5.setAttribute("style", "color:white ! important;");
    but6.setAttribute("style", "color:white ! important;");

    p4.children[0].innerText = "CAREERS";
    p4.children[1].innerText = "Winning tactics for a new Digital agency ";

    p5.children[0].innerText = "DESIGN / UX";
    p5.children[1].innerText = "How to drive your customer experience ";


    p6.children[0].innerText = "CAREERS";
    p6.children[1].innerText = "How to be more productive usgin sticky notes";

}

function btn5() {
    img4.setAttribute("src", "pics/blog4.jpeg");
    img5.setAttribute("src", "pics/blog5.jpeg");
    img6.setAttribute("src", "pics/blog6.jpeg");
    but4.setAttribute("class", "fa fa-circle-o");
    but5.setAttribute("class", "fa fa-circle");
    but6.setAttribute("class", "fa fa-circle-o");
    but5.setAttribute("style", "color:#E9204F ! important;");
    but4.setAttribute("style", "color:white ! important;");
    but6.setAttribute("style", "color:white ! important;");

    p4.children[0].innerText = "MARKETING";
    p4.children[1].innerText = "Choose from meeting speak , client feedback";

    p5.children[0].innerText = "DESIGN / UX";
    p5.children[1].innerText = "How to make your product stand out ";


    p6.children[0].innerText = "CAREERS / MARKETING";
    p6.children[1].innerText = "How to become a best sale marketer in a year ";
}

function btn6() {
    img4.setAttribute("src", "pics/blog2.jpeg");
    img5.setAttribute("src", "pics/blog3.jpeg");
    img6.setAttribute("src", "pics/blog1.jpeg");
    but4.setAttribute("class", "fa fa-circle-o");
    but5.setAttribute("class", "fa fa-circle-o");
    but6.setAttribute("class", "fa fa-circle");
    but6.setAttribute("style", "color:#E9204F ! important;");
    but4.setAttribute("style", "color:white ! important;");
    but5.setAttribute("style", "color:white ! important;");


    p4.children[0].innerText = "DESIGN / UX";
    p4.children[1].innerText = "How to drive your customer experience ";


    p5.children[0].innerText = "CAREERS";
    p5.children[1].innerText = "How to be more productive usgin sticky notes";

    p6.children[0].innerText = "CAREERS";
    p6.children[1].innerText = "Winning tactics for a new Digital agency ";

}