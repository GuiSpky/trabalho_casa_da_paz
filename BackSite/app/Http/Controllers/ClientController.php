<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Buscar os clientes no Banco de dados;
        $clients = Cliente::get(); // :: significa que o método utilizado é estatico

        // Mostrar um FrontEnd listando os clientes.
        return view('clients.index', [
            'clients' => $clients
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('clients.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dados = $request->except('_token');
        if($request->hasFile('avatar') && $request->file('avatar')->isValid()){
            $avatarPath = $request->file('avatar')->store('avatar', 'public');
            $dados['avatar'] = $avatarPath;
        }

        Cliente::create($dados);
        return redirect('/clients');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //buscar o cliente pelo id no banco de dados
        $client = Cliente::find($id);
        //retornar os fafos do cliente em uma view (show)
        return view('clients.show', ['client'=> $client]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $client = Cliente::find($id);
        return view('clients.edit',[
            'client' => $client
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $client = Cliente::find($id);

        $dados = $request->only('nome', 'emdereco', 'observacao');

        if($request->hasFile('avatar') && $request->file('avatar')->isValid()){
            if($client->avatar){
                Storage::disk('public')->delete($client->avatar);
            }

            $avatarPath = $request->file('avatar')->store('avatar', 'public');
            $dados['avatar'] = $avatarPath;
        }

        $client-> update([$dados]);

        return redirect('/clients');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $client = Cliente::find($id);
        if($client->avatar){
            Storage::disk('public')->delete($client->avatar);
        }

        $client->delete();
        return redirect('/clients');
    }
}
