<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index() {
        $users = User::all();
        return response()->json($users);
    }
    public function store(Request $request) {
        User::create($request->all());
        return response()
            ->json(['message' => 'Success: You have added an user']);
    }
    public function edit($id)
    {
        $user = User::find($id);
        if (! $user) {
            return response()
                ->json(['error' => 'The user is not exists']);
        }
        return response()
            ->json($user);
    }
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if (! $user) {
            return response()
                ->json(['error' => 'Error: User not found']);
        }
        $user->update($request->all());
        return response()
            ->json(['message' => 'Success: You have updated the user']);
    }
    public function destroy($id)
    {
        $user = User::find($id);
        if (! $user) {
            return response()
                ->json(['error' => 'Error: User not found']);
        }
        $user->delete();
        return response()
            ->json(['message' => 'Success: You have deleted the user']);
    }
}
