<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin', function () {
    return inertia('Dashboard');
});

Route::get('/', fn () => Inertia::render('Home'));
Route::get('/notifikasi', fn () => Inertia::render('Notifikasi'));
Route::get('/data-penduduk', fn () => Inertia::render('DataPenduduk'));
Route::get('/daftar-penduduk', fn () => Inertia::render('DaftarPenduduk'));
