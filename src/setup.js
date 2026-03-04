import fs from 'node:fs'

export default function setUp(templatePath, outputDir) {

  // Make sure output directory exists
  console.log(`Creating output folder at ${outputDir}`);
  try {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Directory confirmed at ${outputDir}`);
  } catch (error) {
    console.error("Failed to create the output folder:", error.message);
    process.exit(1); // Stop the script if folder can't be created
  }

  // Return the cover letter template as a String
  console.log("Reading cover letter template...")
  try {
    const text = fs.readFileSync(templatePath, 'utf8');
    return text;
  } catch (error) {
    console.error(`Error reading ${templatePath}: ${error.message}`);
    process.exit(1);
  }
}
