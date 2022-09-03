jQuery(function($){
//Fix Nav
$(document).on('scroll',function () {
    var scroll = $(this).scrollTop();
    var topDist = $(".header").position();
    if (scroll > topDist.top) {
        $('.header').css({"position":"fixed","top":"0", "width": "100%", "z-index": "999"});
    } else {
        $('.header').css({"position":"static","top":"auto"});
    }
});



//SLIDER
$('.testimonial-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  //FORM SUBMIT
  $("form").submit(function(event) {
    event.preventDefault();
    //get the form data
    var formData = {
      firstName: $("#fname").val(),
      lastName: $("#lname").val(),
      email: $("#email").val()
    };

    $.ajax({
      type: "POST",
      url: "//jsonplaceholder.typicode.com/posts",
      data: formData,
      dataType: "json",
      encode: true
    }).done(function(data) {
      $(".response")
        .empty()
        .append('<p> '+ data.lastName + ', ' + data.firstName +' </p>');
        $("#formResponse").show();
    });
  });

  $(".popup-module button.close").on("click", function(){
        $("#formResponse").hide();
        resetInput();
  });


});
//FORM RESET INPUT
function resetInput(){
    $(".form-input-text").val("");
}