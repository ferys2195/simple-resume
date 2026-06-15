# Goal

Mengubah fungsionalitas ekspor PDF agar menghasilkan file PDF dengan teks yang dapat di-*block* dan diedit (bukan sekadar gambar yang dimasukkan ke PDF), serta memperbaiki masalah bayangan (*shadow*) yang masih muncul saat proses ekspor.

## User Review Required

> [!IMPORTANT]  
> Untuk menghasilkan PDF dengan teks yang dapat diseleksi/dicopy dari sisi *client* (browser), pendekatan terbaik dan paling standar adalah menggunakan fitur **Print to PDF** bawaan browser (memanggil `window.print()`).
> 
> **Bagaimana cara kerjanya?**
> Saat tombol "Download PDF" diklik, browser akan memunculkan dialog Print. Pengguna cukup memilih **"Save as PDF"** / **"Simpan sebagai PDF"**.
> 
> **Keuntungan:**
> 1. Teks 100% bisa diblok, dicopy, dan dibaca oleh sistem ATS (Applicant Tracking System) milik HRD.
> 2. Kualitas *vector* yang sempurna (tidak akan pecah seberapapun di-zoom).
> 3. File sizenya sangat kecil (dibandingkan PDF berisi gambar).
> 
> **Apakah Anda setuju menggunakan pendekatan `window.print()` ini untuk fitur "Download PDF"?**

## Proposed Changes

### Ekspor PDF (Text-Selectable)
- Mengubah fungsi `exportToPDF` di `lib/export.ts` untuk memanggil `window.print()`.
- Menambahkan aturan CSS `@media print` di `app/globals.css`. Aturan ini secara otomatis akan aktif saat dialog Print muncul:
  - Menyembunyikan tombol navigasi dan header agar tidak ikut ter-print.
  - Menghilangkan *shadow* dan *border/ring* dari semua *card* dan *section*.
  - Menyesuaikan margin dan *page break* agar halamannya rapi saat terpotong.

### Ekspor PNG (Image)
- Tetap menggunakan `html-to-image`.
- Untuk mengatasi masalah *shadow* yang masih tersisa, kita akan menambahkan *class* spesifik (misal: `print-mode`) ke elemen `body` sesaat sebelum proses *capture*, lalu menggunakan CSS murni (meng-override `--tw-shadow` dan `--tw-ring-color`) untuk memastikan shadow dan border benar-benar hilang tanpa merusak struktur DOM.

## Verification Plan
1. Mengklik "Download PDF" harus memunculkan dialog Print browser dengan *preview* resume yang bersih (tanpa tombol header, tanpa bayangan).
2. Mengklik "Download PNG" harus mengunduh file gambar utuh tanpa bayangan yang menumpuk.
