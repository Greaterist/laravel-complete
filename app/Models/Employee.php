<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //protected $table = 'Employees'; // можно выставить дефолтное название таблицы. По умолчанию берется название класса + s (Employees). А CamelCase переходит в snake_case

        ///////Первичный ключ

    //protected $primaryKey = 'employee_id'; // можно выставить дефолтное название первичного ключа. По умолчанию 'id'
    //public $incrementing = false; // автоинкремент первичного ключа. По умолчанию true
    //protected $keyType = 'string'; // тип певичного ключа. По умолчанию integer

        /////// Время

    //public $timestamps = false; // Штамп времени. По умолчанию true

    use HasFactory;
    protected $fillable = [ // $fillable ограничивает список столбцов, в которые пользователь может записать данные
        'employee_name',
        'salary',
    ];
}
