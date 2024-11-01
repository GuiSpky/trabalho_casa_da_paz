<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\EstudanteController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\SiteController;
use App\Models\Estudantes;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/produto/{id}', function ($id) {
//     dd($id);
//     // Utiliza o Id passado na Url para utilização no site, como em busca
//     // no banco de dados e outras utilizações.
// });

Route::get('/clients', [ClientController::class, 'index'])->name('clients.index');
Route::get('/clients/create', [ClientController::class, 'create'])->name('clients.create');
Route::get('/clients/{id}', [ClientController::class, 'show'])->name('clients.show');
Route::get('/clients/{id}/edite', [ClientController::class, 'edit'])->name('clients.edit');
Route::put('/clients/{id}', [ClientController::class, 'update'])->name('clients.update');
Route::delete('/clients/{id}', [ClientController::class, 'destroy'])->name('clients.destroy');

Route::get('/produtos', [ProdutoController::class, 'index'])->name('produto.index');
Route::get('/produtos/{id}', [ProdutoController::class, 'show'])->name('produto.show');

Route::post('/clients', [ClientController::class, 'store'])->name('clients.store');

Route::get('/estudantes', [EstudanteController::class, 'index'])->name('estudantes.index');
Route::get('/estudantes/create', [EstudanteController::class, 'create'])->name('estudantes.create');
Route::get('/estudantes/{id}', [EstudanteController::class, 'show'])->name('estudantes.show');
Route::get('/estudantes/{id}/edit', [EstudanteController::class, 'edit'])->name('estudantes.edit');
Route::put('/estudantes/{id}', [EstudanteController::class, 'update'])->name('estudantes.update');
Route::delete('/estudantes/{id}', [EstudanteController::class, 'destroy'])->name('estudantes.destroy');

Route::post('/estudantes', [EstudanteController::class, 'store'])->name('estudantes.store');
