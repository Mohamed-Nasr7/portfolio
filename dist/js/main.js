


//Preloader

window.addEventListener('load', function(){
    var preload = document.querySelector('.loaderBg');
    preload.classList.add('finish-loading');
    
    setTimeout(function(){
        preload.classList.remove('loaderBg');
    }, 500);
});





//scroll down arrow

var arrow = document.querySelector(".arrows");
var portfolio = document.querySelector("#portfolio");
var portfolioOffset = portfolio.offsetTop;

arrow.addEventListener("click", function(){
    window.scrollTo({top: portfolioOffset, behavior: 'smooth'});
});



//Buttons wave effect

var buttons = document.querySelectorAll('.button, .about a')

function generateRipples(e, element){
    var x = e.offsetX;
    var y = e.offsetY;

    var waves = document.createElement('span');
    waves.style.left = x + "px";
    waves.style.top = y + "px";
    element.appendChild(waves);
    
}

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        generateRipples(e, this);
        
    });
});




// Fading Page Elements

var disappeared = document.querySelectorAll('.disappeared');
fadeinPos = window.innerHeight / 1.3;

disappeared.forEach(function(element){

    window.addEventListener('scroll', function(){

        var elementPos = element.getBoundingClientRect().top;        
        if(elementPos < fadeinPos){
            element.classList.add('fadein');
        }
    });
    
});





//Scroll to Top

var arrow = document.querySelector('.arrow');

window.addEventListener('scroll', function(){
    arrow.classList.toggle('active', window.scrollY > 500);
});


arrow.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})
