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
            $employees = Employee::all();
            return response()->json($employees);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
