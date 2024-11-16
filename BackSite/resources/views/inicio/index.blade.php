@extends('app')
@section('tittle', 'Fotos')

@section('content')

<h1>Gerenciamento</h1>
<table class="table">

    <tr>
    <td><button class="btn btn-success" href="{{ route('foto.create') }}">Adicionar foto</button></td>
    </tr>
    <tr>
        <td><button class="btn btn-success" href="{{ route('foto.index') }}">Gerencias fotos</button></td>
    </tr>
    <tr>
    <td><button class="btn btn-success" href="{{ route('equipe.index') }}">Gerenciar equipe</button></td>
    </tr>

    </tbody>
</table>

@endsection
