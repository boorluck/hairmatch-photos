// Google Apps Script — paste into Extensions → Apps Script in your Google Sheet
// Deploy as: Web App → Execute as: Me → Who has access: Anyone
//
// Sheet columns (row 1 headers):
// timestamp | barber_id | photo_filename | side_treatment | fade_finish | fade_shape | top_length | styling_direction | transition | fringe | finish | design_elements | beard | face_visible | usable | notes

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.barber_id || '',
    data.photo_filename || '',
    data.side_treatment || '',
    data.fade_finish || '',
    data.fade_shape || '',
    data.top_length || '',
    data.styling_direction || '',
    data.transition || '',
    data.fringe || '',
    data.finish || '',
    data.design_elements || '',
    data.beard || '',
    data.face_visible || '',
    data.usable !== undefined ? data.usable : '',
    data.notes || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
