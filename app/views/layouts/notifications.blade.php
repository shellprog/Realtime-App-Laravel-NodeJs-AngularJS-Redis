@if(Session::has('error_msg'))
<div class="alert alert-danger">
    <b>Error!</b> {{Session::get('error_msg')}}
</div>
@endif

@if(Session::has('success_msg'))
<div class="alert alert-success">
    <b>Success!</b> {{Session::get('success_msg')}}
</div>
@endif