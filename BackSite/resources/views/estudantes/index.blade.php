@extends('app')
@section('tittle', 'Lista de Alunos')

@section('content')
    <h1>Lista de Alunos</h1>
    <table class="table">
        <thead>
            <td>ID</td>
            <td>Nome</td>
            <td>CPF</td>
            <td>Nascimento</td>
            <td>Ações</td>
        </thead>
        <tbody>
            @foreach ($estudantes as $estudante)
                <tr>
                    <td>{{$estudante->id}}</td>
                    <td><a href="{{route('estudantes.show', $estudante)}}">{{$estudante->nome}}</a></td>
                    <td>{{$estudante->cpf}}</td>
                    <td>{{$estudante->nascimento}}</td>
                    <td><a href="{{route('estudantes.edit', $estudante)}}" class="btn btn-warning">Update</a></td>
                    <td><form action="{{route('estudantes.destroy', $estudante)}}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-danger"
                        type="submit"
                        onclick="return confirm('Deseja realmente apagar?')">
                            Apagar
                        </button>
                    </form></td>

                </tr>
            @endforeach
        </tbody>
    </table>
    <a href="{{ route('estudantes.create') }}" class="btn btn-success">Novo Aluno</a>
@endsection
