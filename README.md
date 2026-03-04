# Mythos PDF Cover Letter Generator

## Overview
A modular Node.js command-line tool that parses CSV data and generates dynamic, personalized PDF cover letters using PDFKit. 

## Prerequisites
* Node.js (v16 or higher recommended)
* npm 

## Setup & Installation
1. Clone the repository.
2. Install the required dependencies:
```bash
    npm install
```
## Usage
Place your target CSV file in the `./data` directory. A sample file (`sample.csv`) is included for testing.

Run the script from the root directory:
```bash
    # To run with the default sample data
    node src/index.js
    # To run with a specific dataset
    node src/index.js your_custom_file.csv
```
The generated PDFs will automatically be saved to the `./output` directory.

## Assumptions and Considerations
* There must be a template.txt file in the root folder. A sample one has been included.
* Company name must be one of the columns in the .csv file. It must be titled 'company'. 
* Any number of columns can be added as long as they have a matching field in template.txt. Otherwise they will be ignored. They should be in the following format: [column-name]

The program automatically creates a ./output folder for the .pdf files.
