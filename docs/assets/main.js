    function introTransform()  {
    document.getElementById('intro').setAttribute("class", "intro-card-2");
    document.getElementById('logoIntro').setAttribute("class", "intro-logo-2");
    document.getElementById('portfoliobtn').setAttribute("class", "main-btn-2");
    document.getElementById('behance').setAttribute("class", "icons-black");
    document.getElementById('youtube').setAttribute("class", "icons-black");
    document.getElementById('instagram').setAttribute("class", "icons-black");
    document.getElementById('dribbble').setAttribute("class", "icons-black");   
    document.getElementById('iconsWrapper').setAttribute("class", "icons-wrapper-2");
    document.getElementById('links').classList.remove("hidden");
}

function backgroundMouseoverPortfolio()   {

    document.getElementById('body').setAttribute("class", "body-yellow");

}

function backgroundMouseoverBehance()   {

    document.getElementById('body').setAttribute("class", "body-navy");

}

function backgroundMouseoverYoutube()   {

    document.getElementById('body').setAttribute("class", "body-red");

}

function backgroundMouseoverInstagram()   {

    document.getElementById('body').setAttribute("class", "body-pink");

}

function backgroundMouseoverDribbble()   {

    document.getElementById('body').setAttribute("class", "body-purple");

}

function backgroundMouseoverFiverr()   {

    document.getElementById('body').setAttribute("class", "body-green");

}

function backgroundMouseout()   {

    document.getElementById('body').setAttribute("class", "body");

}


function reDirectMotion()   {

    document.getElementById('intro').setAttribute("class", "fadeOut");
    document.getElementById('intro').setAttribute("class", "fadeOut");
    setTimeout("location.href = './motion.html';",1000);

}

function reDirectWeb()   {

    document.getElementById('intro').setAttribute("class", "fadeOut");
    setTimeout("location.href = './web.html';",1000);

}



function reDirectPackaging()   {

    document.getElementById('intro').setAttribute("class", "fadeOut");
    setTimeout("location.href = './packaging.html';",1000);

}


function reDirectLayout()   {

    document.getElementById('intro').setAttribute("class", "fadeOut");
    setTimeout("location.href = './layout.html';",1000);

}


function reDirectIllust()   {

    document.getElementById('intro').setAttribute("class", "fadeOut");
    setTimeout("location.href = './illust.html';",1000);

}

