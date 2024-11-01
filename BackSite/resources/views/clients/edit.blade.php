@extends('app')
@section('tittle', 'Editar Cliente')
@section('content')

<h1>Editar Cliente</h1>
    <form action="{{ route('clients.update', $client) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" name="nome" id="nome" class="form-control" placeholder="Digite o nome" value="{{$client->nome}}">
        </div>
        <div class="mb-3">
            <label for="endereco" class="form-label">Endereço</label>
            <input type="text" name="endereco" id="endereco" class="form-control" placeholder="Digite o endereço" value="{{$client->endereco}}">
        </div>
        <div class="mb-3">
            <label for="observacao" class="form-label">Observações</label>
            <textarea class="form-control" name="observacao" id="observacao" rows="3">{{$client->observacao}}</textarea>
        </div>
        <div class="mb-3">
            <label for="avatar" class="form-label">Avatar</label>
            <input type="file" class="form-controll" id="avatar" name="avatar" accept="image/*">
        </div>

        @if ($client->avatar)
            <div class="mb-3">
                <img src="{{ assert('storade/' . $client->avatar) }}"
                alt="Avatar do Cliente"
                class="img-thumbnail"
                width="150">
            </div>
        @endif

        <button class="btn btn-success" type="submit">Enviar</button>
    </form>
@endsection
