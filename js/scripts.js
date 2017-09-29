// Twitter Script
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)){
  js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
  fjs.parentNode.insertBefore(js,fjs);}}
    (document, 'script', 'twitter-wjs');

// Facebook script
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7&appId=1524407414538352";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Google map 
function initMap() {
  var myLatLng = {lat: 33.823576,  lng: -84.2499507};

    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Location: Atlanta, Georgia'
  });

  marker.setMap(map);
}

// Tooltip scripts
$(function () {
  $('#item1').tooltip();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
  // alert("Document is ready");
  // Smooth Scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function() {
      window.location.hash = href;
    });
    return false;

  });

//stellar Parallax
$(window).stellar();

$(".message-box").on("keyup", function() {
  console.log("keyup happened");
  var comment = $(".message-box").val();
  var nameName = 3;
  var name = "string";

  var charCount = $(".message-box").val().length;

  console.log(charCount);
  $("#char-count").html(charCount);

  if(charCount > 50) {
    $("#char-count").css("color", "red");
  } else {
  if (charCount < 50) {
    $("#char-count").css("color","black");
    }
   };

  });

// Event listeners
$("#form-button").on("click", function() {
  var textareaValue = $(".message-box").val();
  if (textareaValue === "") {
    $(".message-box").css("border-color", "red");
  } else {
    var comment = $(".message-box").val();
    console.log(comment);
    $(".message-box").hide();
    $("#name").hide();
    $("#email").hide();
    $("#phone-number").hide();
    $("#form-button").hide();
  };

  return false;
});

// work section
for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-sm-3 col-md-3'>\
      <div class='project'>\
        <a href='" + works[i].url + "' class='work-img'>\
          <img class='img-responsive' src='" + works[i].src + "' id='work" + (i + 1) + "' alt='work" + (i + 1) + "'>\
          <span class='info'><p class='project-title'>Title:</p>" + works[i].title + "</span>\
        </a>\
      </div>\
    </div>\
    ");

   var images = $('#work img');
    if(i % 2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };

      $(".work-img").mouseenter(function() {
        $(".info", this).show();
      }).mouseleave(function() {
        $(".info", this).hide();
      });
      
    };
});
