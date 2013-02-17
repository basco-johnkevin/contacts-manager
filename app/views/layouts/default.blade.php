<!DOCTYPE html>
<html>
<head>
	<meta charset=utf-8 />
	<title></title>
	<link rel="stylesheet" type="text/css" media="screen" href="css/master.css" />

	<link rel="stylesheet" type="text/css" href="{{ asset('packages/bootstrap/css/bootstrap.css') }}">

	<link rel="stylesheet/less" type="text/css" href="{{ asset('assets/css/styles.less') }}" />

	<script type="text/javascript" src="{{ asset('assets/js/libs/less/1.3.3/less.js') }}"></script>

	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

</head>
<body>

	<div class="container">

	   	{{{ $content }}}

    </div> <!-- /container -->

	



	<!-- scripts -->
	<script type="text/javascript" src="{{ asset('assets/js/libs/jquery/1.9.0/jquery.js') }}"></script>
	<script type="text/javascript" src="{{ asset('assets/js/libs/underscore/1.4.4/underscore.js') }}"></script>
	<script type="text/javascript" src="{{ asset('assets/js/libs/backbone/0.9.10/backbone.js') }}"></script>
	<script type="text/javascript" src="{{ asset('packages/bootstrap/js/bootstrap.js') }}"></script>
	<script type="text/javascript" src="{{ asset('assets/js/models/contact.js') }}"></script>
	<script type="text/javascript" src="{{ asset('assets/js/collections/contacts.js') }}"></script>
	<script type="text/javascript" src="{{ asset('assets/js/views/contact.js') }}"></script>
	<script type="text/javascript" src="{{ asset('assets/js/views/app.js') }}"></script>
	<script type="text/javascript" src="{{ asset('assets/js/main.js') }}"></script>
	<!-- scripts ends -->

</body>
</html>