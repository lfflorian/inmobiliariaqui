<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pruebas</title>
    <link rel="stylesheet" href="dist/style.css">
</head>
<body>
  <div class="title small-12 columns text-center">
      <h2>Listado de inmuebles</h2>
  </div>
  <div class="row content">
    <div class="small-8 columns small-offset-2 text-center">
      <table>
        <thead>
          <tr>
            <th>Operación</th>
            <th>Tipo de inmueble</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Eliminar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody id="conent">
        </tbody>
      </table>
    </div>
  </div>
  <div class="row form">
    <div class="small-8 columns small-offset-2">
<!--       <ul class="accordion" data-accordion data-multi-expand="false">
      <li class="accordion-item-is-active" data-accordion-item>
      <a href="#" class="accordion-title">Agregar inmueble</a>
      <div class="accordion-content" data-tab-content> -->

      <h5 class="text-center">Agregar inmueble</h5>
      <form id="createForm" action="model/datacreate.php" method="POST">
        <!-- info general -->
        <div class="row">
          <div class="medium-3 column">
            <select name="operacion" id="operacion" placeholder="operacion">
                <option selected disabled>Operacion</option>
                <option value="Venta">Venta</option>
                <option value="Renta">Renta</option>
            </select>
          </div>
          <div class="medium-3 column">
              <select name="tipoinmueble" id="tipoinmueble">
                <option selected disabled>Tipo de inmueble</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Bodega">Bodega</option>
                <option value="Terreno">Terreno</option>
                <option value="Oficina">Oficina</option>
                <option value="Local">Local</option>
              </select>
          </div>
          <div class="medium-2 column">
              <select name="moneda" id="moneda">
                <option selected disabled>Moneda</option>
                <option value="Q">Q</option>
                <option value="$">$</option>
              </select>
          </div>
          <div class="medium-4 column">
            <input type="number" placeholder="precio" id="precio" name="precio">
          </div>
        </div>

        <!-- descripciones -->
        <div class="row">
          <div class="small-12 medium-12 column">
            <input type="text" placeholder="titulo" id="titulo" name="titulo">
          </div>
          <div class="small-12 medium-12 column">
            <textarea placeholder="descripcion" id="descripcion" name="descripcion" cols="10" rows="5"></textarea>
          </div>
        </div>


        <!-- info ubicacion -->
        <div class="row">
          <div class="small-12 medium-3 column">
            <input type="text" placeholder="departamento" id="departamento" name="departamento">
          </div>
          <div class="small-12 medium-4 column">
            <input type="text" placeholder="municipio" id="municipio" name="municipio">
          </div>
          <div class="small-12 medium-2 column">
            <input type="number" placeholder="zona" id="zona" name="zona">
          </div>
          <div class="small-12 medium-3 column">
            <input type="text" placeholder="colonia" id="colonia" name="colonia">
          </div>
        </div>

        <!-- otros datos -->
        <div class="row">
          <div class="small-12 medium-3 columns">
            <input type="number" placeholder="nohabitaciones" id="nohabitaciones" name="nohabitaciones">
          </div>
          <div class="small-12 medium-3 columns">
            <input type="number" placeholder="nobanios" id="nobanios" name="nobanios">
          </div>
          <div class="small-12 medium-3 columns">
            <input type="number" placeholder="parqueos" id="parqueos" name="parqueos">
          </div>
          <div class="small-12 medium-3 columns">
            <input type="number" placeholder="dimenciones" id="dimenciones" name="dimenciones">
          </div>
          <div class="small-12 columns">
              <input type="button" class="success button" value="Agregar Inmueble" id="enviar">
              <!-- <button id="enviar" class="success button">Agregar inmueble</button> -->
          </div>
        </div>
      </form>
        
        <!-- images -->
        <div class="rom">
          <div class="small-12 columns">
            <div class="imageLoad">
              <div id="uploads"></div>
                <div class="dropzone" id="dropzone">Drop files here to upload</div>
                <button id="addImages" class="success button">Agregar imagenes</button>
              </div>
            </div>
        </div>
      
    </div>
  </div>

  <script src="http://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script src="node_modules/foundation-sites/dist/js/foundation.min.js"></script>
  <script src="dist/app.js"></script>
</body>
</html>