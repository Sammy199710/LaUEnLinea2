
$(document).ready(function() {
//CARRUSEL 1
var item =  $('#carrusel1');
var _options1 = {
						margin: 20,
						nav: true,
						dots: true,
						slideBy: 'page',
						responsive: {
						  0: {
							items: 1,
							rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
						  },
						  460: {
							items: 1,
							rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
						  },
						  560: {
							items: 1,
							rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
						  },
						  660: {
							items: 3,
							rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
						 },
						  750: {
							items: 4,
							rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
						  },
						  1100: {
							items: 5,
							rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
						  }
						}
					  };

var owl2Rows = new Owl2RowsConfig(item,_options1);




//CARRUSEL 2
var item2 =  $('#carrusel2');
var _options2 = {
			margin: 20,
			nav: true,
			dots: true,
			slideBy: 'page',
			responsive: {
			0: {
				items: 1,
				rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
			},
			460: {
				items: 1,
				rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
			},
			560: {
				items: 2,
				rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
			},
			660: {
				items: 3,
				rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
			},
			750: {
				items: 4,
				rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
			},
			1010: {
				items: 5,
				rows: 1 //Opción no usada por Owl Carousel, esta se usa en el algoritmo personalizado
			}
			}
  };
var owl2Rows2 = new Owl2RowsConfig(item2,_options2);


	

});
