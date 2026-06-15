import { toPng } from "html-to-image"

const getResumeElement = () => {
  const element = document.getElementById("resume-export")
  if (!element) {
    throw new Error("Resume container not found")
  }
  return element
}

/**
 * Mengambil screenshot elemen resume menggunakan html-to-image.
 * Opsi `style` hanya diterapkan pada clone internal library,
 * sehingga tampilan halaman asli tidak berubah sama sekali.
 */
const captureElement = async (element: HTMLElement) => {
  // Scroll ke atas agar posisi capture konsisten
  window.scrollTo(0, 0)
  await new Promise((r) => setTimeout(r, 100))

  // Ambil dimensi asli elemen (tanpa margin)
  const width = element.offsetWidth
  const height = element.scrollHeight

  // Tandai mode export agar CSS menghilangkan shadow/ring pada clone
  element.setAttribute("data-exporting", "true")

  const dataUrl = await toPng(element, {
    quality: 1,
    pixelRatio: 2,
    width,
    height,
    cacheBust: true,
    // Style ini HANYA diterapkan pada clone, bukan pada DOM asli
    style: {
      margin: "0",
      maxWidth: "none",
      width: width + "px",
      height: height + "px",
      overflow: "visible",
      transform: "none",
    },
  })

  // Hapus penanda export dari DOM asli
  element.removeAttribute("data-exporting")

  return { dataUrl, width, height }
}

export const exportToPNG = async () => {
  try {
    const element = getResumeElement()
    const body = document.body

    // Add print-mode class to remove shadows and rings during capture
    body.classList.add("print-mode")

    const { dataUrl } = await captureElement(element)

    // Remove print-mode class after capture
    body.classList.remove("print-mode")

    const link = document.createElement("a")
    link.href = dataUrl
    link.download = "resume.png"
    link.click()
  } catch (error) {
    console.error("Failed to export PNG:", error)
    // Ensure print-mode is removed even if error occurs
    document.body.classList.remove("print-mode")
  }
}

export const downloadDocx = async () => {
  try {
    const response = await fetch("/api/download/docx")
    if (!response.ok) {
      throw new Error("Failed to generate document")
    }

    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "cv-fery-irawan.docx"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error("Failed to download DOCX:", error)
  }
}

export const exportToPDF = () => {
  // Tambahkan class ke body untuk mengaktifkan tampilan print resume
  document.body.classList.add("printing-pdf")
  // Gunakan browser native print
  window.print()
  // Hapus class setelah dialog print ditutup
  setTimeout(() => {
    document.body.classList.remove("printing-pdf")
  }, 1000)
}
