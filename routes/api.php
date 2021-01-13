<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/produtos',[ProductoController::class, 'index']);
Route::prefix('/producto')->group(function(){
    Route::post('/store', [ProductoController::class,'store']);
    Route::put('/{id}', [ProductoController::class,'update']);
    Route::delete('/{id}', [ProductoController::class,'destroy']);
    });

?>