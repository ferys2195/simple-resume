import { NextResponse } from "next/server"
import { generateDocxBuffer } from "@/lib/docx-generator"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const buffer = await generateDocxBuffer()

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": 'attachment; filename="cv-fery-irawan.docx"',
        "Content-Length": buffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("Failed to generate DOCX:", error)
    return NextResponse.json(
      { error: "Failed to generate document" },
      { status: 500 }
    )
  }
}
