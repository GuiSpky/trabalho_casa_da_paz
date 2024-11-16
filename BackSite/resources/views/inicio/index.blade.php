@extends('app')
@section('tittle', 'Fotos')

@section('content')

<h1>Gerenciamento</h1>
<table class="table">

    <tr>
    <td><a class="btn btn-success" href="{{ route('foto.create') }}">Adicionar foto</a></td>
    </tr>
    <tr>
        <td><a class="btn btn-success" href="{{ route('foto.index') }}">Gerencias fotos</a></td>
    </tr>
    <tr>
    <td><a class="btn btn-success" href="{{ route('equipe.index') }}">Gerenciar equipe</a></td>
    </tr>

    </tbody>
</table>

@endsection
