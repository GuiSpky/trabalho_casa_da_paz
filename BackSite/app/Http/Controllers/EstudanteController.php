<?php

namespace App\Http\Controllers;

use App\Models\Estudantes;
use Illuminate\Http\Request;

class EstudanteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Buscar os clientes no Banco de dados;
        $estudantes = Estudantes::get(); // :: significa que o método utilizado é estatico
        // dd($estudantes);
        // Mostrar um FrontEnd listando os clientes.
        return view('estudantes.index', [
            'estudantes' => $estudantes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('estudantes.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dados = $request->except('_token');
        Estudantes::create($dados);
        return redirect('/estudantes');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

         $estudantes = Estudantes::find($id);

         return view('estudantes.show', ['estudante'=> $estudantes]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $estudante = Estudantes::find($id);
        return view('estudantes.edit',[
            'estudantes' => $estudante
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $estudantes = Estudantes::find($id);

        $estudantes-> update([
            'nome' => $request->nome,
            'cpf' => $request->cpf,
            'nascimento' => $request->nascimento
        ]);

        return redirect('/estudantes');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $estudantes = Estudantes::find($id);
        $estudantes->delete();
        return redirect('/estudantes');

    }
}
