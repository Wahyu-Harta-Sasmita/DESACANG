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
    Schema::create('ekonomis', function (Blueprint $table) {
        $table->id();
        $table->decimal('pendapatan', 15, 2);
        $table->decimal('pengeluaran', 15, 2);
        $table->decimal('pendapatan_total_keluarga', 15, 2);
        $table->integer('tanggungan');
        $table->foreignId('keluarga_id')->constrained()->onDelete('cascade');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ekonomi');
    }
};
