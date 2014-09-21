<?php

class UsersController extends BaseController {

    public function index(){
        return View::make('index',['rows'=>User::all(),'window'=>new \KodeInfo\JSHelper]);
    }

    public function addUser(){
        $user=new User();
        $user->name = Input::get('name');
        $user->email = Input::get('email');
        $user->save();
        Event::fire(\KodeInfo\Handlers\UserUpdatedEventHandler::EVENT, array(User::all()));
    }

    public function updateUser(){
        $user=User::find(Input::get('id'));
        $user->name = Input::get('name');
        $user->email = Input::get('email');
        $user->save();
        Event::fire(\KodeInfo\Handlers\UserUpdatedEventHandler::EVENT, array(User::all()));
    }

    public function deleteUser($user_id){
        User::find($user_id)->delete();
        Event::fire(\KodeInfo\Handlers\UserUpdatedEventHandler::EVENT, array(User::all()));
    }

    public function all(){
        return Response::json(User::all());
    }
} 