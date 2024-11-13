@extends('app')
@section('tittle', 'Nova Aula')
@section('content')

<h1>Adcionar foto a galeria</h1>
<form action="{{ route('foto.store') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <div class="mb-3">
        <label for="foto" class="form-label">Enviar foto</label>
        <input type="file" class="form-controll" id="foto" name="foto" accept="image/*">
         <br><button class="btn btn-success" type="submit">Enviar</button>

    </div>
</form>

@endsection
