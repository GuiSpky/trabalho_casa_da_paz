@extends('app')
@section('tittle', 'Detalhe do Cliente')
@section('content')
    <div class="card">
        <div class="card-header">
            Detalhes do CLiente {{$client->nome}}
        </div>
        <div class="card-body">
            <p><strong>ID:</strong>{{$client->id}}</p>
            <p><strong>Nome:</strong>{{$client->id}}</p>
            <p><strong>Endereço:</strong>{{$client->endereco}}</p>
            <p><strong>Observações:</strong>{{$client->observacao}}</p>
            <br>
            <a class="btn btn-success" href="{{ route('clients.index') }}">Voltar</a>
        </div>
    </div>
@endsection
