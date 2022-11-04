///////////////// project 1

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("oneSlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}


///////////////////// end of project 1


///////////////// project 2

var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function currentDiv2(n) {
  showDivs2(slideIndex2 = n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("twoSlides");
  var dots = document.getElementsByClassName("demo2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " w3-white";
}


///////////////////// end of project 2


///////////////// project 3

var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function currentDiv3(n) {
  showDivs3(slideIndex3 = n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("threeSlides");
  var dots = document.getElementsByClassName("demo3");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex3-1].style.display = "block";  
  dots[slideIndex3-1].className += " w3-white";
}

///////////////////// end of project 3

///////////////// project 4

var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function currentDiv4(n) {
  showDivs4(slideIndex4 = n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("fourSlides");
  var dots = document.getElementsByClassName("demo4");
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex4-1].style.display = "block";  
  dots[slideIndex4-1].className += " w3-white";
}

///////////////////// end of project 4


///////////////// project 5

var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDivs5(n) {
  showDivs5(slideIndex5 += n);
}

function currentDiv5(n) {
  showDivs5(slideIndex5 = n);
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("fiveSlides");
  var dots = document.getElementsByClassName("demo5");
  if (n > x.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex5-1].style.display = "block";  
  dots[slideIndex5-1].className += " w3-white";
}

///////////////////// end of project 5

///////////////// project 6


var slideIndex6 = 1;
showDivs6(slideIndex6);

function plusDivs6(n) {
  showDivs6(slideIndex6 += n);
}

function currentDiv6(n) {
  showDivs6(slideIndex6 = n);
}

function showDivs6(n) {
  var i;
  var x = document.getElementsByClassName("sixSlides");
  var dots = document.getElementsByClassName("demo6");
  if (n > x.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex6-1].style.display = "block";  
  dots[slideIndex6-1].className += " w3-white";
}

///////////////////// end of project 6



/////// page navigations

var slideIndexPage = 1;
showDivsPage (slideIndexPage);

function plusDivsPage(n) {
  showDivsPage (slideIndexPage += n);
}

function currentDivPage(n) {
  showDivsPage (slideIndexPage = n);
}

function showDivsPage(n) {
  var i;
  var x = document.getElementsByClassName("portfolioProject");
  var numbers = document.getElementsByClassName("demoPage");
  if (n > x.length) {slideIndexPage = 1}    
  if (n < 1) {slideIndexPage = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < numbers.length; i++) {
    numbers[i].className = numbers[i].className.replace(" page-selected", "");
  }
  x[slideIndexPage-1].style.display = "block";  
  numbers[slideIndexPage-1].className += " page-selected";
}

//////////// end of page navigations

////////////////redirections

function reDirectMotionPortfolio()   {

  document.getElementById('leftSide').setAttribute("class", "slideoutRight");
  document.getElementById('rightSide').setAttribute("class", "slideoutLeft");
  document.getElementById('menuModal').setAttribute("class", "hidden");
  setTimeout("location.href = './motion.html';",1000);

}

function reDirectMotionPortfolioMobile()   {


  document.getElementById('rightSide').setAttribute("class", "slideoutLeft");
  document.getElementById('menuModal').setAttribute("class", "modalOut");
  document.getElementById('menuModal').setAttribute("class", "hidden");
  setTimeout("location.href = './motion.html';",1000);

}

function reDirectWebPortfolio()   {

  document.getElementById('leftSide').setAttribute("class", "slideoutRight");
  document.getElementById('rightSide').setAttribute("class", "slideoutLeft");
  document.getElementById('menuModal').setAttribute("class", "hidden");
  setTimeout("location.href = './web.html';",1000);

}


function reDirectPackagingPortfolio()   {

  document.getElementById('leftSide').setAttribute("class", "slideoutRight");
  document.getElementById('rightSide').setAttribute("class", "slideoutLeft");
  document.getElementById('menuModal').setAttribute("class", "hidden");
  setTimeout("location.href = './packaging.html';",1000);

}


function reDirectLayoutPortfolio()   {

  document.getElementById('leftSide').setAttribute("class", "slideoutRight");
  document.getElementById('rightSide').setAttribute("class", "slideoutLeft");
  document.getElementById('menuModal').setAttribute("class", "hidden");
  setTimeout("location.href = './layout.html';",1000);

}


function reDirectIllustPortfolio()   {

  document.getElementById('leftSide').setAttribute("class", "slideoutRight");
  document.getElementById('rightSide').setAttribute("class", "slideoutLeft");
  document.getElementById('menuModal').setAttribute("class", "hidden");
  setTimeout("location.href = './illust.html';",1000);

}

function menuLoad() {

  document.getElementById('menuModal').setAttribute("class", "slideoutModal");

}

function closeModal() {
  document.getElementById('menuModal').setAttribute("class", "hidden");

}