<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Buscar os clientes no Banco de dados;
        $produtos = Produto::get(); // :: significa que o método utilizado é estatico

        // Mostrar um FrontEnd listando os clientes.
        return view('produtos.index', [
            'produtos' => $produtos
        ]);
    }
    function create()
    {
        //
    }
    public function store(Request $request)
    {
        //
    }
    public function show(string $id)
    {
        //buscar o cliente pelo id no banco de dados
        $produtos = Produto::find($id);
        //retornar os dados do produto em uma view (show)
        return view('produtos.show', ['produtos'=> $produtos]);
    }

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
        //
    }
}
