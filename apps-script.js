// Google Apps Script — paste into Extensions → Apps Script in your Google Sheet
// Deploy as: Web App → Execute as: Me → Who has access: Anyone
//
// Sheet columns (row 1 headers):
// timestamp | barber_id | photo_filename | style | fade | hair_texture | beard | face_visible | face_shape | hair_color | age_group | usable | notes

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.barber_id || '',
    data.photo_filename || '',
    data.style || '',
    data.fade || '',
    data.hair_texture || '',
    data.beard || '',
    data.face_visible || '',
    data.face_shape || '',
    data.hair_color || '',
    data.age_group || '',
    data.usable !== undefined ? data.usable : '',
    data.notes || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
