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