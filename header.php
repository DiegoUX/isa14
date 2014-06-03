<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">
        <link href="<?php echo get_template_directory_uri(); ?>/foundation.min.css" rel="stylesheet">
        <link href="<?php echo get_template_directory_uri(); ?>/ie8-foundation4-grid.css" rel="stylesheet">
		<link href="<?php echo get_template_directory_uri(); ?>/assets/stylesheets/screen.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>
	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<!-- <div class="wrapper"> -->

			<!-- header -->
			<header class="header clear" role="banner">
				<div class="row">
					<div class="top-link hide-for-small">
						<div class="isa13">
							<a href="http://isa.ixda.org/2013/">
								<?php _e( 'Buscabas ISA 13?', 'html5blank' ); ?>
							</a>
						</div>
					</div>
					<div class="social-nav">
							<ul>
								<li><a href="#" class="icon-tw">Twitter</a></li>
								<li><a href="#" class="icon-fb">Facebook</a></li>
								<li><a href="#" class="icon-email">Contacto</a></li>
							</ul>
						</div>
					<div class="large-4 columns">
						<!-- logo -->
						<div class="logo">
							<a href="<?php echo home_url(); ?>">
								<!-- svg logo - toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script -->
								<img src="<?php echo get_template_directory_uri(); ?>/img/ISA-esp.svg" alt="Logo" class="logo-img">
							</a>
						</div>
						<!-- /logo -->
					</div>
					<div class="large-6 columns">
						<!-- nav -->
						<nav class="nav" role="navigation">
							<?php do_action('icl_language_selector'); ?>
							<!--<?php html5blank_nav(); ?>-->
							<!-- <ul>
								<li class="active"><a href="#">Español</a></li>
								<li><a href="#">Português</a></li>
								<li><a href="#">English</a></li>
							</ul> -->
						</nav>
						<!-- /nav -->
					</div>
				</div>
			</header>
			<!-- /header -->
