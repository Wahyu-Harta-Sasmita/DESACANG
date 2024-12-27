<?php

use App\Http\Controllers\KramaController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return inertia('Home');
});
Route::get('/notifikasi', function () {
    return inertia('Notifikasi');
});
Route::get('/data-penduduk', [KramaController::class, 'index']);
Route::get('/daftar-penduduk', function () {
    return inertia('DaftarPenduduk');
});

Route::get('/admin', function () {
    return inertia('Dashboard');
});


