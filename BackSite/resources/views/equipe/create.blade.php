@extends('app')
@section('tittle', 'Novo membro')
@section('content')

<h1>Adcionar foto a galeria</h1>
<form action="{{ route('equipe.store') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <div class="mb-3">
        <label for="nome" class="form-label">Nome:</label>
        <input type="text" class="form-controll" id="nome" name="nome">
        <br>
        <label for="foto" class="form-label">Enviar foto</label>
        <input type="file" class="form-controll" id="foto" name="foto" accept="image/*">
         <br><button class="btn btn-success" type="submit">Enviar</button>

    </div>
</form>

@endsection
