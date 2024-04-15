// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });




  
  // Tutorial: https://youtu.be/Wxnpze5LK3Y

  var sliderCounter = 0;
  var sliderContent = [
    "Web Development",
    "WordPress Development",
    "App Development",
    "Plugin Development",
    "CRM Integrations"
  ];
  var slider = document.querySelector("#slider");
  var sliderValue = document.querySelector("#sliderValue");

  function slide() {
    if (sliderCounter >= sliderContent.length) {
      sliderCounter = 0;
    }

    sliderValue.innerHTML = "";

    sliderValue.classList.remove("holder-animation");
    void sliderValue.offsetWidth;
    sliderValue.classList.add("holder-animation");

    for (i = 0; i < sliderContent[sliderCounter].length; i++) {
      let letterDiv = document.createElement("div");
      letterDiv.innerHTML = sliderContent[sliderCounter][i];

      if (letterDiv.innerHTML == " ") {
        letterDiv.innerHTML = "&nbsp;";
      }
      letterDiv.classList.add("start");
      letterDiv.classList.add("animation");
      letterDiv.style.animationDelay = i / 10 + "s";
      sliderValue.appendChild(letterDiv);
    }

    sliderCounter++;
  }

  slide();
  setInterval(slide, 4000);

