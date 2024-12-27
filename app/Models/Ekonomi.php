<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ekonomi extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'pendapatan',
        'pengeluaran',
        'pendapatan_total_keluarga',
        'tanggungan',
        'image',
        'path'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}