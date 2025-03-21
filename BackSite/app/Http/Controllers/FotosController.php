<?php

namespace App\Http\Controllers;

use App\Models\Fotos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FotosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fotos = Fotos::get();
        return view('foto.index', [
            'fotos' => $fotos,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('foto.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $dados = $request->except('_token');
        if($request->hasFile('foto') && $request->file('foto')->isValid()){
            $capaPath = $request->file('foto')->store('foto', 'public');
            // $url = Storage::url($capaPath);
            $dados['foto'] = $capaPath;
        }

        Fotos::create($dados);
        // dd($url);
        return redirect('/foto');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $fotos = Fotos::find($id);
        if($fotos->foto){
            Storage::disk('public')->delete($fotos->foto);
        }

        $fotos->delete();
        return redirect('/dashboard');
    }
}
