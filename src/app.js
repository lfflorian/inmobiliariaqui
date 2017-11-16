/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
$( document ).ready(function() {
        let pagina = $('.cl').text();
        //hey
        if (pagina == 1) { showSelectValues() } 
        else if (pagina == 2) { 
            showimageProperty($('#id').val())
        }
        
    });

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$propertys = $('#show');
$('#buscar').click(() => { searchPropertys() })

let searchPropertys = function() {
	let dataJson = {'operacion': $('#operacion').val(), 
            		'tipoinmueble':$('#tipoinmueble').val(),
           			'departamento': $('#departamento').val(),
            		'zona': $('#zona').val() };

    $.ajax({
            type: "POST",
            url: "model/datasearch.php",
            data: dataJson,
            success: function (res) {
                console.log(res)

                if (res == 0)
                {
                    console.log("No hay datos encontrados")
                } else if (res == 1) {
                    console.log("Hay un error con la base de datos ")
                } else if (res != 0) {
                	let parsed = JSON.parse(res);
                    let arr = [];
                    for(let x in parsed){
                      arr.push(parsed[x]);
                    }

                    $('#show div').fadeOut("normal", function() {
                        $(this).remove();
                    });
                	showSearchProperys(arr);
                }
            }
        });
}

let template_2 = 	'<div class="small-12 medium-4 columns">'+
					'<div class="property">'+
						'<a href="property.php?inmueble=:id:">'+
						'<h5>:titulo:</h5>'+
						'<img src=":ruta:" alt="">'+
						'<span>:operacion:</span>'+
						'<div class="info">'+
							'<i class="flaticon-carro-compacto"><strong> :parqueos:</strong></i>'+
							'<i class="flaticon-banera-con-ducha-abierta"><strong> :nobanios:</strong></i>'+
							'<i class="flaticon-carro-compacto"><strong> :nohabitaciones:</strong></i>'+
							'<p><strong>:moneda:</strong> :precio:</p>'+
						'</div>'+
						'</a>'+
					'</div>'+
				'</div>';

let showSearchProperys = function(estate) {
	estate.forEach(function (property) { 
        let rutaimagen = property.rutaimagen;
        if (rutaimagen == null)
        {
            rutaimagen = "";
        }

		let article = template_2.replace(':operacion:', property.operacion)
                                .replace(':ruta:', rutaimagen)
		                        .replace(':parqueos:', property.parqueos)
                                .replace(':titulo:', property.titulo)
                                .replace(':precio:', property.precio)
                                .replace(':moneda:',property.moneda)
                                .replace(':nobanios:',property.nobanios)
                                .replace(':nohabitaciones:',property.nohabitaciones)
                                .replace(':id:', property.idinmueble)
        let $article = $(article)
          $propertys.fadeIn("normal", function() {
              $propertys.append($article.fadeIn(5000));
          });
	})
}

let showSelectValues = function() {
    $.ajax({
        type: "POST",
        url: "model/datareturn.php",
        success: function (res) {
            let parsed = JSON.parse(res);
            let arr = [];
            for(let x in parsed){
              arr.push(parsed[x]);
            }
            let option = "<option value=':valor:'>:valor_2:</option>";
            $optionDepartamento = $('#departamento');
            $optionZona = $('#zona');
            arr.forEach(function (property) {
                let $article = option.replace(':valor:', property.departamento)
                                     .replace(':valor_2:', property.departamento)
                $optionDepartamento.append($article);
            });

            arr.forEach(function (property) {
                let $article = option.replace(':valor:', property.zona)
                                     .replace(':valor_2:', property.zona)
                $optionZona.append($article);
            });
        }
    });
}

/**/
let template_3 =  '<div class="mySlides fade">'+
                    '<div class="numbertext">:numactual: / :numtotal:</div>'+
                    '<img src=":ruta:" alt="" style="width:100%"> '+
                    '<div class="text"></div>'+
                  '</div>';

let dotTemplate = '<span class="dot" onclick="currentSlide(:numact:)"></span>';

let showimageProperty = function (val) {
    $.ajax({
        type: "POST",
        url: "model/dataimagecolection.php",
        data: {id: val},
        success: function (res) {
            let parsed = JSON.parse(res);
            let arr = [];
            for(let x in parsed){
              arr.push(parsed[x]);
            }
            let cont = 0;
            arr.forEach(function (property) { 
                // let rutaimagen = property.rutaimagen;
                // if (rutaimagen == null)
                // {
                //     rutaimagen = "";
                // }
                cont++;
                let article = template_3.replace(':numactual:', cont)
                                        .replace(':ruta:', property.rutaimagen)
                                        .replace(':numtotal:', arr.length)
                let dotTemp = dotTemplate.replace(':numact:', cont)
                let $article = $(article)
                let $dotTemp = $(dotTemp)
                  $slider = $('#slider');
                  $dot = $('#dot')
                  $slider.append($article);
                  $dot.append($dotTemp);
                  
            })
            showSlides(slideIndex);
        }
    });
}

var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}