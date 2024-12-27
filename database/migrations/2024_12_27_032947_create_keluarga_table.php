<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('keluargas', function (Blueprint $table) {
        $table->id();
        $table->string('no_kk', 16)->unique();
        $table->string('nik_kepala_keluarga', 16);
        $table->string('hubungan_kepala_keluarga', 50);
        $table->integer('jumlah_anggota_keluarga');
        $table->foreignId('biodata_id')->constrained()->onDelete('cascade');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('keluarga');
    }
};
