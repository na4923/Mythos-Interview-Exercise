import { readFile } from 'fs/promises';
import Papa from 'papaparse'

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
