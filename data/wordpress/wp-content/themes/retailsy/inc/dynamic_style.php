<?php
if( ! function_exists( 'retailsy_dynamic_style' ) ):
    function retailsy_dynamic_style() {
		$output_css = '';
		 /**
		 *  Breadcrumb Style
		 */
		$breadcrumb_bg_img	= get_theme_mod('breadcrumb_bg_img',esc_url(get_template_directory_uri() .'/assets/images/breadcrumb.jpg')); 
		$breadcrumb_overlay_color= get_theme_mod('breadcrumb_overlay_color','#181818');
		list($br, $bg, $bb) = sscanf($breadcrumb_overlay_color, "#%02x%02x%02x");
		if($breadcrumb_bg_img !== '') { 
			$output_css .=".bread-title {
					background: url(" .esc_url($breadcrumb_bg_img). ") no-repeat center;
				}\n";
		}
		
		$output_css .=".bread-title::before {
					background: rgba($br, $bg, $bb, 1);
				}\n";
		
		
        wp_add_inline_style( 'retailsy-style', $output_css );
    }
endif;
add_action( 'wp_enqueue_scripts', 'retailsy_dynamic_style' );