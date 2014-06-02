<?php /* Template Name: Home Template */ get_header(); ?>
<?php remove_filter( 'the_content', 'wpautop' ); ?>
<main role="main">
		<!-- section -->
			<?php query_posts(array('post_type'=>'html5-blank'));?>
			<?php if (have_posts()): while (have_posts()) : the_post(); ?>
				<!-- Quita los tags p y br solo de los CCT del home -->
				<?php 
					// $our_content = get_the_content();
					// $clean_content = cleanup_shortcode_fix($our_content);
					// echo $clean_content;
				the_content(); 
				?>

			<?php endwhile; ?>
			<?php else: ?>

				<!-- article -->
				<article>

					<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>

				</article>
				<!-- /article -->

			<?php endif; ?>
		<!-- </section> -->
</main>			

<?php get_footer(); ?>