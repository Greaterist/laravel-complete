<?php

use App\Http\Controllers\EmployeesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('test');



Route::get('/get/employee/list', [EmployeesController::class, 'getEmployeeList']);
Route::post('get/individual/employee/details', [EmployeesController::class, 'getEmployeeDetails']);
Route::post('update/employee/data', [EmployeesController::class, 'updateEmployeeData']);


Route::delete('/delete/employee/data/{employee}', [EmployeesController::class, 'deleteEmployeeData']);

Route::post('/store.employee/data', [EmployeesController::class, 'createEmployeeData']);