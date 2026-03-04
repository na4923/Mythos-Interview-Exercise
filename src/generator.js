import fs from 'node:fs'
import PDFDocument from 'pdfkit';

export default function generatePdf(data, template, outputDir) {
  console.log(`Generating document for ${data['company']}`)

  // Find and replace all fields with data
  let finalText = template;
  let fields = Object.keys(data)
  fields.forEach(field => {
    finalText = finalText.replaceAll(`[${field}]`, data[field]);
  });

  // Write into document
  const doc = new PDFDocument();
  fileName = data['company'].replaceAll("/", "-")
  doc.pipe(fs.createWriteStream(`${outputDir}/${data['company']}.pdf`));
  doc.text(finalText)
  doc.end()
}
