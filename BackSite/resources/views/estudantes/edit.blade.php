@extends('app')
@section('tittle', 'Editar Aluno')
@section('content')

<h1>Editar Aluno</h1>
    <form action="{{ route('estudantes.update', $estudantes) }}" method="POST">
        @csrf
        @method('PUT')
        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" name="nome" id="nome" class="form-control" placeholder="Digite o nome" value="{{$estudantes->nome}}">
        </div>
        <div class="mb-3">
            <label for="cpf" class="form-label">Cpf</label>
            <input type="text" name="cpf" id="cpf" class="form-control" placeholder="Digite o cpf" value="{{$estudantes->cpf}}">
        </div>
        <div class="mb-3">
            <label for="nascimento" class="form-label">Nascimento</label>
            <input type="date" name="nascimento" id="nascimento" class="form-control" value="{{$estudantes->endereco}}">

        </div>
        <button class="btn btn-success" type="submit">Enviar</button>
    </form>
@endsection
