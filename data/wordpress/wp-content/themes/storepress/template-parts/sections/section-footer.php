<?php 
$storepress_footer_bg_img	   		= get_theme_mod('footer_bg_img',esc_url(get_template_directory_uri() .'/assets/images/footer_bg.jpg'));
$storepress_footer_bg_img_opacity   = get_theme_mod('footer_bg_img_opacity','0.65');
?>
<footer id="vf-footer-wrap" class="vf-footer-wrap footer-three">
	<div class="footer-content">
		<div class="container">
			<div class="row mt-md-0 mt-4 g-5">	
									
					<?php if ( is_active_sidebar( 'storepress-footer-3' ) ) : ?>
						<div class="col-12 wow fadeIn">
							 <?php dynamic_sidebar( 'storepress-footer-3'); ?>
						</div>
					<?php endif; ?>	
			</div>
		</div>
	</div>
	<?php 
		$storepress_footer_copyright= get_theme_mod('footer_copyright','Copyright &copy; [current_year] [site_title] | Powered by [theme_author]');
		if(!empty($storepress_footer_copyright)):
	?>
		<div class="footer-copyright">
			<div class="container">
				<div class="row g-4 align-items-center">
					<div class="col-lg-12 col-md-12 col-12 text-lg-center text-md-center text-center">
						<div class="widget-center text-lg-center text-md-center text-center">
							<?php if ( ! empty( $storepress_footer_copyright ) ){ 				
								$storepress_copyright_allowed_tags = array(
									'[current_year]' => date_i18n('Y'),
									'[site_title]'   => get_bloginfo('name'),
									'[theme_author]' => sprintf(__('<a href="#">Vf Themes</a>', 'storepress')),
								);
							?>                          
							<div class="copyright-text">
								<?php
									echo apply_filters('storepress_footer_copyright', wp_kses_post(storepress_str_replace_assoc($storepress_copyright_allowed_tags, $storepress_footer_copyright)));
								?>
							</div>
						<?php } ?>
						</div>
					</div>
				</div>
			</div>  
		</div>
	<?php endif; ?>
</footer>