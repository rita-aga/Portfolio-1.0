$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });

$('.menu').click(function() {
    $('#toggle').toggleClass('active');
    $('#overlay').toggleClass('open');
   });

   var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 200,
    backSpeed: 200,
    loop: true,
    loopCount: Infinity
  });

  var rellax = new Rellax('.rellax', {
    center: true,
    round: true,
    vertical: true
  });