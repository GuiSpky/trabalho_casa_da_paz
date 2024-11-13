<?php

use App\Http\Controllers\FotosController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Arquivar foto
    Route::get('/foto', [FotosController::class, 'create'])->name('foto.create');
    Route::post('/foto', [FotosController::class, 'store'])->name('foto.store');
});

require __DIR__.'/auth.php';
