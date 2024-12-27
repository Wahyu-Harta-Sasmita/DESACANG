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
    Schema::create('bantuans', function (Blueprint $table) {
        $table->id();
        $table->enum('pkh', ['Ya', 'Tidak']);
        $table->enum('pbh', ['Ya', 'Tidak']);
        $table->enum('kip', ['Ya', 'Tidak']);
        $table->enum('kis', ['Ya', 'Tidak']);
        $table->foreignId('keluarga_id')->constrained()->onDelete('cascade');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bantuan');
    }
};
