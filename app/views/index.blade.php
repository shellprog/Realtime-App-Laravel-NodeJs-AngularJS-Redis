<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Laravel Realtime App</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>

    {{HTML::style("/css/bootstrap.min.css")}}
    {{HTML::style("/css/font-awesome.min.css")}}
    {{HTML::style("/css/ionicons.min.css")}}
    {{HTML::style("/css/AdminLTE.css")}}

    <!--[if lt IE 9]>
    {{HTML::script("https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js")}}
    {{HTML::style("https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js")}}
    <![endif]-->

    <script>
        window.extras = window.extras || {{$window}};
    </script>

    @yield('styles')
    <base href="/"/>

</head>

<body class="skin-blue" ng-app="DemoApp">
<!-- header logo: style can be found in header.less -->

@include('layouts.header')

<div class="wrapper row-offcanvas row-offcanvas-left">
    <!-- Left side column. contains the logo and sidebar -->

    @include('layouts.navigation')

    <!-- Right side column. Contains the navbar and content of the page -->
    <aside class="right-side">

        <div class="col-md-12">
            <div ng-view></div>
        </div>


    </aside>
    <!-- /.right-side -->
</div>
<!-- ./wrapper -->

<!--Template Plugins-->
{{HTML::script("/js/jquery.2.0.3.js")}}
{{HTML::script("/js/jquery-ui-1.10.3.min.js")}}
{{HTML::script("/js/bootstrap.min.js")}}
{{HTML::script("js/plugins/iCheck/icheck.min.js")}}
{{HTML::script("js/AdminLTE/app.js")}}

<!--AngularJS-->
{{HTML::script("https://code.angularjs.org/1.2.13/angular.js")}}
{{HTML::script("//ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular-route.js")}}
{{HTML::script("//ajax.googleapis.com/ajax/libs/angularjs/1.0.3/angular-sanitize.js")}}
{{HTML::script("//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js")}}

<!--Socket.io-->
{{HTML::script("http://localhost:3000/socket.io/socket.io.js")}}
{{HTML::script("/angular/modules/angular-socket-io/socket.js")}}
{{HTML::script("/angular/app.js")}}

<!--Controllers and Services-->
{{HTML::script("/angular/services/users-service.js")}}

@yield('scripts')


</body>
</html>