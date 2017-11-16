// $( document ).ready(function() {
//         showInfoProperty($('#id').val())
//     });



// let showInfoProperty = function (val) {
// 	$('#fs').val(val);
// }
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
// var jquery = require('jquery')

$( document ).ready(function() {
        getPropertys()
    });
    /*function drag and drop*/
    var dropzone = $('#dropzone')[0];

    dropzone.ondragover = function() {
        this.className = 'dropzone dragover';
        return false;
    }

    dropzone.ondragleave = function () {
        this.className = 'dropzone';
        return false;
    }

    dropzone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'dropzone';
        upload(e.dataTransfer.files)
    }

    var upload = function(files) {
        var formData = new FormData(),
        xhr = new XMLHttpRequest(),
        x;

        for(x = 0; x < files.length; x++) {
            formData.append('file[]', files[x]);
        }
        xhr.onload = function() {
            var data = this.responseText;
            var data = JSON.parse(this.responseText)
            arrayImages = data;
            displayUploads(data);
        }

        xhr.open('post','model/img.php');
        xhr.send(formData);
    }

    var displayUploads = function(data) {
        var uploads = document.getElementById('uploads'),
        anchor,
        x;

        for (x = 0; x < data.length; x++) {
            anchor = document.createElement('a');
            anchor.href = data[x].file;
            anchor.innerText = data[x].name;
            //anchor.src = data[x].file;

            uploads.appendChild(anchor);
        }
    }

    $('#show').click(() => { getPropertys() })

    let getPropertys = function() {
        $.ajax({
            type:"POST",
            url:'model/datareturn.php',
            data:"JSON",
            success: function (res, textStatus, xhr) {
                let parsed = JSON.parse(res);
                let arr = [];
                for(let x in parsed){
                  arr.push(parsed[x]);
                }
                showProperty(arr);
            }
        });
    }

    let $lugar = $('#conent');
    let template_1 = '<tr>'+
                    '<td>:operacion:</td>'+
                    '<td>:tipoinmueble:</td>'+
                    '<td>:titulo:</td>'+
                    '<td><strong>:moneda:</strong>:precio:</td>'+
                    '<td ><button id=":id:" onclick="deleteProperty(this)"><i class="fi-trash"></i></button></td>'+
                    '<td ><button id=":id2:" onclick="editProperty(this)"><i class="fi-clipboard-pencil"></i></button></td>'+
                    '</tr>';
                    
    function showProperty(estate) {
        estate.forEach(function (property) {
          let article = template_1.replace(':operacion:', property.operacion)
                                .replace(':tipoinmueble:', property.tipoinmueble)
                                .replace(':titulo:', property.titulo)
                                .replace(':precio:', property.precio)
                                .replace(':moneda:',property.moneda)
                                .replace(':id:', property.idinmueble)
                                .replace(':id2:', property.idinmueble)
          let $article = $(article)

          $lugar.fadeIn("normal", function() {
                $lugar.append($article.fadeIn(5000));
            });
        })
    }


    $('#enviar').click(() => { createProperty() })
    let idPropertyImage;
    let arrayImages;

    $('#addImages').click(() => { addImagesToProperty() })

    function createProperty() {
        let dataJson = {'operacion': $('#operacion').val(), 
                'tipoinmueble':$('#tipoinmueble').val(),
                'titulo': $('#titulo').val(),
                'descripcion': $('#descripcion').val(),
                'departamento': $('#departamento').val(),
                'municipio': $('#municipio').val(),
                'zona': $('#zona').val(),
                'colonia': $('#colonia').val(),
                'nohabitaciones': $('#nohabitaciones').val(),
                'nobanios': $('#nobanios').val(),
                'parqueos': $('#parqueos').val(),
                'dimenciones': $('#dimenciones').val(),
                'precio': $('#precio').val(),
                'moneda': $('#moneda').val()
            }
        $.ajax({
            type: "POST",
            url: "model/datacreate.php",
            data: dataJson,
            success: function (res) {
                console.log(res)
                idPropertyImage = res;
                // if (res == 1) {
                    $('#conent tr').fadeOut("normal", function() {
                        $(this).remove();
                    });
                    getPropertys()
                // }
                // else {
                //     $('#mensaje').html('no se envio');
                //     console.log('no se envio')
                // }
            }
        });
    }

    function deleteProperty(element) {
        var idPropery = $(element).attr('id');
        $.ajax({
            type: "POST",
            url: "model/datadelete.php",
            data: {id:idPropery},
            success: function (res) {
                $('#conent tr').fadeOut("normal", function() {
                    $(this).remove();
                });
                getPropertys()
            }
        });
    }

    function addImagesToProperty() {
        let idp = idPropertyImage
        let images = arrayImages
        $.ajax({
            type: "POST",
            url: 'model/dataaddimages.php',
            data: {id: idp, arrayimg: images},
            success: function (res) {
                console.log(res)
            }
        });

    }

    function editProperty(element) {
        var idPropery = $(element).attr('id');
        console.log(idPropery)
        $.ajax({
            type: "POST",
            url: 'model/dataedit.php',
            data: {id:idPropery},
            success: function (res) {
                 let parsed = JSON.parse(res);
                 console.log(res);
                 console.log(res.titulo)
            }

        });
    }