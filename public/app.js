

// $(document).ready(function(){
//     $( ".scroll_link" ).click(function(e) {
//         e.preventDefault();
//         const target = document.getElementById($(this).attr("href"));
//         console.log(target);
//         target.scrollTo({
//           top: 0,
//           left: 0,
//           behavior: "smooth"
//         })
//     });
// });

$('.one').on('click', function() {
  $('.service_text').text(function() {
    return "This is a new set of text for service one when clicked."
  });
});

$('.two').on('click', function() {
  $('.service_text').text(function() {
    return "Woo! It worked! This is a new set of text for service two when clicked."
  });
});

$('.three').on('click', function() {
  $('.service_text').text(function() {
    return "It worked again! This is a new set of text for service three when clicked."
  });
});

$('.menu_icon').on('click', function() {
  $('nav').addClass('active');
});

$('.cross_icon').on('click', function() {
  $('nav').removeClass('active');
});

$('.scroll_link').on('click', function() {
  if ($('nav').hasClass('active')) {
    $('nav').removeClass('active');
  }
});
