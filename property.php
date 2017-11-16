<?php 
include('views/header.php')
?>
<i class="cl" style="display: none;">2</i>
<div class="row" >
	<input id="id" type="text" value=<?php echo '"'.$_GET['inmueble'].'"' ?> style="display: none">
	<div class="small-12 medium-8 columns">
		<div class="slideshow-container" id="slider">
		  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
		  <a class="next" onclick="plusSlides(1)">&#10095;</a>
		</div>
		<br>
		<div style="text-align:center" id="dot">
		</div>
	</div>
	<div class="small-12 columns">
		formulario
	</div>
</div>



<script src="src/2doapp.js"></script>
 <?php 
include('views/footer.php')
  ?>