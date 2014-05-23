<?php /* Template Name: Home Template */ get_header(); ?>

<main role="main">
		<!-- section -->
			<?php query_posts(array('posts_per_page'=>15, 'post_type'=>'html5-blank'));?>
			<?php if (have_posts()): while (have_posts()) : the_post(); ?>

				<?php the_content(); ?>

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