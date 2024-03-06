<?php

namespace App\Http\Controllers;

use App\Models\Visitor;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Validator;

class VisitorController extends Controller
{
    //


public function create(Request $request)
{
    $request->validate([
        'nationality' => 'required',
        'gender' => 'required',
        'age' => 'required',
    ]);

    try {
        $visitor = new Visitor;
        $visitor->uuid = (string) Str::uuid();
        $visitor->nationality = $request->nationality;
        $visitor->gender = $request->gender;
        $visitor->age = $request->age;
        $visitor->ip_address = $request->ip();
        $visitor->save();

        return response()->json(['message' => 'Visitor created successfully', 'data' => $visitor], 201);
    } catch (\Exception $e) {
        Log::error('Error creating visitor: ', ['exception' => $e->getMessage()]);
        return response()->json(['error' => 'Error creating visitor', 'exception' => $e->getMessage()], 500);
    }
}

}