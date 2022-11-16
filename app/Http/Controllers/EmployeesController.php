<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmployeesController extends Controller
{
    public function getEmployeeList(){
        try {
            $employees = Employee::all();//Eloquent ORM. 
            return response()->json($employees);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function getEmployeeDetails(Request $req){
        try {
            $employee = Employee::findOrFail($req->get('employeeId'));
            return response()->json($employee);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
