# Feature Planning: Generate CV to PDF and PNG

## 🎯 Objective
Mengubah fungsionalitas tombol "Download CV" yang sudah ada menjadi sebuah **Dropdown Menu**. Dropdown ini akan memberikan dua opsi kepada pengguna:
1. Download sebagai PDF
2. Download sebagai PNG

Fitur ini akan mengambil *screenshot* atau me-render tampilan halaman resume saat ini ke dalam format file yang dipilih.

---

## 🛠️ Tech Stack & Library Recommendations
Untuk memudahkan pengerjaan, direkomendasikan menggunakan kombinasi library berikut:
- **UI Component**: `DropdownMenu` dari `shadcn/ui` (sudah ter-install di proyek, atau perlu di-add via CLI).
- **PDF & PNG Generation**: 
  - `html2canvas` (Untuk mengambil *screenshot* elemen HTML menjadi gambar PNG/Canvas).
  - `jspdf` (Untuk mengubah hasil Canvas dari `html2canvas` menjadi file PDF).
  - *Alternatif lain:* `html-to-image` (untuk PNG) dan `react-to-pdf` (untuk PDF).

---

## 📋 Task Breakdown (Langkah Pengerjaan)

### Phase 1: Setup UI (Tombol Dropdown)
1. Buka terminal, pastikan berada di root proyek. Jika komponen `DropdownMenu` belum ada, install menggunakan shadcn CLI:
   ```bash
   npx shadcn-ui@latest add dropdown-menu
   ```
2. Cari komponen tombol "Download CV" yang saat ini digunakan (kemungkinan berada di `components/layout/` atau komponen header utama).
3. Ganti tombol biasa tersebut dengan komponen `DropdownMenu`.
4. Buat dua `DropdownMenuItem`:
   - "Download PDF" (Bisa ditambahkan icon file PDF dari `lucide-react`)
   - "Download PNG" (Bisa ditambahkan icon file gambar dari `lucide-react`)

### Phase 2: Fungsionalitas Export PNG
1. Install library `html2canvas`:
   ```bash
   npm install html2canvas
   ```
2. Buat fungsi utilitas (misalnya `exportToPNG` di folder `lib/export.ts` atau di dalam komponen tersebut).
3. Fungsi ini harus:
   - Mendapatkan referensi DOM (`ref` atau `document.getElementById`) dari *container* utama resume (area yang membungkus seluruh konten CV).
   - Memanggil `html2canvas` pada elemen tersebut.
   - Mengubah hasil canvas menjadi data URL (`canvas.toDataURL("image/png")`).
   - Membuat elemen `<a>` virtual untuk men-trigger download file `resume.png` secara otomatis.
4. Hubungkan fungsi ini ke tombol (onClick) "Download PNG" di Dropdown.

### Phase 3: Fungsionalitas Export PDF
1. Install library `jspdf`:
   ```bash
   npm install jspdf
   ```
2. Buat fungsi utilitas (misalnya `exportToPDF`).
3. Fungsi ini harus:
   - Menggunakan pendekatan yang sama dengan Phase 2 (memanggil `html2canvas` untuk mendapatkan gambar berkualitas tinggi dari halaman).
   - Menginisialisasi dokumen `jsPDF` (format A4).
   - Menghitung proporsi skala gambar agar pas dengan ukuran kertas A4 di PDF.
   - Memasukkan gambar ke dalam dokumen PDF menggunakan `pdf.addImage()`.
   - Menyimpan dan men-download file dengan nama `resume.pdf`.
4. Hubungkan fungsi ini ke tombol (onClick) "Download PDF" di Dropdown.

---

## ⚠️ Catatan Penting / Gotchas
- **Resolusi Gambar**: Saat menggunakan `html2canvas`, set opsi `scale: 2` (atau lebih) agar hasil PDF dan PNG tidak buram/pecah pada layar beresolusi tinggi (Retina display).
- **Dark Mode**: Jika website sedang dalam *dark mode*, pastikan *background* elemen tidak transparan atau berwarna aneh saat dirender menjadi PDF/PNG. Lebih baik memaksa *background* menjadi warna solid pada *container* utama (misal: `bg-white dark:bg-zinc-950`).
- **Responsive Issue**: Saat men-generate file (terutama PDF), pastikan lebar *container* yang difoto sudah fix atau ideal (seperti tampilan desktop), karena men-generate tampilan mobile ke PDF A4 biasanya akan terlihat aneh.
