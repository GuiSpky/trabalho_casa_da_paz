@extends('app')
@section('tittle', 'Fotos')

@section('content')

<h1>Lista de Fotos</h1>
<table class="table">
    {{-- <thead>
        <td>CAPA</td>
        <td>NOME</td>
        <td>MODULOS</td>
        <td>AULAS</td>
        <td>AÇÕES</td>
    </thead> --}}
    <tbody>
        @foreach ($fotos as $foto)
            <tr>
                <td><img src="{{ Storage::url($foto->foto) }}"
                alt={{$foto->foto}}
                class="img-thumbnail"
                width="150"></td>
                <td>
                    <p>{{$foto->foto}}</p>
                <form action="{{route('foto.destroy', $foto)}}" method="POST">
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
