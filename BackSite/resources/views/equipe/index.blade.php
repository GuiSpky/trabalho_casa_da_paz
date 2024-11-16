@extends('app')
@section('tittle', 'Equipe')

@section('content')

<h1>Lista de Equipe</h1>
<table class="table">
    {{-- <thead>
        <td>CAPA</td>
        <td>NOME</td>
        <td>MODULOS</td>
        <td>AULAS</td>
        <td>AÇÕES</td>
    </thead> --}}
    <tbody>
    <a href="{{ route('equipe.create') }}" class="btn btn-success">Novo membro</a>

        @foreach ($equipes as $equipe)
            <tr>
                <td><img src="{{ Storage::url($equipe->foto) }}"
                alt={{$equipe->foto}}
                class="img-thumbnail"
                width="150"></td>
                <td>{{ $equipe->nome }}</td>

                <td>
                    <p>{{$equipe->equipe}}</p>
                <form action="{{route('equipe.destroy', $equipe)}}" method="POST">
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

@endsection
