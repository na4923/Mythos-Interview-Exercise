import { readFile } from 'fs/promises';
import Papa from 'papaparse'

/**
 * Reads a .csv file and returns a JSON object
 *
 * @param   {string} filePath - path to the .csv file to parse
 * @returns {Promise<Object>} result - JSON-style Object with the parsed data
 */
export default async function parseFile(filePath) {
  console.log('Reading file contents...')
  const fileContent = await readFile(filePath, 'utf8');

  console.log('Parsing file contents...')
  const result = Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  return result
}
