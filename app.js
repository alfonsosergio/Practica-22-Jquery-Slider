const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const slidesLength = slideRight.querySelectorAll('div').length
const slider = document.getElementById("slider-img");
const actBut = document.getElementById("actionBut");



$("p").hide();
$("h1").hide();
$("h2").hide();
$("span").hide();


var diapoColor ={
    1 : {
        "color" : "#fd3555",
        "button" : "one-button",
        "img" : "image1"
    },
    2 : {
        "color" : "#2a86ba",
        "button" : "two-button",
        "img" : "image2"
    },
    3 : {
        "color" : "#252e33",
        "button" : "three-button",
        "img" : "image3"
    },
    4 : {
        "color" : "#ffb866",
        "button" : "four-button",
        "img" : "image4"
    }
};


function mostrardiapoColor() {
  var template = ``;
  for(element in diapoColor){
      template +=`
      <div id="${diapoColor[element].img}" class="${diapoColor[element].img}">
            
      </div>
      `;
      
  };

  slider.innerHTML = template;
  
}

function actionButton() {
  var templateAct = ``;
  for(element in diapoColor){
      templateAct +=`
      <button class="${diapoColor[element].button}">
        </button>
      `;
      
  };

  actBut.innerHTML = templateAct;
  
}

mostrardiapoColor()
actionButton()






const twoButton = document.querySelector('.two-button')
const oneButton = document.querySelector('.one-button')
const threeButton = document.querySelector('.three-button')
const fourButton = document.querySelector('.four-button')


var activeSlideIndex = 0

slideLeft.style.top = `-${3 * 100}vh`

oneButton.addEventListener('click', () => changeSlide('one'))
twoButton.addEventListener('click', () => changeSlide('two'))
threeButton.addEventListener('click', () => changeSlide('three'))
fourButton.addEventListener('click', () => changeSlide('four'))

const disappearSlide = () =>{
        $("p").fadeOut("slow");
        $("h1").fadeOut("slow");
        $("h2").fadeOut("slow");
        $("span").fadeOut("slow");
      setTimeout(() => {
        $("p").fadeIn("slow");
        $("span").fadeIn("slow");
      }, 3500);
};

const changeSlide = (direction) => {
    
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'one') {
        disappearSlide();
      activeSlideIndex = 3
    } else if (direction === 'two') {
      disappearSlide();
      activeSlideIndex = 2
    } else if (direction === 'three') {
      disappearSlide();
      activeSlideIndex = 1
    } else if (direction === 'four') {
      disappearSlide();
      activeSlideIndex = 0
    }
  
    slideRight.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


/*
setInterval(() => {
    const sliderHeight = sliderContainer.clientHeight
    activeSlideIndex++
      if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0
      }

      slideRight.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
      }px)`
      slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}, 10000);

*/


$(document).ready(function(){
  $("#image1").hover(
    function(){
    $(this).css("filter", "brightness(150%)");
    }, 
    function(){
    $(this).css("filter", "brightness(100%)");
  });

  $("#image2").hover(
    function(){
    $(this).css("filter", "brightness(150%)");
    }, 
    function(){
    $(this).css("filter", "brightness(100%)");
  });

  $("#image3").hover(
    function(){
    $(this).css("filter", "brightness(150%)");
    }, 
    function(){
    $(this).css("filter", "brightness(100%)");
  });

  $("#image4").hover(
    function(){
    $(this).css("filter", "brightness(150%)");
    }, 
    function(){
    $(this).css("filter", "brightness(100%)");
  });
});