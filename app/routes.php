<?php

Route::get('/','UsersController@index');

Route::post('/api/users/create','UsersController@addUser');
Route::get('/api/users/all','UsersController@all');
Route::get('/api/users/delete/{user_id}','UsersController@deleteUser');
Route::post('/api/users/update','UsersController@updateUser');