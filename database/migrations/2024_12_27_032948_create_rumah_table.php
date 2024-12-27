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
    Schema::create('rumahs', function (Blueprint $table) {
        $table->id();
        $table->string('luas', 50);
        $table->text('alamat_sekarang');
        $table->text('alamat_asal');
        $table->string('geolocation');
        $table->foreignId('keluarga_id')->constrained()->onDelete('cascade');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rumah');
    }
};
