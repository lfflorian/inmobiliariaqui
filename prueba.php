<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pruebas</title>
</head>
<body>
    <section id="conent">dfa</section>

    

    <script
  src="http://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script>
    $( document ).ready(function() {
        contenido();
    });

    var $Container = $('#conent');
    var contenido = function() {
        $.ajax({
            type:"POST",
            url:'datareturn.php',
            success:function(data){
                renderShows(data);
                console.log(data);
            }
        });
    }

    var htmlContent = '<div>'+
        '<h1>:titulo</h1>'+
        '<h3>:operacion</h3><h3>:tipo</h3>'+
        '<p>:descripcion</p>'+
        '<strong>:cuartos</strong><strong>:banios</strong>'+
        '</div>';

    function renderShows(inmueble) {
        // inmueble.forEach(function (inmueble) {

            var datai = inmueble.data; 
            for(var i in datai)
            {
                      var inmueble = htmlContent
        .replace(':titulo:', i.titulo)
        .replace(':operacion:', i.operacion)
        .replace(':tipo:', i.tipo)
        .replace(':descripcion:', i.descripcion)
        .replace(':cuartos:', i.nohabitaciones)
        .replace(':banios:', i.nobanios)
      var $i = $(i)
      $Container.append();

            }

    
  }
    
</script>
</body>
</html>