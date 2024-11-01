@extends('app')
@section('tittle', 'Novo Cliente')
@section('content')
    <h1>Novo Cliente</h1>
    <form action="{{ route('clients.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" name="nome" id="nome" class="form-control" placeholder="Digite o nome">
        </div>
        <div class="mb-3">
            <label for="endereco" class="form-label">Endereço</label>
            <input type="text" name="endereco" id="endereco" class="form-control" placeholder="Digite o endereço">
        </div>
        <div class="mb-3">
            <label for="observacao" class="form-label">Observações</label>
            <textarea class="form-control" name="observacao" id="observacao" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="avatar" class="form-label">Avatar</label>
            <input type="file" class="form-controll" id="avatar" name="avatar" accept="image/*">
        </div>

        <button class="btn btn-success" type="submit">Enviar</button>
    </form>
@endsection
