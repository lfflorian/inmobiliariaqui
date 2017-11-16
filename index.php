<?php  
include("views/header.php");
?>
<i class="cl" style="display: none;">1</i>
<!-- search -->
<section>
	<div class="background">
		<div class="row">
			<div class="small-10 small-centered columns">
				<div class="search">
					<div class="row">
					<!-- operacion, tipo, departamento, zona -->
						<form action="">
							<div class="small-12 medium-6 columns">
								<select name="operacion" id="operacion" placeholder="operacion">
				                <option selected disabled>Operacion</option>
				                <option value="">sin valor</option>
				                <option value="Venta">Venta</option>
				                <option value="Renta">Renta</option>
				            </select>
							</div>
							<div class="small-12 medium-6 columns">
				              <select name="tipoinmueble" id="tipoinmueble">
				                <option selected disabled>Tipo de inmueble</option>
				                <option value="">sin valor</option>
				                <option value="Casa">Casa</option>
				                <option value="Apartamento">Apartamento</option>
				                <option value="Bodega">Bodega</option>
				                <option value="Terreno">Terreno</option>
				                <option value="Oficina">Oficina</option>
				                <option value="Local">Local</option>
				              </select>
							</div>
						</div>
						<div class="row">
								<div class="small-12 medium-6 columns">
									<select name="departamento" id="departamento" placeholder="departamento">
					                <option selected disabled>departamento</option>
					                <option value="">sin valor</option>
					            </select>
								</div>
								<div class="small-12 medium-6 columns">
									<select name="zona" id="zona" placeholder="zona">
					                <option selected disabled>Zona</option>
									<option value="">sin valor</option>
					            </select>
								</div>
						</div>
						<div class="row">
							<div class="small-12 medium-6 small-centered text-center">
								<input type="button" class="button" value="Buscar" id="buscar">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- / search -->

<!-- inmuebles -->
<section id="propertys">
	<div class="propertys">
		<h5>Propiedades</h5>
		<div class="row">
			<!-- <div class="small-12 columns"> -->
				<div class="row" id="show">
					<div class="small-12 medium-4 columns">
						<div class="property">
							<a href="">
							<h5>Apartamento en zona 16</h5>
							<img src="dist/images/casa.jpg" alt="">
							<span>RENTA</span>
							<div class="info">
								<i class="flaticon-carro-compacto"><strong> 2</strong></i>
								<i class="flaticon-banera-con-ducha-abierta"><strong> 2</strong></i>
								<i class="flaticon-carro-compacto"><strong> 2</strong></i>
								<p><strong>Q</strong> 12000</p>
							</div>
							</a>
						</div>
					</div>

					<div class="small-12 medium-4 columns">
						<div class="property">
							<a href="">
							<h5>Apartamento en zona 16</h5>
							<img src="dist/images/casa2.jpg" alt="">
							<span>RENTA</span>
							<div class="info">
								<i class="flaticon-carro-compacto"><strong> 2</strong></i>
								<i class="flaticon-banera-con-ducha-abierta"><strong> 2</strong></i>
								<i class="flaticon-carro-compacto"><strong> 2</strong></i>
								<p><strong>Q</strong> 12000</p>
							</div>
							</a>
						</div>
					</div>

					<div class="small-12 medium-4 columns">
						<div class="property">
							<a href="">	
							<h5>Apartamento en zona 16</h5>
							<img src="dist/images/casa3.jpg" alt="">
							<span>RENTA</span>
							<div class="info">
								<i class="flaticon-carro-compacto"><strong> 2</strong></i>
								<i class="flaticon-banera-con-ducha-abierta"><strong> 2</strong></i>
								<i class="flaticon-carro-compacto"><strong> 2</strong></i>
								<p><strong>Q</strong> 12000</p>
							</div>
							</a>
						</div>
					</div>
			<!-- </div> -->
		</div>
	</div>
</section>	
<!-- /inmuebles -->
<!-- contactenos -->
<section id="contactUs">
	<div class="contactUs">
		<div class="row">
			<div class="small-12 small-centered text-center medium-7 columns">
				<h2>Contactenos</h2>
				<div class="contactForm">
					<div class="row">
						<form action="">
							<div class="small-12 columns">
								<input type="text" placeholder="Nombre"  name="name">
							</div>
							<div class="small-12 columns">
								<input type="number" placeholder="Telefono"  name="phone">
							</div>
							<div class="small-12 columns">
								<input type="email" placeholder="Correo electronico"  name="email">
							</div>
							<div class="small-12 columns">
								<textarea type="text" placeholder="Comentario"  name="coment" cols="30" rows="10"></textarea>
							</div>
							<div class="small-12 columns">
								<input type="button" class="button" value="Enviar" id="enviar">
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- /contactenos -->
<?php  
include("views/footer.php");
?>