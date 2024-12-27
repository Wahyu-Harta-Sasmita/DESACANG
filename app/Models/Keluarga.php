<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keluarga extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'no_kk',
        'nik_kepala_keluarga',
        'hubungan_dengan_kepala_keluarga',
        'jumlah_orang_dalam_keluarga',
        'path',
        'image',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}