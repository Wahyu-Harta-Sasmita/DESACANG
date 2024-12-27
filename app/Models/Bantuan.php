<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bantuan extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'id_user',
        'pkh',
        'pbh',
        'kip',
        'kis',
        'filepkh',
        'filepbh',
        'filekip',
        'filekis',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}