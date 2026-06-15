import fs from "fs"
import path from "path"
import PizZip from "pizzip"
import Docxtemplater from "docxtemplater"
import { buildTemplateData } from "./docx-mapper"

export async function generateDocxBuffer(): Promise<Buffer> {
  const templatePath = path.join(process.cwd(), "public", "template.docx")

  if (!fs.existsSync(templatePath)) {
    throw new Error("Template file not found at public/template.docx")
  }

  const template = fs.readFileSync(templatePath, "binary")
  const zip = new PizZip(template)

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  })

  const data = buildTemplateData()

  doc.render(data)

  const buffer = doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  })

  return buffer
}
