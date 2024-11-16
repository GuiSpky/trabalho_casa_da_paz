<?php

use App\Http\Controllers\EquipeController;
use App\Http\Controllers\FotosController;
use App\Http\Controllers\PainelControlle;
use App\Http\Controllers\ProfileController;
use App\Models\Equipe;
use Faker\Guesser\Name;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('inicio.index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Arquivar foto
    Route::get('/foto', [FotosController::class, 'create'])->name('foto.create');
    Route::post('/foto', [FotosController::class, 'store'])->name('foto.store');
    Route::get('/foto/gerenciar', [FotosController::class, 'index'])->name('foto.index');
    Route::delete('/foto/{id}', [FotosController::class, 'destroy'])->name('foto.destroy');

    // Gerenciar equipe
    Route::get('/equipe', [EquipeController::class, 'index'])->name('equipe.index');
    Route::get('equipe/criar',[EquipeController::class, 'create'])->name('equipe.create');
    Route::post('/equipe', [EquipeController::class, 'store'])->name('equipe.store');
    Route::delete('/equipe/{id}', [EquipeController::class, 'destroy'])->name('equipe.destroy');

    // Rota de inicio
    Route::get('/inicio', [PainelControlle::class, 'index'])->name('incio.index');
});

require __DIR__.'/auth.php';
