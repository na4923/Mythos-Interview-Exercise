import fs from 'node:fs'
import PDFDocument from 'pdfkit';

/**
 * Replaces template variables with row data and generates a PDF.
 *
 * @param {Object} data - A single row of parsed CSV data.
 * @param {string} template - The raw text of the cover letter template.
 * @param {string} outputDir - The destination path for the generated PDF.
 */
export default function generatePdf(data, template, outputDir) {
  console.log(`Generating document for ${data['company']}`)
  const doc = new PDFDocument();

  // Find and replace all fields with data
  let finalText = template;
  let fields = Object.keys(data)
  fields.forEach(field => {
    finalText = finalText.replaceAll(`[${field}]`, data[field]);
  });

  // Make sure company name doesn't break the file name
  fileName = data['company'].replaceAll("/", "-")

  // Write into document
  doc.pipe(fs.createWriteStream(`${outputDir}/${data['company']}.pdf`));
  doc.text(finalText)
  doc.end()
}
