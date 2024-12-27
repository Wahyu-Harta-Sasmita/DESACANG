<?php

namespace App\Http\Controllers;
use App\Models\Biodata;
use Illuminate\Http\Request;

class ValidasiController extends Controller
{
    public function index()
    {
        // Mengambil data yang perlu divalidasi
        $data = Biodata::all();
        return response()->json($data, 200);
    }

    public function approve($nik)
    {
        $data = Biodata::where('nik', $nik)->first();

        if (!$data) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        $data->status = 'approved';
        $data->save();

        return response()->json(['message' => 'Data berhasil divalidasi'], 200);
    }

    public function reject(Request $request, $nik)
    {
        $data = Biodata::where('nik', $nik)->first();

        if (!$data) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        $data->status = 'rejected';
        $data->alasan = $request->input('alasan');
        $data->save();

        return response()->json(['message' => 'Data berhasil ditolak'], 200);
    }
}
