// Replace these values with your own
// Replace these values with your own
const email = 'ypur config email';
const key = "Your private key";        //This data you find at JSON credencials from firestore
const projectId = 'Your project ID';

const collectionName = 'Your collection name'; // Replace with your collection name

function exportDataToSheet() {
  // Authentication with Firestore
  const firestore = FirestoreApp.getFirestore(email, key, projectId);

  try {
    // Access the Firestore collection
    const allDocuments = firestore.getDocuments(collectionName);

    // Access the active spreadsheet
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Clear existing data in the spreadsheet
    sheet.clear();

    // Write headers to the spreadsheet
    let headers = Object.keys(allDocuments[0].fields);
    sheet.appendRow(headers);

    // Write data to the spreadsheet
    for (let i = 0; i < allDocuments.length; i++) {
      let document = allDocuments[i];
      let rowData = headers.map(function (header) {
        // Handle Timestamp fields
        if (document.fields[header].timestampValue) {
          return new Date(document.fields[header].timestampValue).toLocaleString();
        }
        // Handle integer fields
        else if (document.fields[header].integerValue) {
          return String(document.fields[header].integerValue);
        }
        // Handle other types
        else {
          return String(document.fields[header].stringValue || '');
        }
      });
      sheet.appendRow(rowData);
    }

    // Set alignment for the entire spreadsheet range
    const lastColumn = sheet.getLastColumn();
    const lastRow = sheet.getLastRow();
    const range = sheet.getRange(1, 1, lastRow, lastColumn);
    range.setHorizontalAlignment("center");
    range.setVerticalAlignment("middle");
  } catch (error) {
    // Handle any authentication or query errors
    Logger.log("Error exporting data to the spreadsheet: " + error);
  }
}

