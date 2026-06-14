import { toPng } from "html-to-image"
import jsPDF from "jspdf"

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

  return { dataUrl, width, height }
}

export const exportToPNG = async () => {
  try {
    const element = getResumeElement()
    const { dataUrl } = await captureElement(element)

    const link = document.createElement("a")
    link.href = dataUrl
    link.download = "resume.png"
    link.click()
  } catch (error) {
    console.error("Failed to export PNG:", error)
  }
}

export const exportToPDF = async () => {
  try {
    const element = getResumeElement()
    const { dataUrl, width, height } = await captureElement(element)

    const pdf = new jsPDF("p", "mm", "a4")
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (height * pdfWidth) / width

    // Jika konten lebih panjang dari 1 halaman A4, tambahkan halaman baru
    const pageHeight = pdf.internal.pageSize.getHeight()
    if (pdfHeight <= pageHeight) {
      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight)
    } else {
      const totalPages = Math.ceil(pdfHeight / pageHeight)
      for (let i = 0; i < totalPages; i++) {
        if (i > 0) pdf.addPage()
        const yOffset = -(i * pageHeight)
        pdf.addImage(dataUrl, "PNG", 0, yOffset, pdfWidth, pdfHeight)
      }
    }

    pdf.save("resume.pdf")
  } catch (error) {
    console.error("Failed to export PDF:", error)
  }
}
