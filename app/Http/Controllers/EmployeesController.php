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
            $employees = Employee::orderBy('id', 'ASC')->get();//Eloquent ORM. 
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

    public function updateEmployeeData(Request $req){
        try {
            $employeeId = $req->get('employeeId');
            $employeeName = $req->get('employeeName');
            $employeeSalary = $req->get('employeeSalary');
            Employee::where('id', $employeeId)->update([
                'employee_name' => $employeeName,
                'salary' => $employeeSalary,
            ]);

            return response()->json('OK');
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function deleteEmployeeData(Employee $employee){
        try {
            $employee->delete();
            return response()->json($employee);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
