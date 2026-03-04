import CSVParser from './csvparser.js'
import PDFGenerator from './generator.js'
import SetUp from './setup.js'

const filePath = "./data/" + (process.argv[2] || "sample.csv");
const templatePath = "./template.txt";
const outputDir = "./output";
/**
* Orchestrates the PDF generation pipeline. After getting the template and data parsed
* and loaded, it loops through every row, calling PDFGenerator on each one.
*
* @param {string} targetFile - The relative file path to the input CSV dataset.
* @returns {Promise<void>} Resolves when all PDF generation streams have been initiated.
*/
async function makeCoverLetters(targetFile) {
  const template = SetUp(templatePath, outputDir)
  const parsedData = await CSVParser(targetFile)

  parsedData.data.forEach(row => {
    PDFGenerator(row, template, outputDir)
  });
}
makeCoverLetters(filePath)
