import CSVParser from './csvparser.js'
import PDFGenerator from './generator.js'
import SetUp from './setup.js'

const filePath = "./data/" + (process.argv[2] || "leads.csv");
const templatePath = "./template.txt";
const outputDir = "./output";

async function makeCoverLetters(targetFile) {
  const template = SetUp(templatePath, outputDir)
  const parsedData = await CSVParser(targetFile)

  parsedData.data.forEach(row => {
    PDFGenerator(row, template, outputDir)
  });
}
makeCoverLetters(filePath)
