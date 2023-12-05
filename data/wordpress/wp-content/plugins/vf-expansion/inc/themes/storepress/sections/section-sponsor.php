<?php  
if ( ! function_exists( 'vf_expansion_storepress_sponsor_section' ) ) :
	function vf_expansion_storepress_sponsor_section() {
	$sponsor2_hide_show	= get_theme_mod('sponsor2_hide_show','1');		
	$sponsor2_content 	= get_theme_mod('sponsor2_content',storepress_get_sponsor2_default());
	if($sponsor2_hide_show=='1'):
?>	
<?php if ( is_active_sidebar( 'storepress-footer-1' ) ) : ?>
    <div class="col-12 wow fadeIn">
	<?php dynamic_sidebar( 'storepress-footer-1'); ?>
    </div>
<?php endif; ?>		
<div id="vf-sponsor" class="vf-sponsor vf-products-info-three st-py-default">
	<div class="container">
		<div class="row text-center py-2">

			<h2>Ofrecemos</h2>
		</div>
		<div class="row">

			<div class="col-sm-12 col-lg-4 py-3">
				<div class="row">
					<div class="col-2">
						<i class="fa-solid fa-star icon-ofrecemos"></i>
					</div>
					<div class="col-10">
						<h4>Calidad Inigualable</h4>
						<p >
							Cada detalle es cuidadosamente considerado y cada artículo es una muestra de artesanía excepcional,
							garantizando que tus momentos especiales estén acompañados de lo mejor.
						</p>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-lg-4 py-3">
					<div class="row">
							<div class="col-2">
								<i class="fa-solid fa-truck icon-ofrecemos"></i>
							</div>
							<div class="col-10">
								<h4>Entrega Rápida y Confiable</h4>
								<p >
									Tu felicidad merece llegar sin demora. Desde el clic hasta tus manos, trabajamos eficientemente para
									asegurarnos de que tus regalos lleguen a tiempo, siempre.
								</p>
							</div>
					</div>
			</div>
			<div class="col-sm-12 col-lg-4 py-3">
				<div class="row">
					<div class="col-2">
						<i class="fa-solid fa-paintbrush icon-ofrecemos"></i>
					</div>
					<div class="col-10">
						<h4 >Personalización a tu medida</h4>
						<p >En Alirene's, la personalización no es solo una opción, es nuestro compromiso contigo. Por ello cada producto se adapta a tu estilo, llevando la esencia de tus momentos a través de detalles exclusivos y personalizados.
						</p>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>
<div id="vf-sponsor" class="vf-sponsor vf-products-info-three st-py-default">
	<div class="container">
			<div class="row text-center" id="anuncio">
				<div class="col-sm-12 col-lg-4" id="anuncio-imagen">
					<img src="https://alirenes.store/wp-content/themes/storepress/assets/images/regalo.png" alt="regalo" srcset="" >
				</div>
				<div class="col-sm-12 col-lg-8" id="anuncio-mensaje-bloque">
					<h2 class="text-white">¿No encuentras el regalo que buscas?</h2>
					<a href="https://wa.me/79281786?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20personalizado,%20el%20producto%20que%20busco%20no%20esta%20disponible" class="btn btn-lg btn-dark btn-lg">Clic Aquí</a>
				</div>

			</div>
	</div>
</div>


<?php if ( is_active_sidebar( 'storepress-footer-2' ) ) : ?>
	<div class="container">

		<div class="col-12 text-left wow fadeIn">
			<?php dynamic_sidebar( 'storepress-footer-2'); ?>
		</div>
	</div>
<?php endif; ?> 
<?php endif; }
endif;
if ( function_exists( 'vf_expansion_storepress_sponsor_section' ) ) {
$section_priority = apply_filters( 'storepress_section_priority', 15, 'vf_expansion_storepress_sponsor_section' );
add_action( 'storepress_sections', 'vf_expansion_storepress_sponsor_section', absint( $section_priority ) );
}
?>