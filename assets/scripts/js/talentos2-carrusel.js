//CARRUSEL 1
$('#myCarousel').carousel({
    interval: 4500
  })
  
  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    //next.children(':first-child').clone().appendTo($(this));
  /*
    for (var i=0;i<2;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
  */
     //next.children(':first-child').clone().appendTo($(this));
    //}
  });


//CARRUSEL 2
  $('#myCarousel2').carousel({
    interval: 4500
  })
  
  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
  });

  //CARRUSEL 3
  $('#myCarousel3').carousel({
    interval: 4500
  })
  
  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
  });
